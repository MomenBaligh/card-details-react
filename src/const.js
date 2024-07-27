export const EMPTY_ERROR = 'empty';

export const INVALID_ERROR = 'invalid';

export const validationErrors = {
  name: {
    [EMPTY_ERROR]: "Can't be blank",
    [INVALID_ERROR]: 'Invalid name, must be more than 3 chars',
  },
  number: {
    [EMPTY_ERROR]: "Can't be blank",
    [INVALID_ERROR]: 'Wrong format, numbers only',
  },
  month: {
    [EMPTY_ERROR]: "Can't be blank",
    [INVALID_ERROR]: 'Invalid month',
  },
  year: {
    [EMPTY_ERROR]: "Can't be blank",
    [INVALID_ERROR]: 'Invalid year',
  },
  cvc: {
    [EMPTY_ERROR]: "Can't be blank",
    [INVALID_ERROR]: 'Invalid cvc',
  },
};
