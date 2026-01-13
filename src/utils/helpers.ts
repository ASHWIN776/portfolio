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