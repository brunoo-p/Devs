import styled from 'styled-components';
import { AiTwotoneSetting } from 'react-icons/ai';
import { IoMdChatboxes } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5'

export const Container = styled.div`
    width: 100%;
    height: 10vh;
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
    padding: 8px 5px;
    
`;

export const PersonIcon = styled(AiTwotoneSetting)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    cursor: pointer;
    
    border-radius: 50px;
    fill: #718093;
`;

export const LogoIcon = styled(IoLogoFirebase)`
    width: 60px;
    height: 45px;
    object-fit: contain;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    fill: #ff7272;
    filter: drop-shadow(0 0 0.1rem yellow);
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
`;
