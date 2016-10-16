/*
 * RSVPS
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

export default class RSVPS extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.rsvps}>
        <div className={`block  ${styles.callout}`}>
          <div className="container">
            <div className="row">
              <div className="six offset-by-three columns">
                <h1>Make your guests' lives easier. (And yours too.)</h1>
              </div>
            </div>
            <div className="row">
              <div className="ten offset-by-one columns">
                <p>Raise your hand if you’ve misplaced a wedding invite or missed an RSVP deadline! Let’s make that a thing of the past. With Joy, inviting and organizing your guest list, communicating, and coordinating all your wedding details is a breeze.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className="container-fluid">
            <div className={`row ${styles['first-row']}`}>
              <div className={`${styles['gallery-image']}`}></div>
              <div className={`${styles['gallery-image']}`}></div>
              <div className={`${styles['gallery-image']}`}></div>
            </div>
            <div className={`row ${styles['second-row']}`}>
              <div className={`${styles['gallery-image']}`}></div>
              <div className={`${styles['gallery-image']}`}></div>
              <div className={`${styles['gallery-image']}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={`six columns ${styles.feature}`}>
                <h4>Throw out those spreadsheets</h4>
                <p>Or import them! Keep all your guests and their information in a single place. Invite guests, send custom messages, and get responses—directly in Joy.</p>
              </div>
              <div className={`six columns ${styles.feature}`}>
                <h4>Get RSVPs On-Time (Finally)</h4>
                <p>Easily ask your guests about dietary restrictions, +1s, mailing addresses, and more. Responses are automatically stored. It’s easy to ask and simple to answer.</p>
              </div>
            </div>
            <div className="row">
              <div className={`six columns ${styles.feature}`}>
                <h4>Automatically Notify Guests</h4>
                <p>Want to remind your guests to silence their phones or announce the cake-cutting? Send automatic and triggered notifications that let everybody know what’s happening when.</p>
              </div>
              <div className={`six columns ${styles.feature}`}>
                <h4>Multiple Admins</h4>
                <p>Add as many admins as you need to help manage your Joy wedding and update your schedule, guest list, content, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
