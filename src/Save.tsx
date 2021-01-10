import React from 'react';
import {DateInfo } from './types'
import {SingleLine} from './types'

interface SaveBtnProps {
  diary: Array<SingleLine>,
  date: DateInfo 
}

const SaveBtn:React.FC<SaveBtnProps> =({diary, date}) => {
  const addToStorage = (e:React.MouseEvent<HTMLButtonElement>):void => {
    localStorage.setItem(`${date.day}/${date.month}`, JSON.stringify(diary));
  }

  return (
    <button onClick={addToStorage} className='btn-save'>Save</button>
  )
}

export default SaveBtn;