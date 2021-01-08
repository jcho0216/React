import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 780px) {
        width: 100px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;


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
                fetchData();
            }
        }
        SetFetching(true);
        window.addEventListener("scroll", infiniteScroll);
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get (
                    'http://newsapi.org/v2/top-headlines?country=kr&apiKey=ae20b3bd05724e9a8123bcbb6889a569',
                );
                setArticles(response.data.articles);
            setLoading(false);
        };
        fetchData();
    }, []);
    
    
    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>;
    }

    if(!articles){
        return null;
    }

    return ( 
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;