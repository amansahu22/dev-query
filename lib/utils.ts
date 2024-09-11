import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date) => {
  const now = new Date();
  const seconds = Math.floor(
    (now.getTime() - new Date(createdAt).getTime()) / 1000
  );

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(days / 365);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
};

export const formatLargeNumber = (num: number) => {
  if (Math.abs(num) >= 1.0e9) {
    return (num / 1.0e9).toFixed(1) + "B"; // Billions
  } else if (Math.abs(num) >= 1.0e6) {
    return (num / 1.0e6).toFixed(1) + "M"; // Millions
  } else if (Math.abs(num) >= 1.0e3) {
    return (num / 1.0e3).toFixed(1) + "K"; // Thousands
  } else {
    return num.toString(); // If the number is less than 1000, return it as is
  }
};
