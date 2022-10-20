import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {

    const allnews = useLoaderData();

    return (
        <div>
           <h1>Total News:{allnews.length}</h1>

           {
              allnews.map(news => <NewsCard
              
              key={news._id}

              news={news}
              
              >


              </NewsCard>)

           }
        </div>
    );
};

export default Home;