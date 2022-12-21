const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const day = document.querySelector(".date-day");
const dayOfMonth = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");

//
const digitalClock = document.querySelector(".digital-clock");
//
const arrowHour = document.querySelector(".clock-hours__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrowSeconds = document.querySelector(".clock-seconds__arrow");

// setInterval(() => {
//   const currentTime = new Date();
//   const timeDay = namesOfDay[currentTime.getDay()];
//   const timeDate = currentTime.getDate();
//   const timeMonth = namesOfMonth[currentTime.getMonth()];
//   const timeYear = currentTime.getFullYear();
//   //---- годинник
//   const timeHour = currentTime.getHours();
//   const timeMinutes = currentTime.getMinutes();
//     const timeSeconds = currentTime.getSeconds();

//   const totalTime = `${timeHour.toString().padStart(2, 0)} : ${timeMinutes
//     .toString()
//     .padStart(2, 0)} : ${timeSeconds.toString().padStart(2, 0)}`;

//   //-----день тиждень місяць рік
//   day.textContent = timeDay;
//   dayOfMonth.textContent = timeDate;
//   month.textContent = timeMonth;
//   year.textContent = timeYear;
//   // годинник
//   digitalClock.textContent = totalTime;

//   //
//   const forSeconds = timeSeconds * (360 / 60);
//   const forMinutes = timeMinutes * (360 / 60);
//   const forHour = timeHour * (360 / 12) + timeMinutes * (30 / 60);
//   arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
//   arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
//   arrowHour.style.transform = `rotate(${forHour}deg)`;
// }, 1000);

setInterval(() => {
  const currentTime = new Date();
  const date = makeDate(currentTime);
  createDigitalClock(date);
  createClock(date);
}, 1000);

function createDigitalClock(date) {
  const totalTime = `${date.timeHour
    .toString()
    .padStart(2, 0)} : ${date.timeMinutes
    .toString()
    .padStart(2, 0)} : ${date.timeSeconds.toString().padStart(2, 0)}`;

  //-----день тиждень місяць рік
  day.textContent = date.timeDay;
  dayOfMonth.textContent = date.timeDate;
  month.textContent = date.timeMonth;
  year.textContent = date.timeYear;
  // годинник
  digitalClock.textContent = totalTime;
}

function createClock(date) {
  const forSeconds = date.timeSeconds * (360 / 60);
  const forMinutes = date.timeMinutes * (360 / 60);
  const forHour = date.timeHour * (360 / 12) + date.timeMinutes * (30 / 60);
  arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
  arrowHour.style.transform = `rotate(${forHour}deg)`;
}
function makeDate(time) {
  const timeDay = namesOfDay[time.getDay()];
  const timeDate = time.getDate();
  const timeMonth = namesOfMonth[time.getMonth()];
  const timeYear = time.getFullYear();
  //---- годинник
  const timeHour = time.getHours();
  const timeMinutes = time.getMinutes();
  const timeSeconds = time.getSeconds();
  return {
    timeDay,
    timeDate,
    timeMonth,
    timeYear,
    timeHour,
    timeMinutes,
    timeSeconds,
  };
}
