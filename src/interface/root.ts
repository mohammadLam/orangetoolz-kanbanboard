import Task from './task'

export interface Column {
  title: string
  items: Task[]
}

interface RootState {
  todo: Column
  inProgress: Column
  done: Column
}

export default RootState
