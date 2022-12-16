import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './redux/store'

// if state is change this funcion will update localstroge value
store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()))
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
