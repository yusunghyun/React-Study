import React,{useRef} from 'react';

const MyRef = () => {

  const myInputRef = useRef();
  const myLabelRef = useRef();
  const myName = useRef('유성현');

  return (
    <div>
      <h2 ref={myLabelRef}></h2>
      <h2 >{myName.current}</h2>
      <input type="text" ref={myInputRef}/>
      <button onClick={e=>{
        myLabelRef.current.innerHTML = myInputRef.current.value;
        myName.current = myInputRef.current.value;
        myInputRef.current.value="";
      }}>클릭</button>
    </div>
  );
};

export default MyRef;