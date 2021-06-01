import styled from 'styled-components';
import { IoLogoFirebase } from 'react-icons/io5';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

export const Content = styled.div`
    width: 90%;
    height: 80%;
    display: flex;
    position: relative;
    top: 10%;
    flex-direction: column;

    border-radius: 10px;
    background: rgba(30,36,49, .9);
    justify-content: center;
    align-items: center;
    animation: show .5s ease-in-out;

    @keyframes show{
        from {transform: scale(.85)}
        to { transform: scale(1)}
    }

    @media(min-width: 700px)
    {
        transition: .5s ease-in;
        height: 90%;
        transform: translateY(-5%);
    }

    .start{
        position: absolute;
        display: flex;
        top: 5%;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50%;

        button{
            z-index: 1;
            bottom: 0;
            padding: 15px;
            margin-top: 5px;
            position: absolute;
            
            border-radius: 10px;
            font-size: 20px;
            font-weight: 700;
            // background: transparent;
            background: linear-gradient(5deg,transparent 64.17%, #1aaa);
            color: #1aa;
            border: 2px solid #1aaa;
            transition: .5s ease-out;

            cursor: pointer;

            filter: drop-shadow(3px 3px 0px 7px white);

            :nth-child(3){
                transform: translateY(130%);
                background: linear-gradient(45deg,transparent 47.93%, #1aaa);
                color: #dfe4ea;
                border: 2px solid #1aaa;

                
            }
            :hover{
                background: linear-gradient(125deg, #1aaa, white);
                color: #262626;
            }
        }
    }
`;

export const Form = styled.form`
    width: 90%;
    height: 95%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    animation: align .6s forwards ease-in;

    @keyframes align {
        from {transform: translateY(100%); opacity: 0}
        to   {transform: translateY(0%); opacity: 1}
    }

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

        :hover{
            animation: moveInput 0.3s ease-in;
            tansition: 0.5s ease-out;

            @keyframes moveInput {
                0%, 100% {transform: translateY(0px);}
                50%  {transform: translateY(4px)}
            }
        }
    }

    .card{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //display: flex;
        label{
            color: #dfe4ea;
            opacity: .7;
        }
    }
    p{
        display: flex;
        font-weight: 700;
        align-items: center;
    }

    .wrap-gender{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        align-items: top;

        :first-child{
            label{

                transform: translateY(-2px);
            }
        }
        span{
            width: 100%;
            margin-bottom: 5px;
            font-size: 15px;
        }
    }
    .gender{
        display: flex;
        width: 100%;
        margin-top: -15px;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        margin 0 2px;
        transform: translateY(5%);
        
        label{
            display: flex;
            padding: 15px;
            margin: 2px 5px;
            width: 50%;
            align-items: center;
            justify-content: center;

            border: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 700;
        
            cursor: pointer;

            transition: 0.2s ease-in;
            
            :nth-child(2){
                background: linear-gradient(85deg, #778beb, white);
            }
            :nth-child(3){

                background: linear-gradient(5deg, #f3a683, white);
            }
            :nth-child(4){
                background: linear-gradient(90deg, #cf6a87, #778beb, #f3a683, #f7d794 );
            }

            :hover{
                background: #1aaa;
                opacity: .7;
                color: #f5f5f5;
            }
            :focus{
                background: #1aaa;
                opacity: .7;
                color: #f5f5f5;
            }
        }
    }
`;

export const LogoIcon = styled(IoLogoFirebase)`
    width: 80px;
    height: 80px;
    object-fit: contain;
    position: absolute;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    fill: #ff7272;
    filter: drop-shadow(0 0 0.3px yellow);
`;

export const UserIcon = styled(FaRegUserCircle)`
    width: 50px;
    height: 50px;
    color: #dfe4ea;
    opacity: .7;

`;


export const Code = styled(BsCode)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin: 0 5px;
    position: relative;
    color: #dfe4ea;
    opacity: .7
    
`;

export const CodeSlash = styled(BsCodeSlash)`
    width: 30px;
    height: 30px;
    object-fit: contain;
    position: relative;
    margin: 0 5px;
    color: #dfe4ea;

`;

