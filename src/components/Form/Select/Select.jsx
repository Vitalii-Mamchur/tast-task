import SelectItem from './SelectItem/SelectItem';

import styles from './Select.module.scss';

function Select() {
  return (
    <div className={styles.selectContainer}>
      <h2 className={styles.selectTitle}>Select your position</h2>
      <SelectItem
        id="frontend"
        onChange="true"
        selectItemTitle="Frontend developer"
      />
      <SelectItem
        id="backend"
        onChange="false"
        selectItemTitle="Backend developer"
      />
      <SelectItem id="designer" onChange="false" selectItemTitle="Designer" />
      <SelectItem id="qa" onChange="false" selectItemTitle="QA" />
    </div>
  );
}

export default Select;
