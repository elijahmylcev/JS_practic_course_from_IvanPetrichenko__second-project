import calc from './modules/calc';
import checkTextInputs from './modules/checkTextInputs';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modals';
import showMoreCards from './modules/showMoreCards';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  // horizontal slider
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  // vertical slider
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  // showMoreStyles('.button-styles', '.styles-2');
  showMoreCards('.button-styles', '#styles .row');

  calc('#size', '#material', '#options', '.promocode', '.calc-price');
});
