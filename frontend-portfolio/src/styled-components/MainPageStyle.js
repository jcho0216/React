import styled from 'styled-components';

const MainPageStyle = styled.div` 
    .container {
    visibility: hidden;
    overflow: hidden;      
    background-color: black;
    width: 100%;
    height: 90vh;
    .texts-container {
        position: absolute;
        top: 35%;
        left: 10%;
        color: white;
        .main-text {
            margin: 0;
            font-size: 120px;
        }

        .texts-container-inner {
            height: 55px;
            overflow: hidden;
                .sub-text {
                    font-size: 40px;
                    opacity: 0.7;
                    margin: 0;
                }
            img {
                margin: 30px 0;
            }
            .greeting-text-container{
                .greeting-text {
                    color: white;
                    font-size: 40px;
                    opacity: 0.8;
                    margin: 0;
                }
            }
        }       
    }

    .images {
        .images-aus {
            .aus {
                width: 669px;
                width: 501px;
                position: absolute;
                left: 70%;
                top: 30px;
                border-radius: 20px;
                // overflow: hidden;
            }
        }

        .images-me {
            
            .me {
                width: 400px;
                height: 533.33px;
                position: absolute;
                left: 65%;
                top: 220px;
                border-radius: 20px;
                
            }
        }

    }
}
`;

export default MainPageStyle;