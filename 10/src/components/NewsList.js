import React from 'react';
import NewsItem from './NewsItem'

const NewsList = ({ result, loading, error}) => {

  if(loading){
    return <h2 style={{color:'green'}}>Now Loading ...</h2>
  }
  if(error){
    return <h2 style={{color:'red'}}>{error}</h2>
  }

  return (
    <div>
      {result.map( (item,index) => (
        <NewsItem key={index} item={item}/>
      ))}
    </div>
  );
};

export default NewsList;