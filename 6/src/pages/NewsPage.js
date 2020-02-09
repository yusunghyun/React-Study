import React from 'react';
import Category from '../components/Category';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
  //probs에서 probs.match 꺼네오구 match에서 match.params꺼넨격
  const {params} = match
  console.log(match);
  console.log(params);

  return (
    <div>
      <Category/>
      <hr />
      <NewsList category={params.category}/>
    </div>
  );
};

export default NewsPage;