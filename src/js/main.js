import accordionStyles from './modules/accordionStyles';
import accordion from './modules/accordion';
import calc from './modules/calc';
import checkTextInputs from './modules/checkTextInputs';
import filter from './modules/filter';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modals';
import pictureSize from './modules/pictureSize';
import showMoreCards from './modules/showMoreCards';
import sliders from './modules/sliders';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

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
  filter();
  pictureSize('.sizes-block');
  // accordionStyles('.accordion-heading', '.accordion-block');
  accordion('.accordion-heading');
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
  drop();
});
