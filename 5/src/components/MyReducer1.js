import React,{useReducer} from 'react';

function setCountValue(state,action){
  console.log(action,state)
  switch (action) {
    case 'HELLO':
      return state + 1;
    case 'WORLD':
      return state - 1;
    default:
      return state;
  }
}

const MyReducer1 = () => {

  const [count,setCount] = useReducer(setCountValue,0); //0은 초기값 count = 0

  return (
    <div>
      <h2>MyReducer1</h2>
      <p>현재 카운트 값 : {count}</p>
      <button type="button" onClick={e => setCount('HELLO')}>UP</button>
      <button type="button" onClick={e => setCount('WORLD')}>DOWN</button>
    </div>
  );
};

export default MyReducer1;