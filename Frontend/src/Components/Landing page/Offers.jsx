// css module import
import styles from '../../styles/Offers.module.css';

// assets imports
import savings from '../../assets/Savings.png';
import groupSavings from '../../assets/Group.png';
import financialEd from '../../assets/Financial.png';
import security from '../../assets/Security.png';

const Offers = () => {
  return (
    <section id="offers" className={styles.offerSection}>
      <h3 className={styles.offerHeadingText}>What We Offer</h3>
      <div className={styles.offersContainer}>
        <div className={styles.firstOffer}>
          <img
            src={savings}
            alt="a lady putting money in a piggy bank"
            className={styles.offerImg}
          />
          <h6 className={styles.offersInnerHeadingText}>Personal Savings</h6>
          <p className={styles.offersParagraphText}>
            You can also save on your own for whatever your needs are
          </p>
        </div>
        <div className={styles.secondOffer}>
          <img
            src={groupSavings}
            alt="people in a group"
            className={styles.offerImg}
          />
          <h6 className={styles.offersInnerHeadingText}>Group Savings</h6>
          <p className={styles.offersParagraphText}>
            With Ajo you can save with others where the produce is rotated
          </p>
        </div>
        <div className={styles.thirdOffer}>
          <img
            src={financialEd}
            alt="a purple graduation cap"
            className={styles.offerImg}
          />
          <h6 className={styles.offersInnerHeadingText}>Financial Education</h6>
          <p className={styles.offersParagraphText}>
            You also have free access to financial education
          </p>
        </div>
        <div className={styles.fourthOffer}>
          <img
            src={security}
            alt="security badge"
            className={styles.offerImg}
          />
          <h6 className={styles.offersInnerHeadingText}>Top Notch Security</h6>
          <p className={styles.offersParagraphText}>
            Ajo uses the highest level of Internet Security to keep your money
            safe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
