import React from 'react';
import {useSelector, useDispatch}  from 'react-redux'
import NewsList from '../components/NewsList'
import * as newsModule from '../modules/News'

const NewsContainer = (props) => {

  const {result,loading,error} = useSelector(state=>{ //상태 꺼네오기
    return {
      ...state.newsModule
    }
  })

  const dispatch = useDispatch()//국룰

  React.useEffect(()=>{ //props.category가 변화 할 때만 사용.
    dispatch(newsModule.newsListAsync(props.category))
  },[props.category]);

  return (
    <NewsList result={result} loading={loading} error={error} />
  );
};

export default React.memo(NewsContainer);