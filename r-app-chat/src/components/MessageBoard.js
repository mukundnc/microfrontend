import React, { Component } from 'react'
const URL = '/api/messages'

class MessageBoard extends Component {
  constructor() {
    super()
    this.state = {
      messageList: [],
    }
  }

  createList = (signature) => {
    return (
      <div key={signature.id} className="signature">
        <h3 className="h3msg"> {signature.message} </h3>
        <h2 className="h2sig"> -{signature.name} </h2>
      </div>
    )
  }

  componentDidMount = () => {
    console.log('Mounted!')
    fetch(URL)
      .then((res) => res.json())
      .then((messages) => {
        const messageList = messages.map(this.createList)
        this.setState({
          messageList,
        })
      })
  }
  render() {
    return (
      <div>
        <h6> Guest Messages </h6>
        <div className="guestdataContainer"> {this.state.messageList} </div>
      </div>
    )
  }
}

export default MessageBoard
