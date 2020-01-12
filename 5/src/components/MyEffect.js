import React,{useEffect, useState} from 'react';

const MyEffect = () => {

  const [mySize, setMySize] = useState(320);

  useEffect( () => { // 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행.(아래꺼보다 빠름) ([]이안에 뭐 넣으면 그거 바뀔때마다 실행)
    console.log('1')
  },[])
  useEffect( () => { // 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행. + props,state값이 변경될 때마다 매번.
    console.log('2')
  })
  useEffect( () => { // state값이 변경되어 다시 랜더링되거나(위에꺼보다 빠름) +  화면 이동등 이유로 이 컴포넌트가 사라질 때 실행.
    return () => {
      console.log('3')
    };
  })
  useEffect( () => { // 최초실행 + 특정state변동시 실행 (제일 느림.)
    console.log('4')
  },[mySize])

  return (
    <div>
      <h2>MyEffect</h2>
      <div>
        <input
          type='range'
          min='40'
          max='640'
          value={mySize}
          step='40'
          onChange={ e => {
            setMySize(e.currentTarget.value);
          }}
        />
      </div>
      <img alt="hello react" width={mySize} src="http://placehold.it/640?text=HelloReact"/>
    </div>
  );
};

export default MyEffect;