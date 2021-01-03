import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Api(query, pageNumber){
    useEffect(()=> {
        axios({
            method: 'GET',
            url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-03&sortBy=publishedAt&apiKey=ae20b3bd05724e9a8123bcbb6889a569',
            params: { q: query, page: pageNumber }
        }).then(res => {
            console.log(res.data);
        })
    }, [query, pageNumber])
    return null
}