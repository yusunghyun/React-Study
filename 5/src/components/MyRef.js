import React,{useRef} from 'react';

const MyRef = () => {

  const myInputRef = useRef();
  const myLabelRef = useRef();

  return (
    <div>
      <h2 ref={myLabelRef}></h2>
      <input type="text" ref={myInputRef}/>
      <button onClick={e=>{
        myLabelRef.current.innerHTML = myInputRef.current.value
        myInputRef.current.value=""
      }}>클릭</button>
    </div>
  );
};

export default MyRef;