import React from 'react';

const getDateString = date => {
  if (date === undefined){
    date = new Date()
  }
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate()

  const str = yy + '-' + ( mm < 10 ? '0' + mm : mm ) + '-' + ( dd < 10 ? '0' + dd : dd );
  return str;
}

const setDateValue = (state,action) => {
  const today = new Date();
  const targetDay = new Date();

  switch (action) {
    case 'DAY7':
      targetDay.setDate(targetDay.getDate()-7)
      break;
    case 'DAY15':
      targetDay.setDate(targetDay.getDate()-15)
      break;
    case 'MONTH1':
      targetDay.setMonth(targetDay.getMonth()-1)
      break;
    case 'MONTH3':
      targetDay.setMonth(targetDay.getMonth()-3)
      break;
    case 'MONTH6':
      targetDay.setMonth(targetDay.getMonth()-6)
      break;
  
    default:
      break;
  }

  return { startDate:getDateString(targetDay), endDate:getDateString(today) };
}


const DateRange2 = () => {

  const [myDate, setMyDate] = React.useReducer(setDateValue,{
    startDate : getDateString(),
    endDate : getDateString()
  });

  return (
    <div>
      <h2>DateRange2</h2>
      <p>{myDate.startDate}~{myDate.endDate}</p>
      <p>
        <button
          type='button'
          onClick={e=>{setMyDate('DAY7')}}>7일</button>
        <button
          type='button'
          onClick={e=>{setMyDate('DAY15')}}>15일</button>
        <button
          type='button'
          onClick={e=>{setMyDate('MONTH1')}}>1개월</button>
        <button
          type='button'
          onClick={e=>{setMyDate('MONTH3')}}>3개월</button>
        <button
          type='button'
          onClick={e=>{setMyDate('MONTH6')}}>6개월</button>
        </p>
    </div>
  );
};

export default DateRange2;