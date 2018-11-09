import React, { Component } from 'react';

const style = {
  width: '300px'
}


export default class Screen extends Component {

  displayPrevious = () => {
    this.props.displayImg(this.props.index - 1);
  }

  displayNext = () => {
    this.props.displayImg(this.props.index + 1);
  }

  render () {
    return (
      <div>
        <div className="previous" onClick={this.displayPrevious}>PREV</div>
        <div className="displayed">
          <div className="window">
            <div className="rail">
              <div className="img-container">
                <img style={style} src={this.props.displayed.url}/>
              </div>
            </div>
          </div>
        </div>
        <div className="next" onClick={this.displayNext}>NEXT</div>
      </div>
    )
  }
}