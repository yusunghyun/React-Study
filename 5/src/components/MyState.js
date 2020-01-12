import React,{useState} from 'react';

const MyState = () => {

  //useState사용
  const [myName,setMyName] = useState('');
  const [myPoint, setMyPoint] = useState(50);

  const handleMyPointChange = e =>{
    setMyPoint(e.currentTarget.value)
  }

  return (
    <div>
      <h2>MyState</h2>
      <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>\
      <hr/>
      <div>
        <label htmlFor='myNameInput'>이름: </label>
        <input
          id='myNameInput'
          type="text"
          value={myName}
          onChange={ e => { // e 와 e.currentTarget 은 자매 !
            setMyName(e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <label htmlFor='myPointInput'>점수: </label>
        <input
          id='myPointInput'
          type='range'
          min='0'
          max='100'
          value={myPoint}
          step='1'
          onChange={handleMyPointChange}
        />
      </div>
    </div>
  );
};

export default MyState;