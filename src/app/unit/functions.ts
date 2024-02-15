import BigNumber from "bignumber.js";

export function formatDate(originalDateString: string): string {
  const originalDate = new Date(originalDateString);

  const day = originalDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[originalDate.getMonth()];
  const year = originalDate.getFullYear();
  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();

  const newDay = day < 10 ? "0" + day : day;
  const newMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedDateString =
    month + " " + newDay + ", " + year + " " + hours + ":" + newMinutes;
  return formattedDateString;
}

export const formatLargeNumber = (value: number | string): string => {
  const bigNumber = Number(value);

  if (bigNumber < 1e3) {
    return bigNumber.toString();
  } else if (bigNumber < 1e6) {
    return (bigNumber / 1e3).toFixed(2) + "K";
  } else if (bigNumber < 1e9) {
    return (bigNumber / 1e6).toFixed(2) + "M";
  } else if (bigNumber < 1e12) {
    return (bigNumber / 1e9).toFixed(2) + "B";
  } else {
    return (bigNumber / 1e12).toFixed(2) + "T";
  }
};
