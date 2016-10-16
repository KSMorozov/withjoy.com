/*
 * Contacts
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


export default class Contacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.contacts}>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="six offset-by-three columns">
                <h1>Right by your side.</h1>
              </div>
            </div>
            <div className="row">
              <div className="ten offset-by-one columns">
                <p>You have enough to worry about. Talk directly to one of our engineers at Joy. We're here to make sure your day with Joy goes off without a hitch.</p>
              </div>
            </div>
            <div className="row">
              <div className="six offset-by-three columns">
                <a>
                  <p className={styles['call-to-action']}>Have a question? Ask Joy</p>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <img src="https://withjoy.com/website/joy-wedding-party.jpg" role="presentation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
