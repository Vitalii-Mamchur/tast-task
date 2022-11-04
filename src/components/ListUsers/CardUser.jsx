import './CardUser.scss';
// import '../../img/users';

function CardUser(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="face" />
      </div>
      <div className="card-name">
        <p>{props.name}</p>
      </div>
      <div className="card-major">
        <p>{props.major}</p>
      </div>
      <div className="card-email">
        <p>{props.email}</p>
      </div>
      <div className="card-phone">
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default CardUser;
