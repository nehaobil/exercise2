import React, { useMemo } from "react";

function ArticleCard( {imageAlt, imageSrc, title, date, blurb, id}  ) {
    const articleDate = useMemo(() => {
        if(!date) return "";
        const parsedDate=new Date(date);
        return parsedDate.toDateString();
    }, [date]);
    
    return (
        <div className="articleCard">
            <div className="articleImage">
                <img src={imageSrc} alt={imageAlt}/>
            </div> 
            <div className="articleText">
                <h2>{title}</h2>
                <p className="date">{articleDate}</p>
                <p className="blurb">{blurb}</p>
                <p className="link">
                    <a href={`/article/${id}`}>Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;