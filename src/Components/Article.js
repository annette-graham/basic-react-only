import React from 'react'

export default class Article extends React.Component {

  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <br />
        <a href='#'>More Info</a>
        <br />
      </div>
    )
  }

}
