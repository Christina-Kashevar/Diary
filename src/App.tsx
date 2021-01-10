import React, {useState} from 'react';
import ChooseDate from './ChooseDate'
import Modal from './Modal'
import Lines from './Lines'
import times from './times'
import Header from './Header'
import SaveBtn from './Save'
import {SingleLine} from './types'
import {DateInfo } from './types'

type ToggleTask = (selectedTask:SingleLine) => void
type SetDate = (dateInfo:Array<string>) => void
type ValidateDate =(day:number, mon: number) => boolean

const diary:Array<SingleLine> = []
for (let i =0; i < times.length; i++) {
  diary[i] = {hour: times[i], task: '', complete: false}
}

const month: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let dateFull = new Date();
let todayDiary:Array<SingleLine> = []
if (localStorage.getItem(`${dateFull.getDate()}/${dateFull.getMonth()}`)){
  let b:any = localStorage.getItem(`${dateFull.getDate()}/${dateFull.getMonth()}`)
  todayDiary = JSON.parse(b.split('}{'))
} else {
  todayDiary = diary
}


const validateDate:ValidateDate = (day, mon) => {
  let d = new Date(2021, mon, day);
  if ((d.getMonth() === mon) && (d.getDate() === day)) {
    return true;
  } 
  return false
}

const App:React.FC = () => {
  const [taskComplete, setTaskComplete] = useState(todayDiary)
  const [isCorrectDate, setIsCorrectDate] = useState(true)
  const [displayedDate, setDisplayedDate] = useState<Array<number> | null>(null)

  const toggleTask: ToggleTask = selectedLine => {
    const newTaskData = taskComplete.map(hourInfo => {
      if (hourInfo === selectedLine) {
        return {
          ...hourInfo,
          complete: !hourInfo.complete
        }
      }
      return hourInfo
    })
    setTaskComplete(newTaskData)
  }

  const addTask:ToggleTask = selectedLine => {
    const newTaskData = taskComplete.map(hourInfo => {
      if (hourInfo === selectedLine) {
        return {
          ...hourInfo,
          task: selectedLine.task
        }
      }
      return hourInfo
    })
    setTaskComplete(newTaskData)
  }

  const setDate:SetDate = dateInfo => {
    const selectedDay = +(dateInfo[0]);
    const selectedMonth = month.indexOf(dateInfo[1])
    if (dateInfo[0].trim() === '' ||
        dateInfo[0]==='Select month' ||
        !validateDate(selectedDay, selectedMonth)) {
      setIsCorrectDate(false)
    } else {
      if( localStorage.getItem(`${selectedDay}/${selectedMonth}`)) {
        let b:any = localStorage.getItem(`${selectedDay}/${selectedMonth}`)
        setTaskComplete(JSON.parse(b.split('}{')))
      } else {
        setTaskComplete(diary)
      }
      setDisplayedDate([selectedDay,selectedMonth])
    }
  }

  const deleteIsWrongDate = () => {
    setIsCorrectDate(true)
  }

  if (displayedDate !== null) {
    dateFull = new Date(2021, displayedDate[1], displayedDate[0])
  }
  
  const date:DateInfo = {
    day: dateFull.getDate(),
    dayOfWeak: dateFull.getDay(),
    month: dateFull.getMonth()
  }

  return (
    <React.Fragment>
      <Modal isCorrectDate={isCorrectDate} deleteIsWrongDate={deleteIsWrongDate}/>
      <div className='wrapper'>
        <ChooseDate setDate={setDate}/>
        <Header date={date}/>
        <Lines diary={taskComplete} toggleTask={toggleTask} addTask={addTask}/>
        <SaveBtn diary={taskComplete} date={date}/>
      </div>
    </React.Fragment>
  );
}

export default App;
