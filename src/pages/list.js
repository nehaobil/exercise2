import React from "react";
import ArticleCard from "../components/ArticleCard";
import Article from "./article";
import Data from "../components/data";

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            {Data.map((article, i) => (
                    <ArticleCard
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title={article.title}
                    id={article.id}
                    />
                )
            )}
        </main>
    );
}

export default List;