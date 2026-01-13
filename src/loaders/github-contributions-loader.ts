import type { Loader } from 'astro/loaders';
import type { GitHubGraphQLResponse } from '../types/github';

interface LoaderOptions {
  username?: string;
}

export function githubContributionsLoader(options: LoaderOptions = {}): Loader {
  return {
    name: 'github-contributions-loader',
    load: async ({ store, logger, meta }) => {
      const token = import.meta.env.GITHUB_TOKEN;
      const username = options.username || import.meta.env.GITHUB_USERNAME || 'ASHWIN776';

      if (!token) {
        logger.warn('GITHUB_TOKEN not found. GitHub contributions will not be loaded.');
        logger.warn('Generate a token at https://github.com/settings/tokens with read:user scope');
        return;
      }

      // Calculate date range for last 365 days
      const to = new Date();
      const from = new Date();
      from.setFullYear(from.getFullYear() - 1);

      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    color
                  }
                }
              }
            }
          }
        }
      `;

      try {
        logger.info(`Fetching GitHub contributions for ${username}...`);

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: {
              username,
              from: from.toISOString(),
              to: to.toISOString(),
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`);
        }

        const result = await response.json() as GitHubGraphQLResponse;

        if (!result.data?.user?.contributionsCollection) {
          throw new Error('Invalid response from GitHub API');
        }

        const calendar = result.data.user.contributionsCollection.contributionCalendar;

        // Store the contribution data with a single ID
        store.set({
          id: 'contributions',
          data: {
            totalContributions: calendar.totalContributions,
            weeks: calendar.weeks,
          },
        });

        logger.info(`Successfully loaded ${calendar.totalContributions} contributions`);
      } catch (error) {
        logger.error(`Failed to fetch GitHub contributions: ${error instanceof Error ? error.message : 'Unknown error'}`);

        // Check if we have cached data
        const cachedData = store.get('contributions');
        if (cachedData) {
          logger.info('Using cached contribution data from previous build');
        } else {
          logger.warn('No cached data available. GitHub contributions will not be displayed.');
        }
      }
    },
  };
}
