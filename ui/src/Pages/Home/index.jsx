import React, { useState } from 'react';
import { ScreenModel } from '../../Components';
import { Content, LogoIcon, Form, Code, CodeSlash } from './styles';


export default function Home() {

    const [ showLogin, setShowLogin ] = useState(true);
    return (
        <ScreenModel>
            <Content>

                {showLogin ? 
                    <Form>
                        <LogoIcon />
                        <p onClick={() => setShowLogin(!showLogin)}> <Code /> Quero me Registrar <CodeSlash/> </p>
                        <input type="text" placeholder="Nome" />
                        <input type="password" placeholder="Senha" />
                        <input type="submit" />
                        
                    </Form>
                :
                    <Form>
                        <LogoIcon />
                        <p onClick={() => setShowLogin(!showLogin)}> <Code /> Voltar para Login <CodeSlash/> </p>
                        
                        <input type="text"  placeholder="Nome"/>
                        <input type="password"  placeholder="Senha"/>
                        <label > Quero encontrar: </label>
                        <div className="gender">
                            <label>Homens</label>
                            <label>Mulheres</label>
                            <label>Todos</label>       
                        </div>  
                        
                    </Form>
                }    
            </Content>
        </ScreenModel>
    )
}
