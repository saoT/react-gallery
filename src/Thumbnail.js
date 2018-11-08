import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render () {
    return (
      <div>
        <img src={this.props.thumbnail.url} />
      </div>
    )
  }
}