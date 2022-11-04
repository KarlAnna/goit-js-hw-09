const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let intervalId = null

startBtn.addEventListener('click', () => {
  intervalId = setInterval(updateBodyBgColor, 1000)
})


function updateBodyBgColor() {
  body.style.backgroundColor = getRandomHexColor()
  startBtn.setAttribute('disabled', true)
  stopBtn.removeAttribute('disabled')
}

stopBtn.addEventListener('click', onStopBtnClick)
function onStopBtnClick() {
  clearInterval(intervalId)
  startBtn.removeAttribute('disabled')
  stopBtn.setAttribute('disabled', true)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}