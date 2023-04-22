import { NavLink } from 'react-router-dom';
import styles from '../styles/Mail.module.css';
import arrow from '../assets/arrow-left.png';
import { useState } from 'react';

const MailCheck = (props) => {
  const email = props.email;
  const handleResend = props.handleResend;

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.mailSvg}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8H40C42.2 8 44 9.8 44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12C4 9.8 5.8 8 8 8Z"
              stroke="#2F3437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44 12L24 26L4 12"
              stroke="#2F3437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="main">
          <h1 className={styles.headingText}>Check Your Email</h1>
          <p className={styles.paragraphText}>
            We sent a password reset link to <span>{email}</span>
          </p>
        </div>
        <div>
          <NavLink to="/login" className={styles.link}>
            <div className={styles.loginBtn}>
              {' '}
              <img src={arrow} className={styles.arrow} />{' '}
              <p className={styles.span}>Back to Login</p>
            </div>
          </NavLink>
        </div>
        <p className={styles.bottomText} onClick={handleResend}>
          Didn’t receive the email? Click to resend.
        </p>
      </div>
    </div>
  );
};

export default MailCheck;
