import styles from './CardUser.module.scss';

function CardUser(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.photo} alt="face" />
      </div>
      <div className={styles.cardName}>
        <p className={styles.cardInfoItem}>{props.name}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardInfoItem}>{props.position}</p>
        <p className={styles.cardInfoItem}>{props.email}</p>
        <p className={styles.cardInfoItem}>{props.phone}</p>
      </div>
    </div>
  );
}

export default CardUser;
