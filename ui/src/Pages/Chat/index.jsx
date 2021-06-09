import React from 'react';
import Lottie from 'react-lottie';
import development from '../../Assets/Lottie/development.json';
import { useHistory } from 'react-router';

import { Container, Content, ReturnIcon } from './styles'
import { ScreenModel } from '../../Components';

export default function Chat() {

    let history = useHistory();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: development,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleReturn = () => {
        history.replace("/developers");
    }

    return (
        <ScreenModel>
            <Container> 
                <ReturnIcon onClick={handleReturn}/>
                <Content>
                    <Lottie options={defaultOptions} title="building"/>
                </Content>
            </Container>
        </ScreenModel>
    )
}
