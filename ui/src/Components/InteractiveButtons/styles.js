import styled from 'styled-components';
import { FcLike } from 'react-icons/fc';
import { FaPlus } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';

export const Container = styled.div`
    width: 100%;
    max-width: 350px;
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    bottom: 0;
`;

export const Content = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;

`;

export const LikeIcon = styled(FcLike)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    background: #ddd;
`;

export const SuperCode = styled(AiFillCode)`
    width: 50px;
    height: 50px;
    object-fit: contain;
    padding: 10px;
    border: 1px solid #00a8ff;
    backdrop-filter: drop-shadow(14px, 14px, 20px #00a8af);
    transform: translateY(-20%);
    
    cursor: pointer;
    border-radius: 50px;
    background: #ddd;

`; 

export const DeslikeIcon = styled(FaPlus)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    padding: 10px;
    transform: rotate(45deg);
    cursor: pointer;

    border-radius: 50px;
    background: #ddd;
    fill: #ff4262;
`;
