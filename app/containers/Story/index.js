/*
 * Story
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

export default class Story extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`block ${styles.story}`}>
        <div className={styles['story-callout']}>
          <div className="container">
            <div className="row">
              <div className="six offset-by-three columns">
                <h6>Before During and After</h6>
                <h1>It's everything about your wedding in one place.</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['story-tale']}>
          <div className="container">
            <div className="row">
              <div className="ten offset-by-one columns">
                <p>Create the perfect wedding website and app that makes sharing and coordinating all the details of your wedding a breeze. From managing your guests and RSVPs to capturing the joy of your special day for years to come - It's all here in one place.</p>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <Slider
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
                  <div><img src="https://withjoy.com/assets/img/joy-wedding-website-app-wht.jpg" role="presentation" /></div>
                  <div><img src="https://withjoy.com/assets/img/joy-wedding-registry-faqs-wht.jpg" role="presentation" /></div>
                  <div><img src="https://withjoy.com/assets/img/joy-wedding-schedule-guest-list-wht.jpg" role="presentation" /></div>
                  <div><img src="https://withjoy.com/assets/img/joy-wedding-photos-wht.jpg" role="presentation" /></div>
                </Slider>
              </div>
            </div>
          </div>
          <div className={`container ${styles['story-tale-features']}`}>
            <div className="row">
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img className={styles['feature-image-blend']} src="https://withjoy.com/assets/img/joy-details-hero.png" role="presentation" />
                <h3>The Details</h3>
                <p>From your wedding schedule to hotel and shuttle listings - Let Joy organize it all for you and your guests.</p>
              </div>
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img src="https://withjoy.com/assets/img/joy-wedding-party.jpg" role="presentation" />
                <h3>Wedding Party</h3>
                <p>Showcase your wedding party and make it a joy for everyone to learn what makes your wedding party special.</p>
              </div>
            </div>
            <div className="row">
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img src="https://withjoy.com/assets/img/joy-collect-hero.jpg" role="presentation" />
                <h3>Collect Photos</h3>
                <p>Collect the photos the photographer doesn't see. Joy lets all of your guests share the photos they capture on your private timeline, so you can see your wedding day from their perspective.</p>
              </div>
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img src="https://withjoy.com/assets/img/joy-faq-hero.png" role="presentation" />
                <h3>Questions & Answers</h3>
                <p>Create your own Questions and Answers to best communicate the common questions asked by your guests. Make it easy for guests to ask without needing to know your email address.</p>
              </div>
            </div>
            <div className="row">
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img src="https://withjoy.com/website/joy-wedding-online-rsvp.png" role="presentation" />
                <h3>Guests and RSVPs</h3>
                <p>Create your guest list with Joy. Collect mailing addresses, RSVPs, +1s and whatever else you want with custom questions. You can even make private notes about individual guests.</p>
              </div>
              <div className={`six columns ${styles['story-tale-features-feature']}`}>
                <img className={styles['feature-image-fix']} src="https://withjoy.com/website/joy-wedding-website-privacy.png" role="presentation" />
                <h3>Control over who sees what</h3>
                <p>Joy gives you complete control over the privacy of your wedding. Choose which parts of your website is visible to everyone and what requires your wedding code for access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
