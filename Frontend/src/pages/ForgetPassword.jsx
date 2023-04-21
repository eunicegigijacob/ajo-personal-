import styles from '../styles/ForgetPassword.module.css';
import arrow from '../assets/arrow-left.png';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const ForgotPassword = () => {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(360deg, rgb(42, 92, 153) 0%, rgb(95, 37, 85) 100%)';
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>
          <svg
            width="42"
            height="41"
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              d="M27.9996 12L34.9996 5M38.9996 1L34.9996 5L38.9996 1ZM19.7796 20.22C20.8123 21.2389 21.6332 22.4521 22.1951 23.7896C22.757 25.1271 23.0488 26.5625 23.0536 28.0133C23.0585 29.464 22.7763 30.9014 22.2234 32.2426C21.6705 33.5838 20.8577 34.8025 19.8319 35.8283C18.806 36.8541 17.5874 37.6669 16.2462 38.2198C14.9049 38.7728 13.4676 39.0549 12.0168 39.0501C10.5661 39.0452 9.13066 38.7534 7.79315 38.1915C6.45565 37.6296 5.24251 36.8087 4.22357 35.776C2.21983 33.7014 1.1111 30.9228 1.13616 28.0386C1.16122 25.1544 2.31808 22.3955 4.35757 20.356C6.39706 18.3165 9.15599 17.1596 12.0402 17.1346C14.9243 17.1095 17.7029 18.2183 19.7776 20.222L19.7796 20.22ZM19.7796 20.22L27.9996 12L19.7796 20.22ZM27.9996 12L33.9996 18L40.9996 11L34.9996 5L27.9996 12Z"
              stroke="#2F3437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="main">
          <div>
            <h1 className={styles.headingText}>Forgot Password?</h1>
            <p className={styles.paragraphText}>
              No worries, we’ll send you reset instructions.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.labelText}>
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
              required
            />
            <button type="submit" className={styles.resetBtn}>
              Reset Password
            </button>
            <NavLink to="/login" className={styles.link}>
              <div className={styles.loginBtn}>
                {' '}
                <img src={arrow} className={styles.arrow} />{' '}
                <p className={styles.span}>Back to Login</p>
              </div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
