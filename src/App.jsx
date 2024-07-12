import { useState } from 'react';
import './App.css';

export function App() {
  const [results, setResults] = useState({
    name: 'Jane Appleseed',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  });

  const nameInput = document.getElementById('name-input');
  const nameInputEmpty = document.getElementById('name-input-empty');
  const numberInput = document.getElementById('number-input');
  const numberInputEmpty = document.getElementById('number-input-empty');
  const numberInputInvalid = document.getElementById('number-input-invalid');
  const monthInput = document.getElementById('month-input');
  const yearInput = document.getElementById('year-input');
  const dateInputEmpty = document.getElementById('date-input-empty');
  const dateInputInvalid = document.getElementById('date-input-invalid');
  const cvcInput = document.getElementById('cvc-input');
  const cvcInputEmpty = document.getElementById('cvc-input-empty');
  const cvcInputInvalid = document.getElementById('cvc-input-invalid');

  const handleNameChange = e => {
    setResults({
      ...results,
      name: e.target.value,
    });
  };

  const handleNumberChange = e => {
    let dividedNumber = e.target.value.split('');
    for (let i = 0; i < dividedNumber.length; i = i + 5) {
      dividedNumber.splice(i, 0, ' ');
    }

    setResults({
      ...results,
      number: dividedNumber,
    });
  };
  const handleMonthChange = e => {
    setResults({
      ...results,
      month: e.target.value,
    });
  };
  const handleYearChange = e => {
    setResults({
      ...results,
      year: e.target.value,
    });
  };
  const handleCvcChange = e => {
    setResults({
      ...results,
      cvc: e.target.value,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (nameInput.value.length === 0) {
      nameInput.style.borderColor = 'red';
      nameInputEmpty.style.display = 'block';
    }

    if (numberInput.value.length === 0) {
      numberInput.style.borderColor = 'red';
      numberInputEmpty.style.display = 'block';
    } else if (numberInput.value.length !== 16 && +numberInput.value < 10000000000000000) {
      numberInput.style.borderColor = 'red';
      numberInputInvalid.style.display = 'block';
    }

    if (monthInput.value.length === 0 || yearInput.value.length === 0) {
      monthInput.style.borderColor = 'red';
      yearInput.style.borderColor = 'red';
      dateInputEmpty.style.display = 'block';
    } else if (+monthInput.value < 1 || +monthInput.value > 12) {
      monthInput.style.borderColor = 'red';
      yearInput.style.borderColor = 'red';
      dateInputInvalid.style.display = 'block';
    }

    if (cvcInput.value.length === 0) {
      cvcInput.style.borderColor = 'red';
      cvcInputEmpty.style.display = 'block';
    } else if (cvcInput.value.length !== 3 || cvcInput.value.length !== 4 || +cvcInput.value >= 10000) {
      cvcInput.style.borderColor = 'red';
      cvcInputInvalid.style.display = 'block';
    }
  };

  const handleConfirmationSubmit = e => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="card-details">
        <div className="card-front">
          <img src="./images/card-logo.svg" alt="" />
          <p>{results.number}</p>
          <div className="bottom">
            <p>{results.name}</p>
            <p>
              {results.month}/{results.year}
            </p>
          </div>
        </div>
        <div className="card-back">
          <p>{results.cvc}</p>
        </div>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input id="name-input" name="name" onChange={handleNameChange} placeholder="e.g. Jane Appleseed" />
          <p id="name-input-empty" className="error">
            Can't be blank!
          </p>
        </div>
        <div className="form-field">
          <label htmlFor="number">CARD NUMBER</label>
          <input id="number-input" name="number" onChange={handleNumberChange} placeholder="e.g. 1234 5678 9123 0000" />
          <p id="number-input-empty" className="error">
            Can't be blank!
          </p>
          <p id="number-input-invalid" className="error">
            Invalid number
          </p>
        </div>

        <div className="form-bottom">
          <div className="date">
            <label htmlFor="date">EXP. DATE (MM/YY)</label>
            <div className="date-inputs">
              <input id="month-input" name="date" onChange={handleMonthChange} placeholder="MM" />
              <input id="year-input" name="date" onChange={handleYearChange} placeholder="YY" />
            </div>
            <div>
              <p id="date-input-empty" className="error">
                Can't be blank!
              </p>
              <p id="date-input-invalid" className="error">
                Invalid date
              </p>
            </div>
          </div>
          <div className="form-field cvc">
            <label htmlFor="cvc">CVC</label>
            <input id="cvc-input" name="cvc" onChange={handleCvcChange} placeholder="e.g. 123" />
            <p id="cvc-input-empty" className="error">
              Can't be blank!
            </p>
            <p id="cvc-input-invalid" className="error">
              Invalid cvc!
            </p>
          </div>
        </div>
        <button>Confirm</button>
      </form>
      <form className="confirmation" onSubmit={handleConfirmationSubmit}>
        <img src="./images/icon-complete.svg" alt="" />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button>Continue</button>
      </form>
    </main>
  );
}
