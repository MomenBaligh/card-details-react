import { useState } from 'react';

import './App.css';

const cardDefaultValues = {
  name: 'Jane Appleseed',
  number: '0000 0000 0000 0000',
  month: '00',
  year: '00',
  cvc: '000',
};

export function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });

  const [errors, setErrors] = useState(null);

  const [step, setStep] = useState('continue');

  const onChange = e =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = e => {
    e.preventDefault();

    setErrors(null);

    if (!formValues.name) {
      setErrors(errors => ({ ...errors, name: 'EMPTY' }));
      console.log(errors);
    } else if (formValues.name.length < 5) {
      setErrors(errors => ({ ...errors, name: 'INVALID' }));
    }

    if (!formValues.number) {
      setErrors(errors => ({ ...errors, number: 'EMPTY' }));
    } else if (formValues.number.length !== 16 || formValues.number.match(/^[0-9]+$/) === null) {
      setErrors(errors => ({ ...errors, number: 'INVALID' }));
    }

    if (!formValues.month || !formValues.year) {
      setErrors(errors => ({ ...errors, month: 'EMPTY', year: 'EMPTY' }));
    } else if (
      +formValues.month < 1 ||
      +formValues.month > 12 ||
      +formValues.year < 25 ||
      formValues.month.match(/^[0-9]+$/) === null ||
      formValues.year.match(/^[0-9]+$/) === null
    ) {
      setErrors(errors => ({ ...errors, month: 'INVALID', year: 'INVALID' }));
    }

    if (!formValues.cvc) {
      setErrors(errors => ({ ...errors, cvc: 'EMPTY' }));
    } else if (
      (formValues.cvc.length > 2 && formValues.cvc.length < 5) ||
      formValues.number.match(/^[0-9]+$/) !== null
    ) {
      setErrors(errors => ({ ...errors, cvc: 'INVALID' }));
    }

    console.log(errors);

    if (errors !== null) return;
    setStep('confirm');
  };

  const onContinue = e => {
    e.preventDefault();
    setStep('continue');
  };

  return (
    <main>
      <div className="card-details">
        <div className="card-front">
          <img src="./images/card-logo.svg" alt="" />
          <p>{formValues.number || cardDefaultValues.number}</p>

          <div className="bottom">
            <p>{formValues.name || cardDefaultValues.name}</p>
            <p>
              {formValues.month || cardDefaultValues.month}/{formValues.year || cardDefaultValues.year}
            </p>
          </div>
        </div>
        <div className="card-back">
          <p>{formValues.cvc || cardDefaultValues.cvc}</p>
        </div>
      </div>
      {step === 'continue' && (
        <div className="card-container">
          <form className="card" onSubmit={handleFormSubmit}>
            <div
              className={`form-field name ${
                errors?.name === 'EMPTY' ? 'empty-error' : '' || errors?.name === 'INVALID' ? 'invalid-error' : ''
              }`}
            >
              <label htmlFor="name">CARDHOLDER NAME</label>

              <input
                id="name-input"
                name="name"
                value={formValues.name}
                onChange={onChange}
                placeholder="e.g. Jane Appleseed"
              />

              <p className="error-message empty">Can't be blank</p>
              <p className="error-message invalid">Invalid name</p>
            </div>

            <div
              className={`form-field number ${
                errors?.number === 'EMPTY' ? 'empty-error' : '' || errors?.number === 'INVALID' ? 'invalid-error' : ''
              }`}
            >
              <label htmlFor="number">CARD NUMBER</label>

              <input
                id="number-input"
                name="number"
                value={formValues.number}
                onChange={onChange}
                placeholder="e.g. 1234 5678 9123 0000"
              />

              <p className="error-message empty">Can't be blank</p>
              <p className="error-message invalid">Wrong format, numbers only</p>
            </div>

            <div
              className={`form-field date ${
                errors?.month === 'EMPTY'
                  ? 'empty-error'
                  : '' || errors?.year === 'EMPTY'
                  ? 'empty-error'
                  : '' || errors?.month === 'INVALID'
                  ? 'invalid-error'
                  : '' || errors?.year === 'INVALID'
                  ? 'invalid-error'
                  : ''
              }`}
            >
              <label htmlFor="date">EXP. DATE (MM/YY)</label>

              <input className="month" name="month" value={formValues.month} onChange={onChange} placeholder="MM" />
              <input className="year" name="year" value={formValues.year} onChange={onChange} placeholder="YY" />

              <p className="error-message empty">Can't be blank</p>
              <p className="error-message invalid">Invalid date</p>
            </div>

            <div
              className={`form-field cvc ${
                errors?.cvc === 'EMPTY' ? 'empty-error' : '' || errors?.cvc === 'INVALID' ? 'invalid-error' : ''
              }`}
            >
              <label htmlFor="cvc-input">CVC</label>

              <input id="cvc-input" name="cvc" value={formValues.cvc} onChange={onChange} placeholder="e.g. 123" />

              <p className="error-message empty">Can't be blank</p>
              <p className="error-message invalid">Invalid cvc</p>
            </div>
            <button>Confirm</button>
          </form>
        </div>
      )}

      {step === 'confirm' && (
        <section className="confirmation">
          <img src="./images/icon-complete.svg" alt="" />

          <h2>THANK YOU!</h2>

          <p>We've added your card details</p>

          <button onClick={onContinue}>Continue</button>
        </section>
      )}
    </main>
  );
}
