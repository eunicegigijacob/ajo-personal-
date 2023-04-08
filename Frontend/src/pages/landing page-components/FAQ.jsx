import { ChevronDownIcon } from '@heroicons/react/20/solid';

import styles from '../../styles/FAQ.module.css';

const FAQ = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <div>
        <h3 className={styles.faqHeadingText}>Frequently Asked Questions</h3>
        <p className={styles.faqSubText}>
          Can't find your answer? We're here to help!
        </p>
        <div>
          <div className={styles.faqContainer}>
            <p>What is Ajo?</p>
            <ChevronDownIcon className={styles.icon} />
          </div>
          <div className={styles.faqContainer}>
            <p>Where is Ajo located?</p>
            <ChevronDownIcon className={styles.icon} />
          </div>
          <div className={styles.faqContainer}>
            <p>How do I get started?</p>
            <ChevronDownIcon className={styles.icon} />
          </div>
          <div className={styles.faqContainer}>
            <p>Do I need a guarantor to register?</p>
            <ChevronDownIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
