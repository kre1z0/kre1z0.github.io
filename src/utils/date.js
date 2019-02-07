export const format = date => {
  if (!isNaN(+date) && date !== null) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const zeroToMonth = monthIndex + 1 < 10 ? "0" : "";
    return `${day}.${zeroToMonth}${monthIndex + 1}.${year}`;
  } else {
    return "";
  }
};
