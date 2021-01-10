import React from 'react';

type Date = {
  day: number,
  dayOfWeak:number,
  month: number
}

interface HeaderProps {
  date: Date
}

const Header:React.FC<HeaderProps> =({date}) => {
  const days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const month: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div className='header-wrapper'>
      <span>{days[date.dayOfWeak]}</span>
      <span>{date.day}</span>
      <span>{month[date.month]}</span>
    </div>
  )
}

export default Header