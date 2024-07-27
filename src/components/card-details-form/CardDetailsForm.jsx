import { FormField } from './FormField';

import './CardDetailsForm.css';

export function CardDetailsForm({ values, errors, onFieldChange, onSubmit }) {
  const onCardNumberChange = e => {
    const valueWithoutSpaces = e.target.value.split(' ').join('');

    if (valueWithoutSpaces.length > 16) return;

    e.target.value = valueWithoutSpaces
      .split('')
      .map((digit, i) => (i % 4 === 0 ? ` ${digit}` : digit))
      .join('')
      .trim();

    onFieldChange(e);
  };

  const _onSubmit = e => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <form className="card" onSubmit={_onSubmit}>
      <FormField
        name="name"
        label="Cardholder name"
        value={values.name}
        onChange={onFieldChange}
        errors={[errors?.name]}
        placeholder="e.g. Jane Appleseed"
      />

      <FormField
        name="number"
        label="Card Number"
        value={values.number}
        onChange={onCardNumberChange}
        errors={[errors?.number]}
        placeholder="e.g. 1234567891230000"
      />

      <FormField
        label="Exp. Date (MM/YY)"
        name="month"
        value={values.month}
        placeholder="MM"
        onChange={onFieldChange}
        maxLength="2"
        errors={[errors?.month, errors?.year]}
      >
        <input name="year" value={values.year} onChange={onFieldChange} placeholder="YY" maxLength="2" />
      </FormField>

      <FormField
        name="cvc"
        label="cvc"
        value={values.cvc}
        onChange={onFieldChange}
        errors={[errors?.cvc]}
        placeholder="e.g. 123"
        maxLength="4"
      />

      <button>Confirm</button>
    </form>
  );
}
