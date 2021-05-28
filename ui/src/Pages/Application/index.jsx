import React, { useEffect, useState } from 'react';
import api from '../../Services/api'
import { Header, ScreenApp, InteractiveButtons } from '../../Components';

import { Container, Content } from './styles';

export default function Application() {

    const [ persons, setPersons ] = useState([]);
    let nada = "bruno";

    useEffect(() => {
        ( async () => {

            const request = await api.get(`/developers`);
            setTimeout(() => {

                setPersons(request.data);

            }, 1000);
        })();

        return () => {
            setPersons([]);
        }

    }, []);

    return (
        <Container>

            <Content>
                <Header/>
                <ScreenApp persons={persons}/>
                {persons.length > 0 && <InteractiveButtons/>}
            </Content>
            
        </Container>
    )
}
