import React, { Component } from 'react';

import Screen from './Screen';
import Thumbnail from './Thumbnail';


export default class Gallery extends Component {

  state = { displayed : 0 } // prop passee au screen

  displayImg = () => {

  } // handler qui va etre passe au thumbnail

  render () {
    return (
      <div>
        <Screen />
        <Thumbnail />
      </div>
    )
  }
}