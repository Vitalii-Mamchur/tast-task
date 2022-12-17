import SelectItem from './SelectItem/SelectItem';

import styles from './Select.module.scss';

function Select() {
  return (
    <div className={styles.selectContainer}>
      <h2 className={styles.selectTitle}>Select your position</h2>
      <SelectItem
        id="frontend"
        checked="true"
        selectItemTitle="Frontend developer"
      />
      <SelectItem
        id="backend"
        checked="false"
        selectItemTitle="Backend developer"
      />
      <SelectItem id="designer" checked="false" selectItemTitle="Designer" />
      <SelectItem id="qa" checked="false" selectItemTitle="QA" />
    </div>
  );
}

export default Select;
