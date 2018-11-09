import React, { Component } from 'react';


export default class Screen extends Component {

  displayPrevious = () => {
    this.props.displayImg(this.props.index - 1);
  }

  displayNext = () => {
    this.props.displayImg(this.props.index + 1);
  }

  render () {

    const imgCount = this.props.gallery.length
    const imgWidth = 300 

    const railStyle = {
      width: imgCount * imgWidth + 'px',
      left: -imgWidth * this.props.index + 'px'
    }

    return (
      <div>
        <div className="previous" onClick={this.displayPrevious}>PREV</div>
        <div className="displayed">
          <div className="window">
            <div style={railStyle} className="rail">
             {
              this.props.gallery.map( (img, i) => {
                return (
                  <div className="img-container">
                    <img src={img.url}/>
                  </div>
                )
              })
              }
              
            </div>
          </div>
        </div>
        <div className="next" onClick={this.displayNext}>NEXT</div>
      </div>
    )
  }
}