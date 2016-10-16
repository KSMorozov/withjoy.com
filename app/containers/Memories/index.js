/*
 * Memories
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

export default class Memories extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.memories}>
        <div className={`block ${styles.callout}`}>
          <div className="container">
            <div className="row">
              <div className="eight offset-by-two columns">
                <h6>Photos and memories</h6>
                <h1>Capture and preserve the moments your guests see</h1>
              </div>
            </div>
            <div className="row">
              <div className="ten offset-by-one columns">
                <p>Relive your wedding from hundreds of points of views. It’s your personal wedding timeline that makes it fun for your guests to follow along.</p>
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
          </div>
        </div>
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={`six columns ${styles.feature}`}>
                <h6>PHOTOS</h6>
                <h4>Capture the In-Betweens</h4>
                <p>Professional photographers take beautiful photos of key parts of the wedding. But you don’t want to miss the candid shots, like selfies on the dance floor! Joy lets all of your guests share the photos they capture on your private timeline, so you can see your wedding day from their perspective.</p>
              </div>
              <div className={`six columns ${styles.feature}`}>
                <h6>TIMELINE</h6>
                <h4>Follow along</h4>
                <p>From a photo of your first kiss to Grandma and Grandpa’s love advice—your Moments timeline is the best way for everyone to watch your wedding unfold and be an intimate part of the journey.</p>
              </div>
            </div>
            <div className="row">
              <div className={`six columns ${styles.feature}`}>
                <h6>GUESTBOOK</h6>
                <h4>A living guestbook</h4>
                <p>Joy offers a real, live place for your guests to share their love and well-wishes. Post messages directly to your moments timeline or attach them to photos. Send the author some love by commenting or tapping the ‘heart’ on any photo.</p>
              </div>
              <div className={`six columns ${styles.feature}`}>
                <h6>SLIDESHOW</h6>
                <h4>Live Slideshow</h4>
                <p>Joy's LiveShow mode lets you display the your timeline during the wedding so everybody can watch it unfold as it's happening. (Or for those who can't make it - it's a great way to watch from home.)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="six offset-by-three columns">
                <a>
                  <p className={styles['call-to-action']}>View Our Complete Feature List</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
