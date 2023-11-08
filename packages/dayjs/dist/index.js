"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  dateFormat: () => dateFormat,
  dayjs: () => import_dayjs.default,
  getAge: () => getAge,
  getBirthYearFromAge: () => getBirthYearFromAge,
  getCalendarArray: () => getCalendarArray
});
module.exports = __toCommonJS(src_exports);
var import_ja = require("dayjs/locale/ja");
var import_dayjs = __toESM(require("dayjs"));
var import_advancedFormat = __toESM(require("dayjs/plugin/advancedFormat"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
var import_isoWeek = __toESM(require("dayjs/plugin/isoWeek"));
var import_timezone = __toESM(require("dayjs/plugin/timezone"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
var import_weekOfYear = __toESM(require("dayjs/plugin/weekOfYear"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_weekOfYear.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_advancedFormat.default);
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.locale("ja");
import_dayjs.default.tz.setDefault("Asia/Tokyo");
import_dayjs.default.Ls.ja = {
  ...import_dayjs.default.Ls.ja,
  weekStart: 1
  // 週の始まりを月曜日に設定
};
var dateFormat = (date, format = "YYYY/MM/DD") => {
  return (0, import_dayjs.default)(date).format(format);
};
var getCalendarArray = (date) => {
  const startOfMonth = (0, import_dayjs.default)(date).startOf("month");
  const endOfMonth = (0, import_dayjs.default)(date).endOf("month");
  let weekStart = startOfMonth.startOf("week");
  const weeks = [];
  while (weekStart <= endOfMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(weekStart.toDate());
      weekStart = weekStart.add(1, "day");
    }
    weeks.push(week);
  }
  return weeks;
};
var getAge = (birthday) => {
  const today = (0, import_dayjs.default)();
  const birthDate = (0, import_dayjs.default)(birthday);
  let age = today.year() - birthDate.year();
  const m = today.month() - birthDate.month();
  if (m < 0 || m === 0 && today.date() < birthDate.date()) {
    age--;
  }
  return age;
};
var getBirthYearFromAge = (age, baseDate = (0, import_dayjs.default)().format("YYYY-MM-DD"), format = "YYYY-MM") => {
  const birthDate = (0, import_dayjs.default)(baseDate).subtract(age, "year");
  return birthDate.format(format);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dateFormat,
  dayjs,
  getAge,
  getBirthYearFromAge,
  getCalendarArray
});
