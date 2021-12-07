const calc = (size, material, options, promo, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promoBlock = document.querySelector(promo);
  const resultBlock = document.querySelector(result);

  let sum = 0;

  sizeBlock.addEventListener('change', calcFunction);
  materialBlock.addEventListener('change', calcFunction);
  optionsBlock.addEventListener('change', calcFunction);
  promoBlock.addEventListener('input', calcFunction);

  function calcFunction() {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promoBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  }
};

export default calc;
