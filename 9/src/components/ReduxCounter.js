import React from 'react';
//props만 받아서 화면에 보여주기만 하는 프레젠테이션 컴포넌트

const ReduxCounter = (props) => {
  return (
    <div>
      <h1 style = {{color:props.color}}>{props.number}</h1>
      <div>
        <button onClick={()=>{props.onPlusClick()}}>+1</button>
        <button onClick={()=>{props.onMinusClick()}}>-1</button>
      </div>
    </div>
  );
};

export default ReduxCounter;