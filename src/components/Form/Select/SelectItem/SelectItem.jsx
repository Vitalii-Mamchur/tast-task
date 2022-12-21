import styles from './SelectItem.module.scss';

function SelectItem(props) {
  return (
    <div className={styles.selectItem}>
      <div className={styles.selectItemContent}>
        <input
          type="radio"
          id={props.id}
          onChange={props.checked}
          className={styles.selectInput}
        />
        <label htmlFor={props.id} className={styles.selectLabel}>
          <span className={styles.selectTitle}>{props.selectItemTitle}</span>
        </label>
      </div>
    </div>
  );
}

export default SelectItem;
