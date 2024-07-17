window.onload = function () {
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let lapCount = 0;
  let running = false;
  let AppendMinutes = document.querySelector('#minutes')
  let AppendSeconds = document.querySelector('#second')
  let AppendTens = document.querySelector('#tens')
  let StartBtn = document.querySelector('#start')
  let StopBtn = document.querySelector('#stop')
  let ResetBtn = document.querySelector('#reset')
  let LapBtn = document.querySelector('#lap')
  let LapsList = document.querySelector('#laps')
  let Interval;

  const startTimer = () => {
    tens++
    if (tens <= 9) {
      AppendTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
      AppendTens.innerHTML = tens
    }

    if (tens > 99) {
      seconds++
      AppendSeconds.innerHTML = '0' + seconds
      tens = '0'
      AppendTens.innerHTML = '0' + 0
    }

    if (seconds > 9) {
      AppendSeconds.innerHTML = seconds
    }

    if (seconds > 59) {
      minutes++
      AppendMinutes.innerHTML = '0' + minutes
      seconds = 0
      AppendSeconds.innerHTML = '0' + 0
    }
  }

  StartBtn.onclick = () => {
    if (!running) {
      running = true
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
  }

  StopBtn.onclick = () => {
    running = false
    clearInterval(Interval)
  }

  ResetBtn.onclick = () => {
    running = false
    clearInterval(Interval)
    tens = '00'
    seconds = '00'
    minutes = '00'
    AppendTens.innerHTML = tens
    AppendSeconds.innerHTML = seconds
    AppendMinutes.innerHTML = minutes

    LapsList.innerHTML = '';
    lapCount = 0;
  }

  LapBtn.onclick = () => {
    if (running) {
      lapCount++;
      let currentLap = document.createElement('li');
      currentLap.innerText = `Lap ${lapCount}: ${minutes}:${seconds}:${tens}`;
      LapsList.appendChild(currentLap);
    }
  }
}
