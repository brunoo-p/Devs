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
            
            const storage = JSON.parse(localStorage.getItem('user'));
            let param = storage.schooseGender;

            const request = await api.get(`/developers/find?gender=${param}`);
            console.log(request);
            
            setTimeout(() => {

                setPersons(request.data);

            }, 1000);
        })();

        
        return () => {
            setPersons([]);
        }
        
    }, []);
    

    // useEffect(() => {
    //     (async () => {

    //         if(filter.length > 0){

    //             const request = await api.get(`/developers?param=${filter}`);
                
    //             setPersons(request.data);
    //         }

    //     })();

    //     return () => {
    //         setPersons([]);
    //     }

    // }, [filter])


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
