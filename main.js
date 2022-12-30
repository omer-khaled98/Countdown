let coundownDate = new Date("Nov 30, 2023 23:59:59").getTime();
// console.log(newDate);

setInterval(() => {
  let dateNow = new Date().getTime();

  let dataDeff = coundownDate - dateNow;

  let days = Math.floor(dataDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dataDeff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  let minutes = Math.floor((dataDeff % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((dataDeff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  // console.log(days);
}, 1000);
