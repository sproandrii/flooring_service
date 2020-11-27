// const h1 = document.querySelector('h1');
// h1.innerText += ' from Andy'
// h1.hidden = true;


// const blink = document.querySelector('.btn-call-me-back')
// blink.hidden = false;
// setInterval(() => blink.hidden = !blink.hidden, 2000)


// const clock = document.querySelector('.clock')
// setInterval( () => clock.innerText = new Date().toLocaleTimeString(), 1000)


// const countdown = document.querySelector('.countdown');
// document.querySelector('.new-year').innerText = 'New Year is comming';
// document.querySelector('.countdown').innerText = 'Cound Down: '
// newYearTime = new Date();
// newYearTime.setSeconds(newYearTime.getSeconds() + 5);
// setInterval( () => {
//     const left = newYearTime.getSeconds() - new Date().getSeconds();
//     if (left > 0) {
//         countdown.innerText = left;
//     } else {
//         document.querySelector('.countdown').hidden = true;
//         document.querySelector('.new-year').innerText = "Let's start it!";
//     }
// }, 1000)

// const newYear = new Date('Jan 01, 2021 00:00:00').getTime();
// const countdownToNewYear = setInterval( () => {
//     const currentTime = new Date().getTime();
//     const duration = newYear - currentTime;
//     const days = Math.floor(duration / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((duration % (1000 * 60)) / 1000);
//     if (duration > 0) {
//         document.querySelector('.new-year-label').innerText = 'New Year is coming'
//         document.querySelector('.countdown-to-new-year').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//     } else {
//         document.querySelector('.countdown-to-new-year').hidden = true;
//         document.querySelector('.new-year-label').innerText = 'Classmates, Happy New Year!'
//     }
// }, 1000)
// const test = [`
//     <div>
//         <p>Hay, what's up?</p>
//     </div>`,
//     'dsadasd',
//     'sdsddsd'
// ]


// plusFiveSec =  new Date();
// const countdown = document.querySelector('.countdown');
// plusFiveSec.setSeconds(plusFiveSec.setSeconds() + 5);
// setInterval( () => {
//     const left = plusFiveSec.getSeconds() - new Date().getSeconds();
//     if (left > 0) {
//         countdown.innerText = left;
//     } else {
//         document.querySelector('.countdown').hidden = true;
//         document.querySelector('.new-year').innerText = '';
//     }
// }, 1000)
// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');
// const countdown = document.getElementById('countdown');
// const year = document.getElementById('year');
// const loading = document.getElementById('loading');

// const currentYear = new Date().getFullYear();

// const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// // Set background year
// // year.innerText = currentYear + 1;

// // Update countdown time
// function updateCountdown() {
//   const currentTime = new Date();
//   const diff = newYearTime - currentTime;

//   const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//   const h = Math.floor(diff / 1000 / 60 / 60) % 24;
//   const m = Math.floor(diff / 1000 / 60) % 60;
//   const s = Math.floor(diff / 1000) % 60;

//   // Add values to DOM
//   days.innerHTML = d;
//   hours.innerHTML = h < 10 ? '0' + h : h;
//   minutes.innerHTML = m < 10 ? '0' + m : m;
//   seconds.innerHTML = s < 10 ? '0' + s : s;
// }

// // Show spinner before countdown
// setTimeout(() => {
//   loading.remove();
//   countdown.style.display = 'flex';
// }, 1000);

// // Run every second
// setInterval(updateCountdown, 1000);
