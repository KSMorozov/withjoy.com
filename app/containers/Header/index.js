/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className={`block ${styles.header}`}>
        <nav className={styles.navigation}>
          <div className="container v-center">
            <div className={`v-center ${styles['navigation-header']}`}>
              <a className={styles.circle}>
                <h3>Joy</h3>
              </a>
              <button className={styles['navigation-header-hamburger']}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={styles['navigation-collapse']}>
              <ul className={styles['navigation-collapse-menu']}>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Faq</a>
                </li>
                <li>
                  <a>Sample</a>
                </li>
                <li>
                  <a>Get The App</a>
                </li>
                <li>
                  <a>Help</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </div>
            {/* <div className="row">
              <div className="six columns"><h1>We’re here for you from will you to I do.</h1></div>
            </div> */}
          </div>
        </nav>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.hero}`}>
          <div className="row">
            <div className="six columns animated fadeInUp">
              <h1>We’re here for you from will you to I do.</h1>
              <p>The free wedding website & app that does more.</p>
              <div className="row nrow">
                <div className="eight columns ncol">
                  <a>
                    <p className={styles['button-cta']}>Get Started</p>
                  </a>
                </div>
                <div className="four columns ncol">
                  <a className={`v-center ${styles['button-lead']}`} id="lead">
                    <img className={styles['button-lead-image']} src="https://withjoy.com/website/icon-message-bubble.svg" role="presentation" />
                    <p className={styles['button-lead-text']}>Have a question? Ask Joy</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
