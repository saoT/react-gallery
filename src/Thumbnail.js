import React, { Component } from 'react';

const style = {
  width: '100px',
  height: '100px'
}

export default class Thumbnail extends Component {

  render () {
    return (
      <div onClick={()=>this.props.displayImg(this.props.index)}>
        <img style={style} src={this.props.thumbnail.url} />
      </div>
    )
  }
}