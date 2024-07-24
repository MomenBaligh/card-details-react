const isNumeric = text => /^[0-9]+$/.test(text);

export const validateCardInfo = ({ name, number, month, year, cvc }) => {
  const errors = {};

  if (!name) {
    errors.name = 'EMPTY';
  } else if (name.length < 3) {
    errors.name = 'INVALID';
  }

  if (!number) {
    errors.number = 'EMPTY';
  } else if (number.split(' ').join('').length !== 16 || !isNumeric(number.split(' ').join(''))) {
    console.log(number.split(' ').join('').length);
    errors.number = 'INVALID';
  }

  if (!month) {
    errors.month = 'EMPTY';
  } else if (+month < 1 || +month > 12) {
    errors.month = 'INVALID';
  }

  if (!year) {
    errors.year = 'EMPTY';
  } else if (+year < 24 || +year > 35) {
    errors.year = 'INVALID';
  }

  if (!cvc) {
    errors.cvc = 'EMPTY';
  } else if (cvc.length <= 2 || cvc.length >= 5 || !isNumeric(cvc)) {
    errors.cvc = 'INVALID';
  }

  const hasErrors = Object.keys(errors).length > 0;
  if (!hasErrors) return;

  throw errors;
};
