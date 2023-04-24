import styles from '../../styles/Widgets.module.css';
import ArrowUpIcon from '../svg/arrowup';
import ChartIcon from '../svg/chart';

const Widgets = () => {
  return (
    <div className={styles.widgets}>
      <div className={styles.widget}>
        <div className={styles.left}>
          <span className={styles.title}>Total Amount</span>
          <span className={styles.Number}>$12,310</span>
          <div className={styles.review}>
            <span className={styles.green_text}>
              <ArrowUpIcon />
              12%
            </span>

            <span className={styles.span2}> vs last month</span>
          </div>
        </div>
        <div className={styles.right}>
          <ChartIcon />
        </div>
      </div>
      <div className={styles.widget}>
        <div className={styles.left}>
          <span className={styles.title}>Wallet Balance</span>
          <span className={styles.Number}>$2,338</span>
          <div className={styles.review}>
            <span className={styles.green_text}>
              <ArrowUpIcon />
              12%
            </span>
            <span className={styles.span2}>vs last month</span>
          </div>
        </div>
        <div className={styles.right}>
          <ChartIcon />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
