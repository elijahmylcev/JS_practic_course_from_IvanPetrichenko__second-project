const mask = (selector) => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __';
    let iterator = 0;
    let def = matrix.replace(/\D/g, '');
    let value = this.value.replace(/\D/g, '');

    if (def.length >= value.length) {
      value = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && iterator < value.length
        ? value.charAt(iterator++)
        : iterator >= value.length
        ? ''
        : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default mask;
