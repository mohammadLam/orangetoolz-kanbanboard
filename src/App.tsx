import React, { useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import State from './redux/tasks/reducer'
import { changeTaskStatus, loadTaskFromLocalStorage } from './redux/tasks/actions'
import AddTask from './components/AddTask'
import Column from './components/Column'

const App: React.FC = () => {
  const state = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    dispatch(
      changeTaskStatus({
        destination: {
          index: destination.index,
          status: destination.droppableId
        },
        source: {
          index: source.index,
          status: source.droppableId
        }
      })
    )
  }

  useEffect(() => {
    const tasksString = localStorage.getItem('tasks')

    // if task all ready have in localstorage then run this command
    if (tasksString) {
      try {
        const tasks = JSON.parse(tasksString)

        dispatch(loadTaskFromLocalStorage(tasks))
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  return (
    <div className='w-1/2 mx-auto flex flex-col gap-y-10 py-10 items-center'>
      <AddTask />

      <div className='flex gap-x-5'>
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return <Column key={data.title} data={data} droppableId={key} />
          })}
        </DragDropContext>
      </div>
    </div>
  )
}

export default App
