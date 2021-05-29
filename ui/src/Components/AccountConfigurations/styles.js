import styled from 'styled-components';
import { CgToggleSquare, CgToggleSquareOff } from 'react-icons/cg'

export const Container = styled.div`
    display: flex;
    top: 10%;
    width: 90%;
    height: 20%;
    border-radius: 10px;
    opacity: ${(props) => props.opacity};
    position: fixed;
    z-index: 1;
    transition: .5s ease-in;
    transform: translateX(${(props) => props.transform});
    background: #f5f5f5;

    @media (min-width: 700px){
        width: 29%;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 95%;
    margin: 5px 0px;
    flex-direction: column;
    backdrop-filter: blur(4px);
    transition: .5s ease-in;

    .card{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
        padding: 5px 10px;

        label{
            margin-left: 5px;
            font-size: 21px;
            font-weight: 700;
            color: #535c68;
        }
    }
    .profile{
        margin-top: 5%;
        cursor: pointer;
        label{
            cursor: pointer;
        }
    }

    .inputFilter{
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .5s ease-in;

        input{
            padding: 5px;
            border: none;
            border-bottom: 2px solid gray;
            font-size: 20px;
            font-weight: 700;
            color: #34495e;
            border-radius: 5px;
            text-align: center;

            :focus{
                outline-style: none;
                border-bottom: 2px solid #1aaa;
            }
        }
    }
    
`;

export const ToggleOn = styled(CgToggleSquare)`
    width: 43px;
    height: 43px;
    cursor: pointer;
`;

export const ToggleOff = styled(CgToggleSquareOff)`
    width: 43px;
    height: 43px;
    color: #1aac;
    cursor: pointer;
`;