import React, { Component } from 'react';

import Screen from './Screen';
import Thumbnail from './Thumbnail';
/*
[
  {
    "name": "une image",
    "description": "une description",
    "url": "./imgs/img-a.png"
  },
  {
    "name": "une image",
    "description": "une description",
    "url": "./imgs/img-b.png"
  },
  ...
]
*/

import gallery from './gallery.json';

export default class Gallery extends Component {

  state = { displayed : gallery[0] } // prop passee au screen

  displayImg = (index) => {
    displayed = gallery[index];
    this.setState({ displayed : displayed});
  } // handler qui va etre passe au thumbnail

  render () {
    return (
      <div>
        <Screen displayed={this.state.displayed} displayImg={this.displayImg}/>
        {
          gallery.map( (thumbnail, i) => { <Thumbnail displayImg={this.displayImg}/> })
        }
      </div>
    )
  }
}