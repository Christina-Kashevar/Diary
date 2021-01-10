import React from 'react';
import {SingleLine} from './types'

interface LineProps {
  singleLine: SingleLine
  toggleTask: (selectedTask:SingleLine) => void
  addTask: (selectedTask:SingleLine) => void
}

const Line:React.FC<LineProps> =({singleLine, toggleTask, addTask}) => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    singleLine.task = e.target.value
    addTask(singleLine)
  }

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement>):void => {
    singleLine.task =''
    addTask(singleLine)
  }

  return (
    <div className='line-wrapper'>
      <span>{singleLine.hour}</span>

      <input
      type='checkbox'
      checked={singleLine.complete}
      onChange = {() => toggleTask(singleLine)}/>

      <input className = {singleLine.complete ? 'complete' : undefined}
        type='text'
        value = {singleLine.task}
        onChange={handleChange}/>
        <button onClick={handleDelete} className='btn-del'>DELETE</button>
    </div>
  )
}

export default Line