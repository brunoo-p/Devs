import React from 'react';
import TinderCard from 'react-tinder-card';
import DetailsDev from '../DetailsDev';
import { EncodedToBlob } from '../../Services/EncodedToBlob';

import avatarDefault from '../../Assets/avatarDefault.png'
import searching from '../../Assets/Lottie/searching.json';
import Lottie from 'react-lottie';

import { Container, Content, CardImage } from './styles';

import PropTypes from 'prop-types';

function ScreenApp({persons}) {

    const alreadyRemoved = [];
    let db = [] ; db = persons;


    const swiped = (personToRemove) => {

        alreadyRemoved.push(personToRemove);

        db = persons.filter(person => !alreadyRemoved.includes(person.id));
        console.log("db", db);
    };


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
            <Content data-testid="screenAppContent">
                { db?.length === 0
                    ?
                    <div className="lottie">

                        <h1 id="message"> Não se preocupe, já estamos procurando mais pessoas </h1>
                        <Lottie options={defaultOptions} title="searching"/>
                    
                    </div>

                    :
                    
                    db?.map((person, index) => (
                        <React.Fragment key={index} >
                            <TinderCard  className='swipe' key={index} preventSwipe={['up', 'down']} onSwipe={() => swiped(person.id)}>
                                
                                <div className="card">

                                    <CardImage src={person.imageProfile !== null ? EncodedToBlob(person.imageProfile) : avatarDefault } />

                                </div>
                                <DetailsDev person={person} />
                            
                            </TinderCard>
                        </React.Fragment>
                    ))
                }
            </Content>
        </Container>
    )
}

ScreenApp.propTypes = {
    persons: PropTypes.array
}

export default ScreenApp