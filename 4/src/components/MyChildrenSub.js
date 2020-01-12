import React from 'react';
import PropTypes from 'prop-types'


const MyChildrenSub = ( {width, height, children} ) => {

  const myStyle = {
    width: width+'px',
    height:height+'px',
    border:'5px solid #d5d5d5',
    margin: '10px'
  }

  return (
    <div>
      <h3>MyChildrenSub</h3>
      <p style={myStyle}>{children}</p>
    </div>
  );
};

MyChildrenSub.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.string,
};

MyChildrenSub.defaultProps = { //기본값?
  width:300,
  height:100,
  children:'내용이없습니다.'
}

export default MyChildrenSub;