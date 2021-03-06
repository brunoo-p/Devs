import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import { useHistory } from 'react-router';

import Particle from 'react-particles-js';

import { ScreenModel } from '../../Components';
import { Content, LogoIcon, Form, Code, CodeSlash, UserIcon } from './styles';
import { CalculateAge } from '../../Services/GetAge';


export default function Home() {
    
    let history = useHistory();

    const [ user, setUser ] = useState("");
    const [ nickname, setNickname ] = useState("");
    const [ schooseGender, setSchooseGender ] = useState("");
    const [ ownGender, setOwnGender ] = useState("");
    const [ showPortal, setShowPortal ] = useState(true);
    const [ registered, setRegistered ] = useState(false);

    useEffect(() => {
        registered ? document.querySelector("#nick").focus()
        :
        document.querySelector("#name")?.focus();
    },[registered]);


    const onRegister = async (event) => {
        event.preventDefault();

        document.querySelector('#btnSubmit').value = "Enviando...";
        

        let birthDate = document.querySelector("#birth").value;

        let age = CalculateAge(birthDate);
        

        const response = await api.post('/developers', {name: user, nickname, gender: ownGender, schooseGender, age, birthDate});

        
        if(response.status === 201)
        {
            getLogin();

        }else{
            alert('Tivemos um problema com o registro, tente novamente');
        }
        
    }

    const onLogin = (event) => {
        event.preventDefault();

        if(nickname){

            getLogin();
        }
     }

    const getLogin = async () => {

        document.querySelector('#btnSubmit').value = "Enviando...";

        try{
            const response = await api.post(`/developers/login/${nickname}`);
            let data = response.data;
            
            if(response.status === 200)
            {
                localStorage.setItem('user', JSON.stringify(data));
                history.push("/settings");
            }else
            {
                alert("Tivemos um problema interno, tente novamente mais tarde");
            }

        }catch{

            alert("Confira se digitou corretamente o Nickname");
            document.querySelector('#btnSubmit').value = "Enviar";
        }
    }


    let labelOwnGender = '/* Me Considero *\\';
    const handleOwnGender = (gender) => {
        setOwnGender(gender);
    }

    let labelSchooseGender = '/* Quero Encontrar *\\';
    const handleSchooseGender = (searchGender) => {
        setSchooseGender(searchGender);
    }
    

    const handleOption = (type) => {
        if(type === 'start'){

            setRegistered(false);
        }else{
            setRegistered(true);
        }
        setShowPortal(false);
    }
    

    return (
        <ScreenModel>
            <Content data-testid='content'>
            {showPortal ?
                <>
                    <div className="start" >
                        <LogoIcon />
                        <button onClick={() => handleOption('start')} data-testid="start"> Vamos Come??ar </button>
                        <button onClick={() => handleOption('login')} data-testid="login"> Ja tenho Cadastro </button>
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
                    {!registered ?
                        <Form onSubmit={onRegister} data-testid="register-form">
                            <label style={{color: '#dfe4ea', fontSize: '15px'}}> <Code/> Cadastrar <CodeSlash/></label>
                            
                            <label htmlFor="image-profile"> <UserIcon   style={{height: schooseGender && '30px', }}/> </label>
                            
                            <input type="text"   id="name" placeholder="Nome" required onChange={(event) => setUser(event.target.value)} data-testid="inputNameRegister"/>
                            <input type="text"  placeholder="Nickname" required onChange={(event) => setNickname(event.target.value)} data-testid="inputNicknameRegister"/>
                            

                            <div className="card">

                                <label htmlFor="birthDate">Data de Nascimento</label>
                                <input type="date" name="birthDate" id="birth" max="2021-01-01" min="1929-01-01" required/>
                            </div>

                            
                            <div className="wrap-gender">

                                <div className="gender" style={{marginTop: '-15px'}}>
                                    <span> {labelOwnGender} </span>

                                    <label data-testid="inputGender" onClick={() => handleOwnGender("M")}> Homem</label>
                                    <label onClick={() => handleOwnGender("F")}> Mulher</label>       
                                </div>

                                <div className="gender">
                                    <span> {labelSchooseGender} </span>
                                
                                    <label onClick={() => handleSchooseGender("M")}> Homens</label>
                                    <label onClick={() => handleSchooseGender("F")}> Mulheres</label>
                                    <label onClick={() => handleSchooseGender("T")}> Todos</label>       
                                </div>

                            </div>
                            {
                                schooseGender ? <input type="submit" id="btnSubmit" style={{cursor: 'pointer'}} className="btnRegister"/> : <button disabled={user.length > 0 ? true : false}/>
                            }
                        </Form>
                        :
                        <Form style={{height: '45%', marginBottom: '35%'}} onSubmit={onLogin} data-testid="login-form">

                            <label style={{color: '#dfe4ea', fontSize: '15px'}}> <Code/> Login <CodeSlash/></label>
                            
                            <label htmlFor="image-profile"> <UserIcon/> </label>
                            
                            <input type="text"  id="nick" placeholder="Nickname" required onChange={(event) => setNickname(event.target.value)} data-testid="inputLogin"/>
                            
                            {
                                nickname ? <input type="submit" id="btnSubmit" style={{cursor: 'pointer'}} /> : <button disabled={user.length > 0 ? true : false}/>
                            }

                            <label style={{fontSize: '18px', color: '#dfe4ea', cursor: 'pointer'}}
                                onClick={() => handleOption('start')}
                                data-testid='callRegisterForm'
                                > Me Cadastrar
                            </label>
                        </Form>
                    }
                </>

            }
            </Content>
        </ScreenModel>
    )
}
