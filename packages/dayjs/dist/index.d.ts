import dayjs from 'dayjs';
export { default as dayjs } from 'dayjs';

declare const dateFormat: (date: Date | dayjs.Dayjs | string, format?: string) => string;
declare const getCalendarArray: (date: Date | dayjs.Dayjs | string) => Date[][];
declare const getAge: (birthday: string) => number;
declare const getBirthYearFromAge: (age: number, baseDate?: string, format?: string) => string;

export { dateFormat, getAge, getBirthYearFromAge, getCalendarArray };
