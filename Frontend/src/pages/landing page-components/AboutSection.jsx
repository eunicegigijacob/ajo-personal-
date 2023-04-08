// css module import
import styles from '../../styles/About.module.css';

// assets import
import about from '../../assets/About us.png';

const About = () => {
  return (
    <section className={styles.AboutSection} id="About">
      <h3 className={styles.headingText}>About Us</h3>
      <div className={styles.sectionTwoWrapper}>
        <img className={styles.aboutImage} src={about} />

        <div className={styles.describeUs}>
          <p className={styles.describeUsP}>
            Ajo is a group saving application that helps SMEs and individuals
            save through short-term and long-term saving, sharing, gift-giving,
            and more for their business and personal needs. The app also
            provides financial tips on how they can better manage their finances
            in order to make the best use of their savings
          </p>
          <button id="signupBtn" className={styles.signupBtn}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
