import Notiflix from 'notiflix';
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
  const delay = delayInput.value
  const amount = amountInput.value
  const step = stepInput.value

  let stop = 0
  intervalId = setInterval(() => {
      if (stop == amount) {
        clearInterval(intervalId)
        return
      }
    stop += 1
      createPromise(stop, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        });
    }, step);
}