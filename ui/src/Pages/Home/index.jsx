import React, { useState } from 'react';
import api from '../../Services/api';
import { useHistory } from 'react-router';

import Particle from 'react-particles-js';

import { ScreenModel } from '../../Components';
import { Content, LogoIcon, Form, Code, CodeSlash, UserIcon } from './styles';


export default function Home() {
    
    let history = useHistory();

    const [ user, setUser ] = useState("");
    const [ nickname, setNickname ] = useState("");
    const [ schooseGender, setSchooseGender ] = useState("");
    const [ ownGender, setOwnGender ] = useState("");

    const onRegister = async (event) => {
        event.preventDefault();

        document.querySelector('#btnSubmit').value = "Enviando...";
        


        let birthDate = document.querySelector("#birth").value;
        let d = birthDate.split('-');
        birthDate = `${d[2]}-${d[1]}-${d[0]}`; 
        
        let age = 34;

        const response = await api.post('/developers', {name: user, gender: ownGender, age, birthDate});
        console.log(request);
        
        //localStorage.setItem('user', JSON.stringify({data}));
        
        if(response.status == 200)
        {
            getLogin();

        }else{
            alert('Tivemos um problema com o registro, tente novamente');
        }
        
    }

    const getLogin = async () => {

        const response = await api.post('/developers/login', {nickname});
        
    }

    const [showPortal, setShowPostal ] = useState(true);

    const handleOwnGender = (gender) => {
        setOwnGender(gender);
    }
    const handleSchooseGender = (searchGender) => {
        setSchooseGender(searchGender);
    }
    
    const handleStart = () => {
        setShowPostal(false);
    }
    

    return (
        <ScreenModel>
            <Content>
            {showPortal ?
                <>
                    <div className="start" >
                        <LogoIcon />
                        <button onClick={handleStart}> Vamos Começar </button>
                    </div>
                    
                    <Particle  width="400px" />

                    <div style={{transform: 'rotate(75deg)'}}>
                        <Particle 
                            width="400px"
                            height="400px"
                        />
                    </div>
                </>
                :
                <>

                    <div style={{transform: 'rotate(75deg)'}}>
                        <Particle 
                            width="600px"
                            height="600px"
                        />
                    </div>
                    <Form onSubmit={onRegister}>
                        <label style={{color: '#dfe4ea', fontSize: '15px'}}> <Code/> Cadastrar <CodeSlash/></label>
                        
                        <label htmlFor="image-profile"> <UserIcon/> </label>
                        
                        <input type="text"  placeholder="Nome" required onChange={(event) => setUser(event.target.value)}/>
                        <input type="text"  placeholder="Nickname" required onChange={(event) => setNickname(event.target.value)}/>
                        

                        <div className="card">

                            <label htmlFor="birthDate">Data de Nascimento</label>
                            <input type="date" name="birthDate" id="birth" max="2021-01-01" min="1929-01-01" required/>
                        </div>

                        
                        <div className="wrap-gender">

                            <div className="gender" style={{marginTop: '-15px'}}>
                                <span> /* Me Considero */ </span>

                                <label onClick={() => handleOwnGender("H")}> Homem</label>
                                <label onClick={() => handleOwnGender("F")}> Mulher</label>       
                            </div>

                            <div className="gender">
                                <span> /*  Quero Encontrar  */ </span>
                            
                                <label onClick={() => handleSchooseGender("M")}> Homens</label>
                                <label onClick={() => handleSchooseGender("F")}> Mulheres</label>
                                <label onClick={() => handleSchooseGender("T")}> Todos</label>       
                            </div>

                        </div>
                        {
                            true ? <input type="submit" id="btnSubmit" /> : <button disabled={user.length > 0 ? true : false}/>
                        }
                    </Form>    
                </>

            }
            </Content>
        </ScreenModel>
    )
}
