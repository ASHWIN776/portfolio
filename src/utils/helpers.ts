export const getFormattedDate = (date: Date) => {
  const strDate = date.toString().split(" ")
  return `${strDate[2]} ${strDate[1]} ${strDate[3]}`
}

export function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export function calculateDuration(start: string, end: string | undefined): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = (endDate.getMonth() - startDate.getMonth()) + 1; // calculate from the end of the end month

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years === 0) {
    return `${months} ${months === 1 ? 'mo' : 'mos'}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  } else {
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${months} ${months === 1 ? 'mo' : 'mos'}`;
  }
}