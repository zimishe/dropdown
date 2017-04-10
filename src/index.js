import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './reducers'

import Container from './components/container'
import './../assets/css/style.css'

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
  document.getElementById('root')
);


