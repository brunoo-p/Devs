import styled from 'styled-components';
import { FcLike } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';

export const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;

    background: rgba(2,2,2,.15);
`;

export const Content = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #f5f5f5;
    border-radius: 10px;

`;

export const LikeIcon = styled(FcLike)`
    width: 45px;
    height: 45px;
    object-fit: contain;
    padding: 10px;
    transform: translateY(8%);

    cursor: pointer;
    border-radius: 50px;
    background: #ddd;
`;

export const SuperCode = styled(AiFillCode)`
    width: 55px;
    height: 55px;
    object-fit: contain;
    padding: 10px;
    transform: translateY(-20%);
    
    cursor: pointer;
    border-radius: 50px;
    background: #ddd;

`; 

export const DeslikeIcon = styled(FaPlus)`
    width: 45px;
    height: 45px;
    object-fit: contain;
    padding: 10px;
    transform: translateY(10%) rotate(45deg);
    cursor: pointer;

    border-radius: 50px;
    background: #ddd;
    fill: #ff4262;
`;
