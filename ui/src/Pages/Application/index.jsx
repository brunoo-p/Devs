import React from 'react';
import { Header, ScreenApp, InteractiveButtons } from '../../Components';

import { Container, Content } from './styles';

export default function Application() {
    return (
        <Container>

            <Content>
                <Header/>
                <ScreenApp/>
                <InteractiveButtons/>
            </Content>
            
        </Container>
    )
}
