import React,{useState,useMemo, useRef, useCallback} from 'react';

const getAverage = numbers => {
  if(numbers.length === 0 ) return 0

  // let sum = 0;
  // for(let i = 0; i<numbers.length; i++){
  //   sum += numbers[i]
  // }
  const sum = numbers.reduce((a,v)=>a+v)

  return sum/numbers.length
}

const MyMemo = () => {

  const [myInputList, setMyInputList] = useState([]);
  const myAvg = useMemo(()=>getAverage(myInputList),[myInputList])
  const myNumberInputRef = useRef();

  const onButtonClick = useCallback( (e) => {
    const numberInput = myNumberInputRef.current; //25번줄input태그 찍힘.

    if(isNaN(numberInput.value)){
      alert('숫자만입력가능합니다');
      return false;
    }

    const nextList = myInputList.concat(parseInt(numberInput.value))
    setMyInputList(nextList)
    numberInput.value='';
    console.log(nextList)
  },[myInputList])

  return (
    <div>
      <h2>MyMemo</h2>
      <input type="text" ref={myNumberInputRef} placeholder="input number..."/>

      <button type='button' onClick={onButtonClick}>등록</button>
      <h4>평균{myAvg}</h4>
      <h3>입력사항</h3>
      <ul>
        {myInputList.map((v,i)=>(
          <li key={i}>{v}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default MyMemo;