import TextField from '@mui/material/TextField';

import './Input.css';

function Input(props) {
  return (
    <div className="input">
      <TextField
        className={props.class}
        helperText={props.helperText}
        label={props.label}
      />
    </div>
  );
}

export default Input;
