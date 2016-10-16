/*
 * Footer
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

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`block ${styles.footer}`}>
        <div className="container">
          <div className="row">
            <div className={`three columns ${styles.header}`}>
              <ul>
                <li>
                  <img src="https://withjoy.com/assets/img/joy-brand-circle-blk.svg" role="presentation" />
                </li>
                <li>
                  <p>We're working hard to make sure your wedding is a special one. If you have any ideas on what we can do better, reach out and say hello.</p>
                </li>
              </ul>
            </div>
            <div className={`six columns ${styles.menu}`}>
              <div className="row">
                <div className="four columns">
                  <ul>
                    <li>
                      <h6>SEE IT</h6>
                    </li>
                    <li><a>Sample Wedding</a></li>
                    <li><a>Create My Wedding</a></li>
                    <li><a>Login</a></li>
                    <li><a>Help</a></li>
                    <li><a>Updates</a></li>
                  </ul>
                </div>
                <div className="four columns">
                  <ul>
                    <li>
                      <h6>Product</h6>
                    </li>
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>FAQ</a></li>
                  </ul>
                </div>
                <div className="four columns">
                  <ul>
                    <li>
                      <h6>Company</h6>
                    </li>
                    <li><a>Blog</a></li>
                    <li><a>User Agreement</a></li>
                    <li><a>Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`three columns ${styles.socials}`}>
              <div className={`row ${styles.media}`}>
                <div className="six offset-by-three columns">
                  <div className="row">
                    <div className="six columns">
                      <a>
                        <img src="https://withjoy.com/assets/img/pinterest.svg" role="presentation" />
                      </a>
                    </div>
                    <div className="six columns">
                      <a>
                        <img src="https://withjoy.com/assets/img/instagram.svg" role="presentation" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`row ${styles.stores}`}>
                <div className="ten offset-by-two columns">
                  <a>
                    <img src="https://withjoy.com/assets/img/btn-AppStore-White.png" role="presentation" />
                  </a>
                </div>
              </div>
              <div className={`row ${styles.stores}`}>
                <div className="ten offset-by-two columns">
                  <a>
                    <img src="https://withjoy.com/assets/img/btn-GooglePlay-white.png" role="presentation" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
