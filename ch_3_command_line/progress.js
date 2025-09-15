const ProgressBar = require('progress')
const bar1 = new ProgressBar(':current/:total', { total: 10 })
const bar2 = new ProgressBar(':percentage', { total: 10 })
const bar3 = new ProgressBar(':bar', { total: 10 })
const bar4 = new ProgressBar(':elapsed', { total: 10 })
const timer1 = setInterval(() => {
bar1.tick()
if (bar1.complete) {
clearInterval(timer1)
}
}, 1000);

const timer2 = setInterval(() => {
bar2.tick()
if (bar2.complete) {
clearInterval(timer2)
}
}, 2000);

const timer3 = setInterval(() => {
bar3.tick()
if (bar3.complete) {
clearInterval(timer3)
}
}, 3000);

const timer4 = setInterval(() => {
bar4.tick()
if (bar4.complete) {
clearInterval(timer4)
}
}, 4000);
