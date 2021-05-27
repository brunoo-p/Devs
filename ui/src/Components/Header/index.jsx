import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Content, PersonIcon, LogoIcon, ChatIcon } from './styles';

export default function Header() {
    
    let history = useHistory();


    const handlePersons = () => {
        // show Persons
    }
    
    const handleChat = () => {
        // show Chat
    }
    
    return (
        <Container>
            <Content>

               <PersonIcon onClick={handlePersons}/>
                <LogoIcon onClick={() => history.replace("/developers")}/>
               <ChatIcon onClick={handleChat}/>
            
            </Content>  
        </Container>
    )
}
