import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/tasks/actions'

const AddTask: React.FC = () => {
  // state for store task name
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  // onSubmit function
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(addTask(name))
    setName('')
  }

  return (
    <form onSubmit={submitHandler} className='flex gap-3'>
      <input
        className='border-2 w-[400px] h-10 px-5 placeholder:italic placeholder:text-gray-500 outline-none rounded-lg'
        placeholder='Type your task name here'
        type='text'
        value={name}
        onChange={onChangeHandler}
      />
      <button type='submit' className='h-10 bg-blue-500 text-white px-5 rounded-lg'>
        Add
      </button>
    </form>
  )
}

export default AddTask
