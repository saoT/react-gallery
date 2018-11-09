import React, { Component } from 'react';

import Screen from './Screen';
import Thumbnail from './Thumbnail';

import gallery from './gallery.json';

export default class Gallery extends Component {

  // OPT : passage de l'index
  // OPT : regarder si on peut destructurer
  state = { gallery : gallery, index: 0 } // prop passee au screen

  displayImg = (index) => {

    index = (this.state.gallery.length + index) % gallery.length;

    const displayed = gallery[index];
    this.setState({ displayed: displayed, index: index });
  } // handler qui va etre passe au thumbnail

  render () {
    return (
      <div>
        <Screen displayed={gallery} index={this.state.index} displayImg={this.displayImg}/>
        {
          gallery.map( (thumbnail, i) => <Thumbnail index={i} displayImg={this.displayImg} thumbnail={thumbnail} key={i}/>)
        }
      </div>
    )
  }
}