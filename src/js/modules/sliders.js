const sliders = (slides, direction, prev, next) => {
  // Current slide
  let slideIndex = 1;
  // stop switching slides
  let paused = false;

  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }
    //Hide all slides
    items.forEach((item) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  }
  // call showSlides
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (error) {}

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimation();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

export default sliders;
