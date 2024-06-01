export const parseDate = (dateStr: string) => {
  const [_, monthStr, year] = dateStr.split(" ");
  const date = new Date(`${monthStr} 1, ${year}`);
  return date.getTime();
};
