import styles from '../../styles/Dashboard.module.css';
import CloudIcon from '../svg/cloud';
import PlusIcon from '../svg/plus';
import Barchart from './Barchart';
import Widgets from './Widgets';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.top}>
        <p className={styles.welcome_text}>
          Hi, <span>Eunice J</span>
        </p>
        <div className={styles.links}>
          <div className={styles.link}>
            <CloudIcon />
            <span>fund wallet</span>
          </div>
          <div className={styles.link}>
            <PlusIcon />
            <span>withdraw</span>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <Widgets />
          <Barchart />
        </div>
        <div className={styles.right}>
          <p>Notificatons</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
