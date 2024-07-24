import './styles.css';

const defaultValues = {
  name: 'Jane Appleseed',
  number: '0000 0000 0000 0000',
  month: '00',
  year: '00',
  cvc: '000',
};

export function PaymentCard({ values: { name, number, year, month, cvc } }) {
  const onNumberChange = number => {
    const valueWithoutSpaces = number.split(' ').join('');
    number = valueWithoutSpaces
      .padEnd(16, '0')
      .split('')
      .map((digit, i) => (i % 4 === 0 ? ` ${digit}` : digit))
      .join('')
      .trim();
    return number;
  };
  return (
    <div className="card-details">
      <div className="card-front">
        <img src="/images/card-logo.svg" alt="" />

        <p className="card-number">{onNumberChange(number).padEnd(16, '0') || defaultValues.number}</p>

        <p>{name || defaultValues.name}</p>

        <p>
          {month.padStart(2, '0') || defaultValues.month}/{year.padStart(2, '0') || defaultValues.year}
        </p>
      </div>

      <div className="card-back">
        <p>{cvc || defaultValues.cvc}</p>
      </div>
    </div>
  );
}
