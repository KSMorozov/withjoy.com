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
import Announcement from 'containers/Announcement';
import HappyPeople from 'containers/HappyPeople';
import Memories from 'containers/Memories';
import Contacts from 'containers/Contacts';
import Header from 'containers/Header';
import People from 'containers/People';
import Footer from 'containers/Footer';
import Story from 'containers/Story';
import RSVPs from 'containers/RSVPs';


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="stage">
        <Header />
        <Story />
        <Announcement />
        <RSVPs />
        <People />
        <Memories />
        <HappyPeople />
        <Contacts />
        <Footer />
      </div>
    );
  }
}
