---
title: 'Re-imagining money management with AI'
pubDate: 2025-05-15
oneLiner: 'Building a money management app that actually solves real problems'
tags: ["finance", "ai", "side project", "app"]
---

## TL;DR

I'm building an app that uses AI to tackle the real challenges I face with money management apps:

- Recording an expense is a chore
- Getting meaningful spending insights is hard
- Bill splitting is a real pain

The demo of the MVP (currently includes the solutions to the problems **1 and 2**, 3 is WIP) can be found [here](https://youtu.be/4HmYupihado)

---

> If you have lots of startup ideas and you're not sure which one to focus on, focus on the one you and your friends are most eager to use.

Paul Graham [tweeted](https://x.com/paulg/status/1919144731369472225) this recently, and it made me go faster on this.

Knowing where my money goes is the first step to managing it well. I have lost the battle if I don't record my expenses. 

But, lets be real, recording expenses is not fun. 

I've tried many money management apps, and no matter how good they are, I always end up running into issues that make me stop using them.

I've noticed that my friends face the same problem too.

Let me dwell on the them now,

## Problems

<aside>
The problems revolve around <strong>inputting</strong> the data (recording an expense), <strong>using</strong> the data (spending insights), and <strong>bill splitting</strong>
</aside>

Let's expand on the above,

### 1. **Recording an expense**

> I don't record my expenses because its too much work

Look at the bill, calculate the amount, record it - do this for every single expense, time consuming!

At first I try to be consistent, but gradually meet my fate and get lazy to record them.

### 2. **Using the Data**

> Even if I record my expenses, I rarely get any real insights from them

- Most apps just show the same basic comparisons and charts, they don't let me dig deeper or ask custom questions about my spending.
- I almost never get practical suggestions on how to actually save money or cut down on unnecessary expenses. Ok, if not suggestions, at least some stats on my spending patterns?

### 3. **Bill Splitting** 

> There are other apps that do this, but they only focus on bill splitting and have no records for personal expenses, but I need everything in one place.

Bill splitting is a real pain because we need a different app to do it. So recording it at 2 places makes it more work, and the resistance of doing it makes me just do the split (because I need that money), and not record it in my money manager.

Feel relatable yet?

## My Attempt

I am currently working on an app that leverages AI to address the above problems. It is currently in the MVP phase, and I am working on the following features,

###  1. **Multi-modal Input**

Expenses can be recorded in multiple ways, namely:

- Upload **Receipts**
- Send **Text** - "Bought Coffee for 590 yen, tomatoes for 200 yen, and bread for 100 yen"
- Upload **Bank Statements**
- **Voice** Input

### 2. **Custom Insights on demand**

Ask anything about your expenses, and get the answer. Whether you're curious about your spending patterns for a specific category or any other detail, just ask and get instant insights.

<aside>
These insights if shown graphically, will help in understanding the financial state better - which ultimately helps in making better decisions.
</aside>

> - "Explain my spending on coffee in the last month?"
> - "What is my spending progression at Starbucks in the last week?"
> - "Tell me about my bills for the past 4 months?"

I would really appreciate an app that could simply show me these insights, along with some graphs illustrating how my spending patterns have changed over time for the above questions.

### 3. **Bill Splitting** (WIP)

I just need the app to help me split expenses when I record them (or even afterwards, doesn't matter).

<aside>
I want to especially know the blocked money:


1. <strong>Debt</strong> - How much I owe to whom
2. <strong>Credit</strong> - How much I am owed by whom
</aside>

I need these details **alongside** my personal expenses, so I can understand how much money I actually have.

### 4. **Ad-hoc Insights** (Bonus)

The custom analysis is as good as the person who is using it, as it depends on the user's questions. Though, it's a great feature to have, I think ad-hoc insights can be a game-changer, as it can help users understand their expenses better.

It's like having an advisor who constantly looks over your expenses, and alerts you to any outliers or significant patterns.

---

## Conclusion

I still need to think more about integrating banks directly, so users won't have to worry about uploading bank statements. However, banks are understandably difficult to integrate with, and the legal restrictions are quite strong, especially here in Japan, where regulations around financial data are particularly strict.

That said, this project has been a fascinating one. It served as a great catalyst for learning **React Native**, and I'm glad I took on the challenge.

One more skill acquired!