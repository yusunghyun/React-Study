import React from 'react';
import {connect} from 'react-redux'
import ReduxCounter from '../components/ReduxCounter'
import {plusAction,minusAction} from '../modules/Counter'



const CounterContainer = what => {
  const {number,color,plusAction,minusAction} = what;

  return (
    <ReduxCounter
      number={number}
      color={color}
      onPlusClick={plusAction}
      onMinusClick={minusAction}
    />
      

  );
};

// const getState = state => ({
//   number: state.counterModule.number,
//   color: state.counterModule.color
// })
// const actions = {plusAction, minusAction}
// const dispatch = connect(getState,actions)


// export default dispatch(CounterContainer);

export default connect(state => ({
  number: state.counterModule.number,
  color: state.counterModule.color
}),{plusAction, minusAction})(CounterContainer);