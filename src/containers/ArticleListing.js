import React from 'react';

function ArticleListing() {
    const articlesTitle = `Articles`
    return (
        <div className="PageWrapper">
            <h1 className="HeaderOneStyle">{articlesTitle}</h1> 
        </div> // react lets you put html in return, brackets to use js
    );
}

export default ArticleListing;