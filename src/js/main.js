// @ts-nocheck

import '../scss/styles.scss'

import $ from 'jquery'
import { Collapse } from 'bootstrap'

const $time = $('.time');
let currentTime = 5 * 60 * 1000;

const timerTo = setInterval(updateTime, 1000);

function updateTime() {
  currentTime -= 1000;
  const minutes = Math.floor(currentTime / 1000 / 60);
  const seconds = Math.floor(currentTime / 1000) - minutes * 60;

  const minutesText = `0${minutes}`.slice(-2);
  const secondsText = `0${seconds}`.slice(-2);

  $time.text(`00:${minutesText}:${secondsText}`);

  if (currentTime <= 0) {
    clearInterval(timerTo);
  }
}

updateTime();


$('form').on('submit', function (e) {
  e.preventDefault();
  const data = new FormData(e.target);

  console.log('submit', data)
})
