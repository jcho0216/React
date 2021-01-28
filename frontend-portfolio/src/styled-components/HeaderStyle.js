import styled from 'styled-components';

const HeaderStyle = styled.header `
    height: 120px;
    width: 100%;

    .header-container {
        display: flex;
        .logo-image {
            width: 115px;
            height: 99.28px;
            margin-left: 190px;
            margin-top: 10px;
            cursor: pointer;
            &:hover {
                width: 116px;
                height: 100px;
            }
        }
        .nav-menus-container {
            width: 500px;
            display: flex;
            justify-content: space-around;
            position: relative;
            left: 55%;
            .nav-menus {
                margin : 50px 30px;
                font-size: 18px;
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
        
    }
    
`;


export default HeaderStyle;