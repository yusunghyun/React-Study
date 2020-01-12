import React from 'react';
import PropTypes from 'prop-types' //props의 데이터타입을 지정할 때 사용, 사용방법은 .propTypes
const MyPropTypesSub = (props) => {

  const {name,hobby,age} = props
  
  return (
    <div>
      <h3>MyPropsTypesSub</h3>
      <p>
        제 이름은 <b>{name}</b>이고 나이는 <b>{age}</b>입니다.
      </p>
      <p>
        {hobby && (<span>제 취미는 {hobby}입니다.</span>)}
      </p>
    </div>
  );
};

MyPropTypesSub.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobby: PropTypes.string.isRequired, // 필수
}

export default MyPropTypesSub;