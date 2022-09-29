import React from "react";
import {useParams} from "react-router";
import Data from '../components/data';

function Article() {
    const {id} = useParams();
    const articleData = Data.find((article) => article.id === id);
    return (
        <main className="article">
            <header 
            className="article--header" 
            style={{
                backgroundImage:"", 
                backgroundSize:"cover",
                }}
            >
                <div className="article--header--wrapper">
                    <h1>{articleData.title}</h1>
                    <p className="title-date">Tuesday, August 22, 2022</p>
                    <p className="title-blurb">Note that this is an Article Blurb. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </header>
            <section className="article--content">
                <div className="sectioncontent">
                    <p className="section-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h2>Header Two Inserted</h2>
                    <p className="section-paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Header Three Inserted</h3>
                    <p className="section-paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
        </main>
    );
 }
 
export default Article;