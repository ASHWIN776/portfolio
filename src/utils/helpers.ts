export const getFormattedDate = (date: Date) => {
  const strDate = date.toString().split(" ")
  
  return `${strDate[2]} ${strDate[1]} ${strDate[3]}`
}