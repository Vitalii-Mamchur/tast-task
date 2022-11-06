import './CardUser.scss';

function CardUser(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.photo} alt="face" />
      </div>
      <div className="card-name">
        <p className="card-info__item">{props.name}</p>
      </div>
      <div className="card-info">
        <p className="card-info__item">{props.position}</p>
        <p className="card-info__item">{props.email}</p>
        <p className="card-info__item">{props.phone}</p>
      </div>
    </div>
  );
}

export default CardUser;
