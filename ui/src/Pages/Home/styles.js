import styled from 'styled-components';
import { IoLogoFirebase } from 'react-icons/io5';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: #f5f5f6;
    position: relative;
    top: 25%;
    justify-content: center;

`;

export const Form = styled.form`
    width: 90%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    
    border-radius: 10px;
    background: rgba(30,36,49, .4);
    box-shadow(0px 18px 53px 0px rgb(2,2,2));

    input{
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        font-weight: 700;
        text-align: center;

        :focus{
            outline: none;
        }
    }
    p{
        display: flex;
        font-weight: 700;
        align-items: center;
    }

    .gender{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    
        label{
            padding: 15px;
            margin: 2px 5px;

            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            background: #f5f5f5;

            :focus{
                background: #1aaa;
            }
        }
    }
`;

export const LogoIcon = styled(IoLogoFirebase)`
    width: 60px;
    height: 45px;
    object-fit: contain;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    fill: #ff7272;
    filter: drop-shadow(0 0 0.3px yellow);
`;

export const Code = styled(BsCode)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin: 0 5px;
    color: #2d3436;
    opacity: .6;
    

`;

export const CodeSlash = styled(BsCodeSlash)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin: 0 5px;
    color: #2d3436;
    opacity: .6;
`;

