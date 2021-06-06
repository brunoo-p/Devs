import React, { useState } from 'react';
import { Container, Content, ArrowDown, ArrowUp} from './styles';

import PropTypes from 'prop-types';

export default function DetailDev({person}) {

    const [ showDetails, setShowDetails ] = useState(false);
    
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    }


    return (
        <Container style={{height: showDetails ? '75%' : '35%', }} data-testid='detailsDevContainer'>
            <Content>
            <div className="border" > 
                { !showDetails ? <ArrowUp onClick={handleShowDetails} /> : <ArrowDown onClick={handleShowDetails}/> }
            </div>
            

            <div className="personData" style={{filter: showDetails && 'none'}}>
                <h1> {person.name} </h1>
                <p > {person.age} anos </p>
            </div>
            

            <div className="hobby" style={{filter: showDetails && 'none'}}>
                <label htmlFor="hobby"> Hobby </label>
                <p> {person.hobby} </p>
            </div>
            
            </Content>
        </Container>
    )
}

DetailDev.propTypes = {
    person: PropTypes.object
}
