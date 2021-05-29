import styled from 'styled-components';
import { IoLogoFirebase } from 'react-icons/io5';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import foto from '../../Assets/foto.jpg';

export const Content = styled.div`
    display: flex;
    width: 99%;
    height: 100%;
    flex-direction: column;
    
    .card{
        display: flex;
        width: 93%;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid grey;
        padding: 20px 11px;
        flex-direction: column;
        

        label{
            margin: 15px 15px 0px 15px;
            font-size: 18px;
            font-weight: 700;
        }
    }

    .card-hobby{
        margin-top: 10px;
        
        textarea{
            width: 100%;
            height: 20vh;
            padding: 5px;
            background: #f5f5f5;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            //pointer-events: none;
        }
    }

`;

export const LogoIcon = styled(IoLogoFirebase)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    fill: #ff7272;
    filter: drop-shadow(0 0 0.1rem yellow);
`;

export const ReturnIcon = styled(BsBoxArrowInLeft)`
    width: 60px;
    height: 40px;
    object-fit: contain;
    padding: 5px;
    
    cursor: pointer;
    border-radius: 50px;
    //fill: #ff7272;
    //filter: drop-shadow(0 0 0.1rem yellow);
`;

export const ImageProfile = styled.div`

    width: 100%;
    height: 20vh;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;

`;