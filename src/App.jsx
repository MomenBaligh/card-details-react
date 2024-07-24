import { useState } from 'react';

import { PaymentCard, CardDetailsForm, ThankYouCard } from './components';
import { validateCardInfo } from './utils/validation';

import './App.css';

const initialFormValues = {
  name: '',
  number: '',
  month: '',
  year: '',
  cvc: '',
};

export function App() {
  const [step, setStep] = useState('form');
  const [errors, setErrors] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = e =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const onSubmit = () => {
    setErrors(null);

    try {
      validateCardInfo(formValues);
      setStep('thank-you');
    } catch (err) {
      setErrors(err);
    }
  };

  const onThankYouDismiss = () => {
    setStep('form');
    setFormValues(initialFormValues);
  };

  return (
    <main>
      <PaymentCard values={formValues} />

      {step === 'form' && (
        <div className="card-container">
          <CardDetailsForm values={formValues} errors={errors} onFieldChange={onChange} onSubmit={onSubmit} />
        </div>
      )}

      {step === 'thank-you' && <ThankYouCard onDismiss={onThankYouDismiss} />}
    </main>
  );
}
