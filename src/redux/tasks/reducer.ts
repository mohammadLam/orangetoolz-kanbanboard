import { ChangeTaskStatusPayload } from './actions'
import { v4 as uuidv4 } from 'uuid'
import RootState from '../../interface/root'
import { ADD_TASK, CHANGE_TASK_STATUS, LOAD_TASK_FROM_LOCALSTORAGE } from './actionTypes'

interface AddTask {
  type: 'tasks/addTask'
  payload: string
}

interface ChangeTaskStatus {
  type: 'tasks/changeTaskStatus'
  payload: ChangeTaskStatusPayload
}

interface LoadTask {
  type: 'tasks/loadTaskFromLocalStorage'
  payload: RootState
}

type ACTION_TYPE = AddTask | ChangeTaskStatus | LoadTask

const item = {
  id: uuidv4(),
  name: 'Wash cloth'
}

const item2 = {
  id: uuidv4(),
  name: 'Go gym'
}
const item3 = {
  id: uuidv4(),
  name: 'Take bath'
}

// initialState for store
const initialState: RootState = {
  todo: {
    title: 'Todo',
    items: [item, item3]
  },
  inProgress: {
    title: 'In Progress',
    items: []
  },
  done: {
    title: 'Done',
    items: [item2]
  }
}

export const reducer = (state: RootState = initialState, action: ACTION_TYPE): RootState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo: {
          ...state.todo,
          items: [...state.todo.items, { id: uuidv4(), name: action.payload }]
        }
      }

    case CHANGE_TASK_STATUS:
      const { destination, source } = action.payload
      const newState = { ...state }

      // get the moving task
      const movingTask = newState[source.status as keyof RootState].items[source.index]

      // remove task from source
      newState[source.status as keyof RootState].items.splice(source.index, 1)

      // add the task in new destination
      newState[destination.status as keyof RootState].items.splice(destination.index, 0, movingTask)

      return newState

    case LOAD_TASK_FROM_LOCALSTORAGE:
      return action.payload

    default:
      return state
  }
}

type State = ReturnType<typeof reducer>
export default State
