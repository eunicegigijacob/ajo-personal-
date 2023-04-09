import logo from '../assets/Logo.png';
import signupImg from '../assets/Signup2.png';

import styles from '../styles/Signup.module.css';

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
                    {/* <svg
                    width="68"
                    height="36"
                    viewBox="0 0 68 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.25"
                      y="5.395"
                      width="35.5"
                      height="25.2143"
                      rx="1.75"
                      fill="white"
                      stroke="#F5F5F5"
                      stroke-width="0.5"
                    />
                    <mask
                      id="mask0_292_14191"
                      style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="5"
                      width="36"
                      height="26"
                    >
                      <rect
                        x="0.25"
                        y="5.395"
                        width="35.5"
                        height="25.2143"
                        rx="1.75"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </mask>
                    <g mask="url(#mask0_292_14191)">
                      <rect
                        x="23.9999"
                        y="5.145"
                        width="12"
                        height="25.7143"
                        fill="#189B62"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 30.8593H12V5.145H0V30.8593Z"
                        fill="#189B62"
                      />
                    </g>
                    <g clip-path="url(#clip0_292_14191)">
                      <path d="M51 16L56 21L61 16H51Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_292_14191">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(44 6)"
                        />
                      </clipPath>
                    </defs>
                  </svg> */}
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
                  Already have an account?{' '}
                  <a href="./signin.html" className={styles.loginLink}>
                    {' '}
                    Log in{' '}
                  </a>{' '}
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
