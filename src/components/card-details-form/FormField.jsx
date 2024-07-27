import { validationErrors, EMPTY_ERROR, INVALID_ERROR } from '../../const';

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
        <div className="input-container">
          <input id={props.name} {...props} />
        </div>

        {children ? (
          children.length ? (
            children.map((child, i) => (
              <div key={i} className="input-container">
                {child}
              </div>
            ))
          ) : (
            <div className="input-container">{children}</div>
          )
        ) : null}
      </div>

      {hasErrors && (
        <p className="error-message">
          {errors.some(error => error === 'EMPTY')
            ? `${validationErrors[props.name][EMPTY_ERROR]}`
            : `${validationErrors[props.name][INVALID_ERROR]}`}
        </p>
      )}
    </div>
  );
}
