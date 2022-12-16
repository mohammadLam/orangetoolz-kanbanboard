import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './tasks/reducer'

const localStorageMiddleware: Middleware = store => next => action => {
  localStorage.setItem('tasks', action.payload)
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
