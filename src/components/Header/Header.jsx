import Button from '../UI/Button';
import styles from './Header.module.scss';
import logo from '../../img/logo.svg';

function Header() {
  // const handleClickUsersBtn = () => {};

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.headerButton}>
          <Button type="button" class="button100" text="Users" />
          <Button type="button" class="button100" text="Sign up" />
        </div>
      </div>
    </header>
  );
}

export default Header;
