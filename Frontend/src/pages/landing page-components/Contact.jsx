import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

import styles from '../../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h3 className={styles.contactHeadingText}>Have Any Question For Us?</h3>
      <div className={styles.contactFlexContainer}>
        <div className={styles.rightHalf}>
          <p className={styles.contactParagraphText}>
            Our ever ready customer care service is available to answer your
            questions
          </p>
          <p className={styles.lowerText}>Send us an email at :</p>
          <p className={styles.contactParagraphText}>
            <span>
              <EnvelopeIcon className={styles.icon} />
            </span>
            ajosaving@gmail.com
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.leftHalf}>
          <p className={styles.contactParagraphText}>
            You can also give us a call via:
          </p>
          <p className={styles.call}>
            <span>
              <PhoneIcon className={styles.icon} />
            </span>
            +234 913 456 9087
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
