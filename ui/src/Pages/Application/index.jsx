import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../Services/api'
import { ScreenModel, Header, ScreenApp, InteractiveButtons, AccountConfiguration } from '../../Components';

import { SettingsIcon, LogoIcon, ChatIcon } from './styles';

export default function Application() {
    
    let history = useHistory();

    const [ persons, setPersons ] = useState([]);
    const [ settings, setSettings ] = useState(false);
    const [ filter, setFilter ] = useState("");

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


    const handleSettings = () => {
        setSettings(!settings);
    }


    return (
        <ScreenModel>
        
                <AccountConfiguration setFilter={setFilter}  settings={settings}/>
                
                <Header>

                    <SettingsIcon onClick={handleSettings}/>
                    <LogoIcon onClick={() => history.replace("/developers")}/>
                    <ChatIcon/>
                
                </Header>
                
                <ScreenApp persons={persons}/>
                {persons.length > 0 && <InteractiveButtons/>}
        
        </ScreenModel>
    )
}
