import React, { Component } from 'react'
import withLocation from './withLocation'
const URL = '/api/messages'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      message: '',
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  addToMessageBoard = (event) => {
    event.preventDefault();
    const me = this.props;
    fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        message: this.state.message,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          me.history('/messages');
        }
      })
      .catch((error) => {
        // console.log('Request failure: ', error)
      })
  }
  render() {
    return (
      <div className="guestbookDiv">
        <form onSubmit={this.addToMessageBoard.bind(this)} className="guestBookForm">
          <label htmlFor="" className="guestlabel">
            What 's your name?
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            className="NameinputForm"
          />
          <label className="guestlabel" htmlFor="">
            Leave a nice message:
          </label>
          <textarea
            className="MessageinputForm"
            type="text"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div className="Submit">
            <button
              type="submit"
              value="Submit"
              className="submitbuttonguestbook"
            >
              Submit Message
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withLocation(Form)
