import './Button.scss';

function Button(props) {
  return (
    <button type={props.type} className={props.class}>
      {props.text}
    </button>
  );
}

export default Button;
