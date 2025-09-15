const cliProgress = require('cli-progress');

// create a multi bar
const multibar = new cliProgress.MultiBar({
  clearOnComplete: false,
  hideCursor: true,
  format: '{bar} | {percentage}% | {value}/{total}'
}, cliProgress.Presets.shades_grey);

// create individual bars
const bar1 = multibar.create(10, 0);
const bar2 = multibar.create(10, 0);
const bar3 = multibar.create(10, 0);
const bar4 = multibar.create(10, 0);

const timer1 = setInterval(() => {
  bar1.increment();
  if (bar1.value >= bar1.total) clearInterval(timer1);
}, 1000);

const timer2 = setInterval(() => {
  bar2.increment();
  if (bar2.value >= bar2.total) clearInterval(timer2);
}, 2000);

const timer3 = setInterval(() => {
  bar3.increment();
  if (bar3.value >= bar3.total) clearInterval(timer3);
}, 3000);

const timer4 = setInterval(() => {
  bar4.increment();
  if (bar4.value >= bar4.total) {
    clearInterval(timer4);
    multibar.stop();  // Stop the multibar once all are complete
  }
}, 4000);
