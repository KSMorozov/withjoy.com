/*
 * Announcement
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Slider from 'react-slick';

import styles from './styles.css';

export default class Announcement extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`block ${styles.announcement}`}>
        <div className="container">
          <div className="row">
            <div className="six offset-by-three columns">
              <h1>Design the Perfect Announcement</h1>
            </div>
          </div>
          <div className="row">
            <div className="ten offset-by-one columns">
              <p>From your perfect photo, font and colors to beautiful cover templates and backgrounds, Joy helps you share your story with style. And for the adventurous - access to code.</p>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <Slider
                dotsClass={`slick-dots ${styles['announcement-carousel-dots']}`}
                slidesToScroll={1}
                draggable={false}
                slidesToShow={1}
                arrows={false}
                pauseOnHover
                speed={500}
                autoplay
                lazyLoad
                infinite
                dots
                fade
              >
                <div><img src="https://withjoy.com/assets/img/joy-design-01.jpg" role="presentation" /></div>
                <div><img src="https://withjoy.com/assets/img/joy-design-02.jpg" role="presentation" /></div>
                <div><img src="https://withjoy.com/assets/img/joy-design-03.jpg" role="presentation" /></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
