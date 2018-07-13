import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from "react-redux"
import Header from './containers/Header'
import Content from './Content'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'green'
    }
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default:
      return state
  }
}
const store = createStore(themeReducer)

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <Content/>
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
