import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import NewsListBlock from './NewsListBlock';
import axios from 'axios';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, SetFetching] = useState(false);

    useEffect(() => {
        const infiniteScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;
    
            if(scrollTop + clientHeight >= scrollHeight && fetching === false) {
                fetchMoreData();
            }
        }
        
        window.addEventListener("scroll", infiniteScroll);
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get (
                    'http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae20b3bd05724e9a8123bcbb6889a569'
                );
                
                setArticles(response.data.articles);
                console.log(response.data.articles); 

            setLoading(false);
        };
        fetchData();
    }, []);
    
    const fetchMoreData = async () => {
        SetFetching(true);
        const data = await axios.get (
            'http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae20b3bd05724e9a8123bcbb6889a569'
        );
        setArticles((prev) => prev.concat(data.data.articles));    
    }

    if(loading) {
        return <NewsListBlock><h1>LOADING...</h1></NewsListBlock>;
    }

    if(!articles){
        return null;
    }

    return ( 
        <>
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
        </>
    );
};

export default NewsList;