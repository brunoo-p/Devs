import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Container = styled.div`
    width: 100%;
    position: absolute;
    bottom: -5%;
    border-radius: 10px;
    background: white;
    transition: 0.5s ease-in
    color: #34495e;

`;

export const Content = styled.div`
    margin: 15px 20px;
    font-weight: 700;
    display: flex;
    height: 90%;
    word-spacing: 1px;
    flex-direction: column;

    .border{
        width: 40%;        
        background: lightgrey;
        transform: translateX(70%) translateY(-20%);
        height: 10px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .personData{
        padding: 10px 5px;
        transition: .5s ease-in;
        filter: blur(2px);
        h1{
            font-size: 40px;
        }
        p{
            font-size: 24px;
            margin-top: 5px;
            color: #535c68;
            opacity: 0.7;
        }
    }

    .hobby{
        padding: 15px 5px;
        transition: .6s ease-in;
        filter: blur(2px);

        label{
            font-size: 22px;
            text-decoration: underline;
            color: #535c68;
            opacity: 0.6;
        }
        p{
            font-size: 24px;
            margin: 10px 5px;
        }
    }



`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    animation: down 1.5s infinite;
    color: #1aaa;

    @keyframes down {
        0%, 100% {transform: translateY(0px) }
        50%   {transform: translateY(8px) }
    }
`;

export const ArrowUp = styled(MdKeyboardArrowUp)`
    width: 40px;
    height: 40px;
    display: flex;
    cursor: pointer;
    animation: down 1.5s infinite;

    @keyframes down {
        0%, 100% {transform: translateY(0px) }
        50%   {transform: translateY(-8px) }
    }
`;


