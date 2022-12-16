import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import ITask from '../interface/task'

interface Props {
  index: number
  task: ITask
}

const Task: React.FC<Props> = ({ index, task }) => {
  return (
    <Draggable index={index} draggableId={task.id}>
      {provided => {
        return (
          <div
            className='bg-white px-5 py-3 text-base border-2 rounded-xl'
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <p>{task.name}</p>
          </div>
        )
      }}
    </Draggable>
  )
}

export default Task
