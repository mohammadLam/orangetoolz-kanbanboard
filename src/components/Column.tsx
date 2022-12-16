import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Column as IColumn } from '../interface/root'
import Task from './Task'

interface Props {
  data: IColumn
  droppableId: string
}

const Column: React.FC<Props> = ({ data, droppableId }) => {
  return (
    <div className='items-start w-[280px]'>
      <h1 className='text-lg font-medium bg-blue-500 text-white py-2.5 px-5 rounded-tl-xl rounded-tr-xl'>
        {data.title}
      </h1>

      <div className='px-2 py-4 border-2 border-t-0 rounded-bl-xl rounded-br-xl'>
        <Droppable droppableId={droppableId}>
          {dropableProvided => {
            return (
              <div
                className='flex flex-col gap-y-2 min-h-[500px]'
                {...dropableProvided.droppableProps}
                ref={dropableProvided.innerRef}
              >
                {data.items.map((item, index) => {
                  return <Task key={index} index={index} task={item} />
                })}
                {dropableProvided.placeholder}
              </div>
            )
          }}
        </Droppable>
      </div>
    </div>
  )
}

export default Column
