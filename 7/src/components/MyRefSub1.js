import React, { Component,createRef } from 'react';

class MyRefSub1 extends Component {
  state = {
    myMessage:'hello world'
  }
  myInputAreaRef = createRef();
  myCopyAreaRef = createRef();
  
  render() {
    let {myMessage} = this.state
    return (
      <div>
        <h3>MyRefSub1</h3>
        <input
          type='text'
          ref={ref=>this.myInputAreaRef = ref}
          placeholder='input any message'
          onChange={e=>{
            myMessage = e.target.value;
            this.setState({myMessage})
            //current라는 송성을 통해서 dom에 접근한다.
            this.myCopyAreaRef.current.value=myMessage;
          }}
        />
        <input
          type='text'
          placeholder='copy area'
          ref={ref=>this.myCopyAreaRef = ref}
          readOnly/>
        <p>{myMessage}</p>
        <button type='button'
          onClick={e=>{
            myMessage='';
            this.setState({myMessage})
            this.myInputAreaRef.current.value='';
            this.myCopyAreaRef.current.value='';
          }}>Clear</button>
      </div>
    );
  }
}

export default MyRefSub1;