import React, { useState} from 'react';

const month: Array<string> = ['Select month','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

interface ChooseDateProps {
  setDate: (dateInfo:Array<string>) => void
}



const ChooseDate:React.FC<ChooseDateProps> = ({setDate}) => {
  const [day, setChosenDay] = useState('')
  const [mon, setChosenMon] = useState('')

  const setDay = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setChosenDay(e.target.value)
  }

  const setMon = (e:React.ChangeEvent<HTMLSelectElement>):void => {
    setChosenMon(e.target.value)
  }

  return(
    <div className='chooseDate-wrapper'>
      <input type='number' onChange={setDay}/>
      <select onChange= {setMon}>
        {
          month.map(mon => {
            return <option key={mon}>{mon}</option>
          })
        }
      </select>
      <button onClick={() =>setDate([day, mon])} className='btn-ok'>OK</button>
    </div>

  )
}

export default ChooseDate