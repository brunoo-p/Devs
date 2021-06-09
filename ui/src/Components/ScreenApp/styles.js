import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    justify-content: center;
    display: flex;
    background: #f5f5f5;
    border-radius: 10px;
    font-family: 'Roboto', sans serif;
    overflow: hidden;
    transition: .5s ease-in;
`;

export const Content = styled.div`
    display: flex;
    width: 98%;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    backdrop-filter: blur(1px);
    
    .lottie{
        width: 100%;
        
        h1{
            font-family: 'Roboto';
            text-align: center;
            font-size: 30px; 
        }
    }
    
    .card{
        display: flex;
        width: 100%;
        height: 83vh;
        align-items: center;
        justify-content: center;
        cursor: grab;
    }

    .swipe{
        position: absolute;
        width: 100%;
    }

`;

export const CardImage = styled.div`
    width: 100%;
    display: flex;
    height: 55%;
    border-radius: 12px;
    margin-top: -45%;

    background: #a5b1c2;
    background-image: url(${(props) => props.src}) !important;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    filter: box-shadow(0px 18px 53px 0px rgb(2,2,2));

    transition: 1s ease-out;
    :hover{
        transform: scale(1.1) rotate(1deg);
    }
`;