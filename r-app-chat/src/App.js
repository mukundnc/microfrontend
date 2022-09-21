import React, { Component } from 'react'
import Form from './components/Form'
import MessageBoard from './components/MessageBoard'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="bodyWrapper2">
        <div className="bodyWrapper">
          <Router>
            <Routes>
              <Route path='/' element={<Form />}>                
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

export default App
