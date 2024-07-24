import './ThankYouCard.css';

export function ThankYouCard({ onDismiss }) {
  return (
    <section className="confirmation">
      <img src="./images/icon-complete.svg" alt="" />

      <h2>THANK YOU!</h2>

      <p>We've added your card details</p>

      <button onClick={onDismiss}>Continue</button>
    </section>
  );
}
