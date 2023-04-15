import { NavLink } from 'react-router-dom';

import styles from '../../styles/Header.module.css';

import Logo from '../../assets/Logo.png';

import { Bars3Icon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(styles.navlinks);

  const handleToggle = () => {
    nav === styles.navlinks
      ? setNav(styles.nav_mobile)
      : setNav(styles.navlinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
      setNav(styles.navlinks);
    };

    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="ajo logo" className="logo" />
      </div>
      <nav className={nav}>
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
        <div className={styles.button}>
          <NavLink to="/signup" id="signin-btn" className={styles.signinLinks}>
            Sign In
          </NavLink>
          <NavLink to="/login" id="signup-btn" className={styles.signupLinks}>
            Get Started
          </NavLink>
        </div>
      </nav>
      <Bars3Icon className={styles.menu} onClick={handleToggle} />
    </header>
  );
};

export default Header;
