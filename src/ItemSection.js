import React, { Component } from 'react'
import './ItemSection.css'

class ItemSection extends Component {
  getImageURL () {
    const id = this.props.image
    const imageFile = 'img/' + id + '.png'
    return imageFile
  }

  getLink () {
    const url = this.props.url
    const link = 'http://' + url
    return link
  }

  render () {
    const label = this.props.label
    const imageURL = this.getImageURL()
    const linkURL = this.getLink()
    const term = this.props.term
    const description = this.props.description
    const phase = this.props.phase
    const environment = this.props.environment
    const member = this.props.member

    return (
      <div className='ItemSection'>
        <div className='InnerWrap'>
          <div className='ItemPhoto'>
            <img src={imageURL} />
          </div>

          <div className='ItemInfo'>
            <h2>{label}</h2>
            <p><a href={linkURL} target='_blank'>{linkURL}</a></p>
            <p>{description}</p>
            <table>
              <tr><th>期　間</th><td>{term}</td></tr>
              <tr><th>担　当</th><td>{phase}</td></tr>
              <tr><th>言語等</th><td>{environment}</td></tr>
              <tr><th>人　員</th><td>{member}</td></tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default ItemSection
