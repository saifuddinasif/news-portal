import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {


    const news = useLoaderData()

    return (
        <div>
            <h1>Category  : {news.length}</h1>
        </div>
    );
};

export default Category;