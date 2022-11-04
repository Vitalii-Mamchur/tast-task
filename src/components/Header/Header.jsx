import Button from '../UI/Button';
import './Header.scss';
import logo from '../../img/logo.svg';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-button">
          <Button type="button" class="button" text="Users" />
          <Button type="button" class="button" text="Sign up" />
        </div>
      </div>
    </header>
  );
}

export default Header;
