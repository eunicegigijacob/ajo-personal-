import styles from '../styles/Login.module.css';

import loginImg from '../assets/Login avatar2.png';
import logo from '../assets/Logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      <div className={styles.padding}>
        {/* <div className={styles.logoImg}>
          <img src={logo} alt="ajo logo" />
        </div> */}
        <div className={styles.container}>
          <div>
            <img
              src={loginImg}
              alt="an illustration of a girl sitting with laptop on her lap"
              className={styles.loginAvatar}
            />
          </div>
          <div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <h2 className={styles.formHeadingText}>Login</h2>
              <div className={styles.input}>
                <div className={styles.inputContainer}>
                  <span className={styles.top}>Email Address</span>
                  <input
                    type="emial"
                    value={email}
                    className={styles.inputFields}
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p id="email-errors"></p>
                </div>
                <div className={styles.passwordContainer}>
                  <span className={styles.top}>Password</span>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    required
                    className={styles.inputFields}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p id="password-errors"></p>
                </div>
              </div>
              <div className={styles.check}>
                <div>
                  <input type="checkbox" name="checkbox" />
                  <span className={styles.rememberMe}>Remember me </span>
                </div>

                <div className={styles.forgotPassword}>
                  <NavLink to="/forget-password">
                    <p className={styles.special}>Forgot your password?</p>
                  </NavLink>
                </div>
              </div>
              <input
                type="submit"
                className={styles.signinBtn}
                value="Sign In"
              />
              <p className={styles.signinStatement}>
                Dont have an account?
                <NavLink to="/signup" className={styles.signinStatementLink}>
                  Sign Up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
