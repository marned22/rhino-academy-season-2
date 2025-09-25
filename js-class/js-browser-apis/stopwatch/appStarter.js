let time = 0
let interval;
let miliseconds = 0
let isRunning = false
let display = document.getElementsByClassName("timerDisplay")[0]


function displayTimer() {
  // here we should write the logic to increment/display the timer
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time % 3600) / 60)
    let seconds = time % 60

    let hoursStr = hours < 10 ? "0" + hours : hours;
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;
    let secondsStr = seconds < 10 ? "0" + seconds : seconds;
    let milisecondsStr = miliseconds < 10 ? "00" + miliseconds : (miliseconds < 100 ? "0" + miliseconds : miliseconds)

    display.innerHTML = `${hoursStr} : ${minutesStr} : ${secondsStr} : ${milisecondsStr}`;
}

document.getElementById('startTimer').addEventListener('click', () => {
  // here the timer should start
  if(!isRunning) {
    isRunning = true
    interval = setInterval(() => {
      miliseconds += 10
      if(miliseconds >= 1000) {
        miliseconds = 0;
        time += 1
      }
      displayTimer();
    }, 10)
  }
});

document.getElementById('pauseTimer').addEventListener('click', () => {
  // here the timer should pause
  if(isRunning){
    clearInterval(interval)
    isRunning = false
  }
});

document.getElementById('resetTimer').addEventListener('click', () => {
  // here the timer should reset
  clearInterval(interval)
  isRunning = false
  time = 0
  miliseconds = 0
  display.innerHTML = "00 : 00 : 00 : 000"
});