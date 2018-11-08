import React, { Component } from 'react';

export default class Screen extends Component {

  displayPrevious = () => {
    this.props.displayImg(this.props.index);
  }

  displayNext = () => {
    this.props.displayImg(this.props.index);
  }

  render () {
    return (
      <div>
        <div className="previous" onClick={this.displayPrevious}></div>
        <div className="displayed">
          <img src={this.props.displayed.url}/>
        </div>
        <div className="next" onClick={this.displayNext}></div>
      </div>
    )
  }
}