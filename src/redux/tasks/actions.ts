import RootState from '../../interface/root'
import { ADD_TASK, CHANGE_TASK_STATUS, LOAD_TASK_FROM_LOCALSTORAGE } from './actionTypes'

export interface ChangeTaskStatusPayload {
  source: {
    index: number
    status: string
  }
  destination: {
    index: number
    status: string
  }
}

export const addTask = (title: string) => {
  return {
    type: ADD_TASK,
    payload: title
  }
}

export const changeTaskStatus = (payload: ChangeTaskStatusPayload) => {
  return {
    type: CHANGE_TASK_STATUS,
    payload
  }
}

export const loadTaskFromLocalStorage = (payload: RootState) => {
  return {
    type: LOAD_TASK_FROM_LOCALSTORAGE,
    payload
  }
}
