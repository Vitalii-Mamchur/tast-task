import styles from './SelectItem.module.scss';

function SelectItem(props) {
  return (
    <div className={styles.selectItem}>
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
  );
}

export default SelectItem;
