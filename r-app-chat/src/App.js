import React, { Component } from 'react'
import PropTypes from "prop-types"
// import Form from './components/Form'
import MessageBoard from './components/MessageBoard'
import Messages from './components/Messages'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import './assets/style.css';
import './assets/bootstrap.min.css';

class App extends Component {
  render() {
    const { apiUrl } = this.props
    return (
      <div className="bodyWrapper2">
        <div className="bodyWrapper">
          <Router>
            <Routes>
              <Route path='/' element={<Messages apiUrl={apiUrl}/>}>                
              </Route>
              <Route path='/messages' element={<MessageBoard />}>
              </Route>
            </Routes>
          </Router>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  apiUrl: PropTypes.string.isRequired,
}
export default App
