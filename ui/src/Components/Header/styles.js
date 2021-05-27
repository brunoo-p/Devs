import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdChatboxes } from 'react-icons/io';
import {SiTinder} from 'react-icons/si';

export const Container = styled.div`
    width: 100%;
    height: 13vh;
    border-bottom: 1px solid #CCC;
    justify-content: center;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    
`;

export const PersonIcon = styled(BsFillPersonFill)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    cursor: pointer;
    
    border-radius: 50px;
    fill: #718093;
    transition: 0.3s ease-in;

    :hover{
        background: #Ccca;
    }
`;

export const LogoIcon = styled(SiTinder)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    fill: #ff7272;
`;

export const ChatIcon = styled(IoMdChatboxes)`
    width: 60px;
    height: 40px;
    padding: 5px;
    object-fit: contain;

    cursor: pointer;
    border-radius: 50px;
    fill: #718093;
    filter: drop-shadow(2px 2px 5px #CCC);
    
    transition: 0.3s ease-in;
    
    :hover{
        background: #Ccca;
    }
`;
