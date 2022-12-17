import Input from './Input/Input';
import Button from '../UI/Button';
import Select from './Select/Select';

import styles from './Form.module.scss';

function Form() {
  return (
    <>
      <div className={styles.form}>
        <h4>Working with POST request</h4>
        <div className={styles.formInput}>
          <Input placeholder="Your name" inputError="Error text" />
        </div>
        <div className={styles.formInput}>
          <Input placeholder="Email" inputError="Error text" />
        </div>
        <div className={styles.formInput}>
          <Input
            placeholder="Phone"
            inputError="Please enter your phone"
            // helperText="Please enter your phone"
          />
        </div>
      </div>
      <Select />
      <Button type="submit" class="button100" text="Sign up" />
    </>
  );
}

export default Form;
