const display = document.getElementById("display");
let isRunning = false;
let timer = null;
let startTime = 0;
let elapsedTime = 0;

function start() {

  if(!isRunning) {
    startTime = Date.now() - elapsedTime;
    // console.log(startTime);
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {

  if(isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}


function update() {

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60 )) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milis = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, 0);
  minutes = String(minutes).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);
  milis = String(milis).padStart(2, 0);

  display.textContent = `${hours}:${minutes}:${seconds}:${milis}`;
}

function reset() {
  if(isRunning) {
    stop();
  }
  isRunning = false;
  timer = null;
  startTime = 0;
  elapsedTime = 0;  
  display.textContent = "00:00:00:00";
}