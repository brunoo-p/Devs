import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../Services/api'
import { ScreenModel, Header, ScreenApp, InteractiveButtons, AccountConfiguration } from '../../Components';

import { Container, SettingsIcon, LogoIcon, ChatIcon } from './styles';

export default function Application() {
    
    let history = useHistory();

    const [ persons, setPersons ] = useState([]);
    const [ settings, setSettings ] = useState(false);
    const [ filter, setFilter ] = useState("");

    useEffect(() => {
        ( async () => {
            

            const finded = await GetAllDevs();
            
            
            let time = setTimeout(() => {

                setPersons(finded);

            }, 1000);

            return () => {
                clearTimeout(time);
            }

        })();

        
        return () => {
            setPersons([]);
        }
        
    }, []);
    

    useEffect(() => {
        (async () => {

            if(filter?.length > 0){

                console.log("filter", filter);
                const request = await api.get(`/developers?param=${filter}`);
                console.log(request);
                
                setPersons(request.data);

            }else{

                const finded = await GetAllDevs();
                setPersons(finded);
            }

        })();

        return () => {
            setPersons([]);
        }

    }, [filter])

    const GetAllDevs = async () => {
        const storage = JSON.parse(localStorage.getItem('user'));
        let param = storage.schooseGender;

        const request = await api.get(`/developers/find?gender=${param}`);

        return request.data.filter(_ => _.id !== storage.id);
    }


    const handleSettings = () => {
        setSettings(!settings);
    }
    const handleFilter = () => {
        setFilter("");
    }

    return (
        <Container data-testid="ApplicationContainer">
            <ScreenModel>
            
                <AccountConfiguration setFilter={setFilter}  settings={settings} setSettings={setSettings}/>
                
                <Header data-testid='header'>

                    <SettingsIcon onClick={handleSettings}/>
                    <LogoIcon onClick={() => history.replace("/developers")}/>
                    <ChatIcon/>
 
                </Header>
                {filter &&
                    <label className="filterContainer" data-testid="filter">
                        <p onClick={handleFilter}> X </p>

                        {filter}
                    </label>
                }
                
                <ScreenApp persons={persons} data-testeid="screenApp"/>
                {persons.length > 0 && <InteractiveButtons/>}
        
            </ScreenModel>
        </Container>
    )
}
