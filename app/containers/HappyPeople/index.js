/*
 * HappyPeople
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

export default class HappyPeople extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      stories: [
        {
          id: 0,
          image: 'https://withjoy.com/assets/img/people/jacklynjared.jpg',
          names: 'Jacklyn & Jared',
          story: '“My fiancé and I really love this app and we\'ve been getting great feedback from our close friends and family. This is exactly what I wanted, I know anyone can easily just make an account on the Knot but I\'m going to have friends and family coming in from all places and this helps so much.”',
        },
        {
          id: 1,
          image: 'https://withjoy.com/assets/img/people/bobcassie.jpg',
          names: 'Bob & Cassie',
          story: '“We really enjoyed the ability to connect our guests and their experiences with our own immediately after the wedding. It was great to see what they saw.”',
        },
        {
          id: 2,
          image: 'https://withjoy.com/assets/img/people/scott.jpg',
          names: 'Scott M.',
          story: '“Thanks to Joy, I felt like the wedding started weeks before the actual ceremony. And as a member of the wedding party, it was so much fun to see the guests document their own pre-wedding festivities!”',
        },
        {
          id: 3,
          image: 'https://withjoy.com/assets/img/people/adammary.jpg',
          names: 'Adam & Mary',
          story: '“It was so fun seeing all my friends post on the app before the wedding. They posted details that they would have never shared on Instagram to their wider group - I got to see my friends arriving in town, getting ready for the wedding, and even pictures as they were walking in.”',
        },
        {
          id: 4,
          image: 'https://withjoy.com/assets/img/people/renee.jpg',
          names: 'Renee Nicole Jones',
          story: '“I love the Joy app. I can connect my bride and groom with their guests in more ways than one and what\'s even better is the guests get to join in on the fun too! True personal connections are created instantly.”',
        },
      ],
      active: 0,
    };
  }

  render() {
    return (
      <div className={styles.happy}>
        <div className="container-fluid">
          <div className="row">
            <div
              style={{ backgroundImage: `url(${this.state.stories[this.state.active].image})` }}
              className={styles.picture}
            >
            </div>
            <div className={styles.story}>
              <div className="container">
                <div className="row">
                  <div className="ten offset-by-one columns">
                    <h6>Happy People</h6>
                    {
                      this.state.stories.map(
                        (story) => <div
                          onClick={() => this.setState({ active: story.id })}
                          style={{ backgroundImage: `url(${story.image})` }}
                          className={styles.avatars}
                          key={story.names}
                        >
                        </div>
                      )
                    }
                    <h3>{this.state.stories[this.state.active].names}</h3>
                    <p>{this.state.stories[this.state.active].story}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
