/*
 * People
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

export default class People extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.people}>
        <div className="container">
          <div className="row">
            <div className="ten offset-by-one columns">
              <h6>People</h6>
              <h1>Bring everyone closer together</h1>
              <p>Joy makes it fun for your family and friends to get to know each other even before the special day. Put names to faces - it's the the ultimate icebreaker. Your wedding comes to life with every photo, comment and like captured by family and friends into a beautiful visual timeline.</p>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <img src="https://withjoy.com/website/joy-wedding-photo-timeline.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
