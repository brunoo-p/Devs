import styled from 'styled-components';
import { BsBoxArrowInLeft } from 'react-icons/bs';

export const Container = styled.div`
    width: 100%;
    height: 90%;
    object-fit: contain;
    align-items: center;
    justify-content: center;
    animation: show 0.3s ease-in;

    @keyframes show {
        from { transform: scale(.9)}
        to   { transform: scale(1) }
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10%;
    background: rgba(6,6,6,.6);
    border-radius: 5px;

    pointer-events: none;
`;

export const ReturnIcon = styled(BsBoxArrowInLeft)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    position: absolute;
    top: 5%;

    color: #ff7272;
    cursor: pointer;
    border-radius: 50px;
`;