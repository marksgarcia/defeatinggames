import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export const currentLocalTimeUTC = dayjs().valueOf()

const convertHours = (hours) => {
  let final_hours = null;
  let final_minutes = "00";
  let final_time = null;

  final_hours = `${Math.floor(hours / 100)}`;

  if ((hours - 30) % 100 === 0) {
    final_minutes = "30";
  }

  final_time = `${final_hours}:${final_minutes}`;

  return final_time;
};

const convertTimesToLocal = (time_value, date_value) => {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeValue = convertHours(time_value);
  const time = dayjs(`${date_value}, ${timeValue}`).toISOString();
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const easternTZ = dayjs.tz(time, "America/Chicago").toISOString();
  const local_tz = dayjs(easternTZ).utc("ZZ").local();
  const js_date = local_tz.toDate();
  const day_of_the_week = DAYS[js_date.getDay()];
  const date = js_date.getDate();
  const month = MONTHS[js_date.getMonth()];
  const year = js_date.getFullYear();
  const localTime = local_tz.format("hh:mm A");
  const timeInt = dayjs(local_tz).valueOf()
  return { day_of_the_week, date, month, localTime, year, timeInt };
};

export const streamerScheduleDetails = (start_time, end_time, day) => {
  const {
    day_of_the_week: start_dow,
    date: start_date,
    month: start_month,
    localTime: local_start_time,
    year: start_year,
    timeInt: start_time_int,
  } = convertTimesToLocal(start_time, day);
  const {
    day_of_the_week: end_dow,
    date: end_date,
    month: end_month,
    localTime: local_end_time,
    year: end_year,
    timeInt: end_time_int,
  } = convertTimesToLocal(end_time, day);
  const streamerSchedule = {
    start: {
      day_of_the_week: start_dow,
      date: start_date,
      month: start_month,
      local_time: local_start_time,
      year: start_year,
      time_int: start_time_int,
    },
    end: {
      day_of_the_week: end_dow,
      date: end_date,
      month: end_month,
      local_time: local_end_time,
      year: end_year,
      time_int: end_time_int,
    },
  };
  return streamerSchedule;
};
