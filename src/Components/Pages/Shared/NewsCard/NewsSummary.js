import React from 'react';

const NewsSummary = ({news}) => {
    return (
        <div>
            <h1> {news.length}</h1>
        </div>
    );
};

export default NewsSummary;