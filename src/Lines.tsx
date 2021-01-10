import React from 'react';
import Line from './Line'

type SingleLine = {
  hour: string,
  task: string,
  complete: boolean
}

interface LinesProps {
  diary: Array<SingleLine>
  toggleTask: (selectedTask:SingleLine) => void
  addTask: (selectedTask:SingleLine) => void
}


const Lines:React.FC<LinesProps> =({diary, toggleTask, addTask}) => {
  return (
    <React.Fragment>
      {diary.map(line => {
        return (
          <Line key={line.hour}
          singleLine ={line}
          toggleTask ={toggleTask}
          addTask ={addTask}/>
        )
      })}
    </React.Fragment>
  )
}

export default Lines