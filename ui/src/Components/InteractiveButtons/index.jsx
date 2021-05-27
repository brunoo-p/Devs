import React from 'react';
import { Container, Content, LikeIcon, SuperCode, DeslikeIcon } from './styles';

export default function InteractiveButtons() {
    return (
        <Container>
            <Content>

                <DeslikeIcon/>
                <SuperCode/>
                <LikeIcon/>
                
            </Content>
        </Container>
    )
}
