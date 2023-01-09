import React from 'react';
import Article from '../components/Article';
import Meta from '../components/Meta';

const index = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h1>Blog</h1>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id}/>
        ))}
      </div>
    </div>
  );
};

export default index;

// Executer le code coté serveur
export const getStaticProps = async() => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await response.json();

  console.log(articles);

  return {
    props : {
      articles,
    },
  };

};