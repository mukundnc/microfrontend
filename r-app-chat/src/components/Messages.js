import React, { Component } from 'react'
import withLocation from './withLocation'
import imgSrc from '../assets/user.jpg'
// const URL = '/api/messages'
const styles = {
  images: {
    width: '40px',
    height: '40px'
  }
}

class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messageList: []
    }
  }
  componentDidMount = () => {
    const { apiUrl } = this.props
    fetch(apiUrl)
      .then((res) => res.json())
      .then((messageList) => {
        this.setState({
          messageList,
        })
      })
  }
  rowClass = (index) => {
    if(index === this.state.messageList.length)
      return 'd-flex align-items-center pt-3'
    else
      return 'd-flex align-items-center border-bottom py-3'
  }
  render() {
    return (
      <div className="h-100 bg-light rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0">Messages</h6>
            <a href="">Show All</a>
        </div>
        {
          this.state.messageList.map((item, i) => (
            <div className={this.rowClass(i)}>
              <img className="rounded-circle flex-shrink-0" src={imgSrc} alt="" style={styles.images}/>
              <div className="w-100 ms-3">
                  <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                  </div>
                  <span>{item.message}</span>
              </div>
            </div>
          ))
        }        
      </div>
    )
  }
}

export default withLocation(Messages)
