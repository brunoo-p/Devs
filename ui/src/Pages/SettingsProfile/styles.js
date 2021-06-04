import styled from 'styled-components';
import { IoLogoFirebase } from 'react-icons/io5';
import { BsBoxArrowInLeft } from 'react-icons/bs';


export const Content = styled.div`
    display: flex;
    width: 95%;
    height: 88%;
    flex-direction: column;
    justify-content: space-around;
    background: #fff;
    border-radius: 10px;
    background: #353b48;
    color: #dfe4ea;

    input{
        width: 50%;
        padding: 8px;
        border-radius: 5px;
        border: none;
        font-size: 12px;
        font-weight: 700;
        text-align: center;

        :focus{
            outline: none;
        }
    }
    
    .card{
        display: flex;
        width: 93%;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-top: 5px;
        border-radius: 10px;
        flex-direction: column;
        

        label{
            margin: 10px 10px 0px 10px;
            font-size: 14px;
            font-weight: 700;

        }
    }

    .card-name{
        padding: 5px 10px;
        label{
            font-size: 18px;
        }
        input{
            font-size: 12px;
            color: whiteSmoke;
            background: transparent;
            border: 1px dashed white;
        }
    }

    .card-hobby{
        border-top: 1px solid lightgrey;
        justify-content: flex-start;

        label{
            opacity: .7;
        }
        
        textarea{
            width: 90%;
            height: 8vh;
            padding: 20px;
            
            margin-top: 5px;
            background: transparent;
            border-radius: 10px;

            color: #dfe4ea;
            font-weight: 700;
            font-size: 18px;

            :focus{
                outline: none;
            }
        }
    }

    .card-image{
        border-bottom: 1px solid lightgrey;
        label{
            padding: 8px;
            border: 1px solid lightgrey;
            border-radius: 20px;
            font-size: 14px;
        }
    }
    .saveSettings{
        padding: 5px;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        border-radius: 10px;
        background: transparent;

        input{
            width: 40%;
            margin-top: 10px;

            background: linear-gradient(32deg, rgba(30,36,49, .4), #2aaa );
            border: transparent;

            color: #dfe4ea;
            opacity: .6;
            font-size: 15px;
            font-weight: 700;

            cursor: pointer;
            :hover{
                opacity: 1;
            }
            :focus{
                outline: none;
            }
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
`;

export const ImageProfile = styled.div`

    width: 100%;
    height: 23vh;
    background-image: url(${(props) => props.src});
    background-position: center;
    //background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;

`;