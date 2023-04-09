import styles from '../../styles/HeroSection.module.css';
// import Dashboard from '../../assets/Dashboard.png';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={styles.largeText}>
          Enabling individuals build wealth for sustainment{' '}
        </h1>
        <p className={styles.smallText}>
          Whether you’re in need of capital to bring that business idea to life
          or you want to save up towards a secure future, Ajo is here to help.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact us
        </a>
      </div>
      <div className={styles.heroImg}></div>
    </section>
  );
};

export default HeroSection;
