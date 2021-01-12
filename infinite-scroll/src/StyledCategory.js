import styled, { css } from 'styled-components';

const StyledCategory = styled.div`
    font-size: 1.125rem;
    cursor:pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &: hover {
        color: purple;
    }
    ${  props => 
        props.active && css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
    `}

    & + & {
        margin-left: 1rem;
    }
`;

export default StyledCategory;


