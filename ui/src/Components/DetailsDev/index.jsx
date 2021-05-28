import React, { useState } from 'react';
import { Container, Content, ArrowDown} from './styles';

export default function DetailDev({person}) {

    const [ showDetails, setShowDetails ] = useState(false);
    return (
        <Container style={{height: showDetails ? '70%' : '5%', opacity: showDetails && 1}}  moved={showDetails ? '-70%' : '10%'}>
            <Content>
            <div className="border" onClick={() => setShowDetails(!showDetails)}> <ArrowDown/> </div>
            
            <div className="personData">
                <h1> {person.name} </h1>
                <p > {person.age} anos </p>
            </div>

            <div className="hobby">
                <label > Hobby </label>
                <p> {person.hobby} </p>
            </div>
            
            </Content>
        </Container>
    )
}
