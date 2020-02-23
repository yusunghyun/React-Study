import React from 'react';
import {connect} from 'react-redux'
import ReduxCounter from '../components/ReduxCounter'
import * as counterModule from '../modules/Counter'
import { bindActionCreators } from 'redux';



const CounterContainer = ({counterModule,action}) => {
  const {number,color} = counterModule;
  const {plusAsync,minusAsync} = action;

  return (
    <ReduxCounter
      number={number}
      color={color}
      onPlusClick={plusAsync}
      onMinusClick={minusAsync}
    />
      

  );
};
export default connect(
  state=>state,
  dispatch => ({
    action:bindActionCreators(counterModule,dispatch)
  })
)(CounterContainer)
// const getState = state => ({
//   number: state.counterModule.number,
//   color: state.counterModule.color
// })
// const actions = {plusAction, minusAction}
// const dispatch = connect(getState,actions)


// export default dispatch(CounterContainer);
