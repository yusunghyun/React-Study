import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ReduxCounter from '../components/ReduxCounter'
import {plusAction,minusAction} from '../modules/Counter'
//리덕스와 소통하는 화면에 안보여지는 props 만 만들어서 갖다주는 컨테이너 컴포넌트

//CounterContainer 훅으로 짧게 해보자!

const CounterContainerHook = () => {
  
  const {number,color} = useSelector(state=>{//여기 state에 what 부분이 한방에 들어온댕!
    return {
      number: state.counterModule.number,
      color: state.counterModule.color
    }
  })

  const dispatch = useDispatch()

  return (
    <ReduxCounter
      number={number}
      color={color}
      onPlusClick={()=>dispatch(plusAction())}
      onMinusClick={()=>dispatch(minusAction())}/>
  );
};

//메모 최적화.
export default React.memo(CounterContainerHook);