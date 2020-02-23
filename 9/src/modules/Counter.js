import {createAction,handleActions} from 'redux-actions'

//액션 정의.

// '파일이름/상황이름'
const PLUS = 'Counter/PLUS'
const MINUS = 'Counter/MINUS'

//액션생성함수인데 createAction으로 함수 정의 자동화
export const plusAction = createAction(PLUS)
export const minusAction = createAction(MINUS)

const initialState = {
  number: 0,
  color: '#000',
}

const myCountReducer = {//리듀서는 위에 initialState와 같은 구조를 갖고 리턴을 해야한다!

  //js문법 [] 하면 포인터마냥 끌고옴
  [PLUS]: function (state,action) {
    const numberValue = state.number + 1;
    let colorValue = '#000';

    if(numberValue>0) colorValue='#2f77eb'
    else if(numberValue<0) colorValue='#f60'

    return { number: numberValue, color: colorValue}
  },
  [MINUS]: function (state,action) {
    const numberValue = state.number - 1;
    let colorValue = '#000';

    if(numberValue>0) colorValue='#2f77eb'
    else if(numberValue<0) colorValue='#f60'

    return { number: numberValue, color: colorValue}
  }
}

const myCountModule = handleActions(myCountReducer,initialState); //
export default myCountModule;


export const plusAsync = () => dispatch => {
  setTimeout(()=>{
    dispatch(plusAction());
  },1000)
}

export const minusAsync = () => dispatch => {
  setTimeout(()=>{
    dispatch(minusAction());
  },1000)
}