import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name=delay]')
const stepInput = document.querySelector('input[name=step]')
const amountInput = document.querySelector('input[name=amount]')
const form = document.querySelector('form')
let intervalId = null

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()
  let delay = delayInput.value
  const amount = amountInput.value
  let step = stepInput.value

  let d = Number(delay)
  let s = Number(step)
      for (let i = 1; i <= amount; i++) {
        createPromise(i, d)
          .then(({ position, delay }) => {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
          })
          .catch(({ position, delay }) => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
          });
        d+=s
      }
}