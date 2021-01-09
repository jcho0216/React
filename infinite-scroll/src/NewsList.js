import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const HeaderBlock = styled.header`
    display: flex;
    justify-content: center;
    background-color: #eaeaea;
    height: 80px;
    width: 768px;
    padding: 0;
    position: fixed;
    top: 0px;
    left: 568px;
    z-index: 99;
`;

const NewsListBlock = styled.div`
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 30px;
    width: 768px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    top: 80px;
    @media screen and (max-width: 780px) {
        width: 100px;
        padding-left: 5px;
        padding-right: 5px;
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
                fetchMoreData();
            }
        }
        
        window.addEventListener("scroll", infiniteScroll);
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get (
                    'http://newsapi.org/v2/top-headlines?country=au&apiKey=ae20b3bd05724e9a8123bcbb6889a569'
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
            'http://newsapi.org/v2/top-headlines?country=au&apiKey=ae20b3bd05724e9a8123bcbb6889a569'
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
        <HeaderBlock>
            <header>
                <h2>News</h2>
            </header>
        </HeaderBlock>
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
        </>
    );
};

export default NewsList;