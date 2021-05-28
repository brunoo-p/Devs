import React from 'react';
import TinderCard from 'react-tinder-card';
import DetailsDev from '../DetailsDev';
import foto from '../../Assets/foto.jpg'
import searching from '../../Assets/Lottie/searching.json';
import Lottie from 'react-lottie';

import { Container, Content, CardImage, CardName } from './styles';

export default function ScreenApp({persons}) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: searching,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container>
            <Content>
                { persons?.length <= 0
                    ?
                    <div className="lottie" >

                        <h1>Não se preocupe, já estamos procurando mais pessoas</h1>
                        <Lottie options={defaultOptions} title="searching"/>
                    
                    </div>
                    :
                    persons?.map((person, index) => (
                        <React.Fragment key={index}>
                            <TinderCard className='swipe' key={index}>
                                
                                <div className="card">

                                    <CardImage src={foto}>
                                        <CardName>{person.name}</CardName>
                                    </CardImage>

                                </div>
                            
                            <DetailsDev person={person}/>
                            </TinderCard>
                        </React.Fragment>
                    ))
                }
            </Content>
        </Container>
    )
}
