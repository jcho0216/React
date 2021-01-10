import styled from 'styled-components';
import React from 'react';

const NewsItemBlock = styled.div`
    display: flex;
    border-bottom: solid #eaeaea 3px;
    padding: 15px;
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2 {
            margin: 0;
        }
        a {
            color: black;
        }
    }

    p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }

}

& + & {
    margin-top: 3rem;
}
`;

export default NewsItemBlock;