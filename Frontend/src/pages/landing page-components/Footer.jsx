import styles from '../../styles/Footer.module.css';

import logo from '../../assets/logo2.png';

const HandleFormSubmit = (e) => {
  e.preventDefault();
};

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.flexContainer}>
        <div className={styles.firstGridSection}>
          <img src={logo} alt="ajo logo" className={styles.logo} />
          <h4 className={styles.subscribeText}>Subscribe to our blog</h4>
          <form className={styles.form} onSubmit={HandleFormSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.formInput}
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className={styles.linkHeadingText}>Company</h4>
          <ul className={styles.list}>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Home
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                About Us
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                FAQs
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.linkHeadingText}>Product</h4>
          <ul className={styles.list}>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Personal Savings
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Group Savings
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Finanacial Education
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.linkHeadingText}>Resources</h4>
          <ul className={styles.list}>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                About Money
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Usability
              </a>
            </li>
            <li className={styles.linktext}>
              <a href="#" className={styles.links}>
                Design & Dev
              </a>
            </li>
          </ul>
          {/* <div>
            <a href="#">
            </a>
            <a href="#">

            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div> */}
        </div>
      </div>
      <p className={styles.bottomText}>
        Terms & conditions. &copy; Privacy Policy 2023 ajo Savings App. All
        Rights Reserved
      </p>
    </section>
  );
};
export default Footer;
