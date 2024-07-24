import './FormField.css';

export function FormField({ label, errors: allErrors, required, children, ...props }) {
  const errors = allErrors.filter(Boolean);
  const hasErrors = errors.length > 0;

  return (
    <div className={`form-field ${props.name} ${required ? 'required' : ''} ${hasErrors ? 'error' : ''}`}>
      <label title={required ? 'Required Field' : 'Optional Field'} htmlFor={props.name}>
        {label}
      </label>

      <div className="input-group">
        <input id={props.name} {...props} />

        {children}
      </div>

      {hasErrors && (
        <p className="error-message">{errors.some(error => error === 'EMPTY') ? "Can't be blank!" : 'Invalid'}</p>
      )}
    </div>
  );
}
