import Input from './Input';
import Button from '../UI/Button';

import styles from './Form.module.scss';

function Form() {
  return (
    <>
      <div className={styles.form}>
        <h4>Working with POST request</h4>
        <div className={styles.formInput}>
          <Input class="inputStyle" label="Your name" />
        </div>
        <div className={styles.formInput}>
          <Input class="inputStyle" label="Email" />
        </div>
        <div className={styles.formInput}>
          <Input
            class="inputStyle"
            label="Phone"
            helperText="Please enter your phone"
          />
        </div>
      </div>
      <Button type="submit" class="button100" text="Sign up" />
    </>
  );
}

export default Form;
