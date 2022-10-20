import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {


    const categorynews = useLoaderData()

    return (
        <div>
            <h1>Category  : {categorynews.length}</h1>

            {
                categorynews.map(news => <NewsCard
                
                    key={news._id}
                    news={news}

                ></NewsCard>)
            }
        </div>
    );
};

export default Category;