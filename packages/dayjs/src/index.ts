import "dayjs/locale/ja";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import isoWeek from "dayjs/plugin/isoWeek";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);

dayjs.locale("ja");
dayjs.tz.setDefault("Asia/Tokyo");

// 日本のカスタムロケール設定
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
dayjs.Ls.ja = {
  ...dayjs.Ls.ja,
  weekStart: 1, // 週の始まりを月曜日に設定
};

export const dateFormat = (
  date: Date | dayjs.Dayjs | string,
  format = "YYYY/MM/DD",
) => {
  return dayjs(date).format(format);
};

export const getCalendarArray = (date: Date | dayjs.Dayjs | string) => {
  const startOfMonth = dayjs(date).startOf("month");
  const endOfMonth = dayjs(date).endOf("month");

  let weekStart = startOfMonth.startOf("week");
  const weeks: Date[][] = [];

  while (weekStart <= endOfMonth) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(weekStart.toDate());
      weekStart = weekStart.add(1, "day");
    }
    weeks.push(week);
  }
  return weeks;
};

export const getAge = (birthday: string) => {
  const today = dayjs();
  const birthDate = dayjs(birthday);

  let age = today.year() - birthDate.year();
  const m = today.month() - birthDate.month();

  if (m < 0 || (m === 0 && today.date() < birthDate.date())) {
    age--;
  }

  return age;
};

export const getBirthYearFromAge = (
  age: number,
  baseDate: string = dayjs().format("YYYY-MM-DD"),
  format = "YYYY-MM",
) => {
  const birthDate = dayjs(baseDate).subtract(age, "year");
  return birthDate.format(format);
};

export { dayjs };
