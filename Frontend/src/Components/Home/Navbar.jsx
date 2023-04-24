import styles from '../../styles/Navbar.module.css';
import Searchicon from '../svg/search';

import user from '../../assets/user.jpg';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.wrapper}>
        <h3 className={styles.active}>Dashboard</h3>
        <div className={styles.search}>
          <Searchicon />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.user}>
          <img
            src={user}
            alt="profile image of user"
            className={styles.avatar}
          />
          <p>
            <span className={styles.user_name}>Eunice J</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
