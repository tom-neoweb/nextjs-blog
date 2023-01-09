import Link from 'next/link';
import React from 'react';

const article = ({ article }) => {
    return (
        <div className="article-page">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <Link href="/">Revenir à l'accueil</Link>
        </div>
    );
};

export default article;

// getStaticProps fonction côté serveur, qui nous permet
// d'aller chercher toutes les données qu'on veut, avant de générer les pages côté front (navigateur)

export const getStaticProps = async(context) => {
    console.log(context.params.id);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
    const article = await response.json();

    return {
        props : {
            article : article
        }
    }
}

export const getStaticPaths = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await response.json();

    // Préparer les id dans un object Path {id: 1, id: 2}
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params : {id : id.toString() }}));

    return {
        paths,
        fallback : false,
    }
}