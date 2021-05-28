import styled from 'styled-components';

export const Container = styled.div`
    width: 97%;
    height: 83vh;
    position: relative;
    justify-content: center;
    display: flex;
    background: #f5f5f5;
    border-radius: 10px;
    font-family: 'Roboto', sans serif;
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
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
        cursor: pointer;
    }

    .swipe{
        position: absolute;
        width: 100%;
    }

`;

export const CardImage = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    border-radius: 12px;
    margin-top: 5%;

    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    box-shadow(0px 18px 53px 0px rgba(2,2,2));
`;

export const CardName = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0 0 60px 5px;
    
    padding: 10px;
    font-size: 33px;
    font-weight: 700;
    
    color: white;

`;