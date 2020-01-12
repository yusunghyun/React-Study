import React from 'react';
// 부모 컴포넌트의 name='~' , age='~' 이런게 다 props로 넘어옴 값은 부모에서 결정하네.
const MyPropsSub = (props) => {
  return (
    <div>
      <h3>MyPropsSub</h3>
      <p>
        제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.
      </p>
    </div>
  );
};

MyPropsSub.defaultProps = {//속성값이 전달되지 않은 경우를 대비. JSON으로 정의가능.
  name:'unknown',
  age:0,
}

export default MyPropsSub;