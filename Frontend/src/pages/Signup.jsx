import logo from '../assets/Logo.png';
import signupImg from '../assets/Signup2.png';

import styles from '../styles/Signup.module.css';

import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className={styles.body}>
      <div className={styles.padding}>
        <div className={styles.logoImg}>
          <img src={logo} alt="ajo logo" />
        </div>
        <div className={styles.container}>
          <div className={styles.imgSection}>
            <img
              src={signupImg}
              alt=" illustration of a lady sitting with a laptop on her lap and her thoughs on money"
            />
          </div>
          <div>
            <form id="signup-form" className={styles.form}>
              <h2 className={styles.formHeadingText}>Sign Up</h2>
              <div className={styles.inputDiv}>
                <div className={styles.name}>
                  <div className={styles.nameInputContainer}>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <span>Email Address</span>
                  <input
                    type="text"
                    name="email"
                    required
                    id="email"
                    className={styles.input}
                  />
                  <p id="email-error"></p>
                </div>
                <div>
                  <span>Phone Number</span>
                  <div className={styles.bottom}>
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="+234"
                      required
                      id="phone-no"
                      className={styles.phoneContainerInput}
                    />
                  </div>
                  <p id="phone-error"></p>
                </div>
                <div className={styles.inputContainer}>
                  <span>Invitation Code (Optional)</span>
                  <input
                    type="text"
                    name="invitecode"
                    id="invitecode"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    required
                    className={styles.input}
                  />
                </div>

                <button type="submit" className={styles.btn}>
                  Create Account
                </button>
                <p className={styles.loginStatement}>
                  Already have an account?
                  <NavLink to="/login" className={styles.loginLink}>
                    Log in
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
