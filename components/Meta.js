import React from 'react';
import Head from 'next/head';

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>
    );
};

Meta.defaultProps = {
    title       :   "Le blog qui blog !",
    description :   "Je ne sais pas quoi mettre."
}

export default Meta;