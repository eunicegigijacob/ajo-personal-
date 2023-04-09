import { NavLink } from 'react-router-dom';

import styles from '../../styles/Header.module.css';

import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src={Logo} alt="ajo logo" className="logo" />
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <a href="#" className={styles.links}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" className={styles.links}>
              About Us
            </a>
          </li>
          <li>
            <a href="#offers" className={styles.links}>
              Offers
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.links}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.button}>
        <NavLink to="/signup" id="signin-btn" className={styles.signinLinks}>
          Sign In
        </NavLink>
        <NavLink to="/login" id="signup-btn" className={styles.signupLinks}>
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
