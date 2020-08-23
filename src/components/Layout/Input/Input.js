import React from 'react';

const input = props => {
  let inputElement = null;

  const inputStyles = {
    backgroundColor: 'red'
  };

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(inputStyles);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div style={inputStyles}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;