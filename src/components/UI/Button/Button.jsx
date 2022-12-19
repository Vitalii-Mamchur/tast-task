import './Button.scss';

function Button(props) {
  return (
    <button
      type={props.type}
      className={`button  ${props.class}`}
      onClick={props.onClickHandler}
    >
      {props.text}
    </button>
  );
}

export default Button;
