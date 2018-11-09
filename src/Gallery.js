import React, { Component } from 'react';

import Screen from './Screen';
import Thumbnail from './Thumbnail';

import gallery from './gallery.json';

/*
[
  {
    "name": "une image",
    "description": "une description",
    "url": "https://images.unsplash.com/photo-1539264197256-5b91ec651083?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=f6bdd3fb85dfd6b6cf18cdc002050d79"
  },
  ------------ this.state.displayed
  {
    "name": "une image",
    "description": "une description",
    "url": "https://images.unsplash.com/photo-1540331756025-0f33a5c3b065?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=c8c16de45608778e98d63c69969bc8d3"
  },
  -------------
  ...
*/

export default class Gallery extends Component {

  // OPT : passage de l'index
  // OPT : regarder si on peut destructurer
  state = { gallery : gallery, index: 0 } // prop passee au screen

  displayImg = (index) => {

    index = (this.state.gallery.length + index) % this.state.gallery.length;

    this.setState({ index: index });
  } // handler qui va etre passe au thumbnail

  render () {
    return (
      <div>
        <Screen gallery={gallery} index={this.state.index} displayImg={this.displayImg}/>
        {
          gallery.map( (thumbnail, i) => <Thumbnail index={i} displayImg={this.displayImg} thumbnail={thumbnail} key={i}/>)
        }
      </div>
    )
  }
}