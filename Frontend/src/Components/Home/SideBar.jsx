import styles from '../../styles/Sidebar.module.css';

import logo from '../../assets/Logo.png';
import Dasboardsvg from '../svg/dashboard';
import Walletsvg from '../svg/wallet';
import Savingsvg from '../svg/savings';
import Feedsvg from '../svg/tips';

const SideBar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.homelogo} />
      </div>
      <div className={styles.items}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Dasboardsvg />
            <span className={styles.text}>Dasboard</span>
          </li>
          <li className={styles.item}>
            <Walletsvg />
            <span className={styles.text}> Wallet </span>
          </li>
          <li className={styles.item}>
            <Savingsvg />
            <span className={styles.text}>Savings</span>
          </li>
          <li className={styles.item}>
            <Feedsvg />
            <span className={styles.text}>Feed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
