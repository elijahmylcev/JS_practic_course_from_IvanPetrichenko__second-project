import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  // horizontal slider
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  // vertical slider
  sliders('.main-slider-item', 'vertical');
});
