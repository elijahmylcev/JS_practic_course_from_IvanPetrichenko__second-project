import { getResource } from '../services/requests';

const showMoreStyles = (triggerSelector, wrapper) => {
  const btn = document.querySelector(triggerSelector);
  btn.addEventListener('click', function () {
    getResource(`http://localhost:3000/styles`)
      .then((res) => {
        createCards(res, wrapper);
      })
      .catch((error) => {
        console.log(error);
        const cardError = document.createElement('div');
        cardError.classList.add('animated', 'fadeInUp');
        cardError.style.textAlign = 'center';
        cardError.innerHTML = `Что-то пошло не так`;
        document.querySelector(wrapper).appendChild(cardError);
        setTimeout(() => {
          cardError.remove();
        }, 4000);
      });

    this.remove();
  });

  function createCards(response, wrapper) {
    response.forEach((item) => {
      let card = document.createElement('div');
      card.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1',
      );

      card.innerHTML = `
        <div class='styles-block'>
          <img src=${item.src} alt>
          <h4>${item.title}</h4>
          <a href=${item.link}>Подробнее</a>
        </div>
       `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreStyles;

// {
//   /* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">

// 				</div> */
// }
