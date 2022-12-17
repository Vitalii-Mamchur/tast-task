// import TextField from '@mui/material/TextField';

// import './Input.css';

// function Input(props) {
//   return (
//     <div className="input">
//       <TextField
//         className={props.class}
//         helperText={props.helperText}
//         label={props.label}
//       />
//     </div>
//   );
// }

// export default Input;
import styles from './Input.module.scss';

function Input(props) {
  return (
    <div className={styles.label}>
      <input id={props.id} type={props.type} className={styles.input} />
      <span className={styles.placeholder}>{props.placeholder}</span>
      <span className={styles.inputError}>{props.inputError}</span>
    </div>
  );
}

export default Input;
