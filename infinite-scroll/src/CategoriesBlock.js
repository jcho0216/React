import styled from 'styled-components';

const CategoriesBlock = styled.div`
    position: sticky;
    top: 0px;
    background-color: white;
    border-bottom: solid 0.5px grey;
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    z-index: 99;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

export default CategoriesBlock;