const Logger = store => next => action => {
  console.log('이전 상태',store.getState())
  console.log('액션',action)
  next(action) // 다음 미들웨어or리듀서 에게 전달
  console.log('다음 상태',store.getState())

}
export default Logger

//여기서 미들웨어 만들고 제일 밖 index.js 에 {applyMiddleware}from redux 추가하고 import Logger from ././.Logger.js
// 밖index 스토어 두번째 인자에 composeWithDevTools()를 composeWithDevTools(applyMiddleware(Logger)) 로.