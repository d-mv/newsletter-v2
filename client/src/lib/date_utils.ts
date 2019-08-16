import { data } from '../data/index';

export const compareDates = (date1: Date, date2: Date): boolean =>
  date1.getDay() === date2.getDay() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

export const makeDateFromText = (text: string | Date): string => {
  let date: Date = text as Date;
  if (typeof text === 'string') {
    date = new Date(text);
  }
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  let result = '';
  if (compareDates(date, today)) {
    result = 'today';
  } else if (compareDates(date, yesterday)) {
    result = 'yesterday';
  } else {
    result = `${data.days[date.getDay() + 1]}, ${date.getDate()} ${
      data.months[date.getMonth()]
    } '${date.getFullYear() - 2000}`;
  }
  return result;
};
