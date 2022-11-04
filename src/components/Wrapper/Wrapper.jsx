import './Wrapper.scss';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
