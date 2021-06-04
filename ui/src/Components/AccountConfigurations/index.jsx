import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Content, ToggleOn, ToggleOff  } from './styles';


export default function AccountConfiguration({setFilter, settings, setSettings}) {

    let history = useHistory();
    let inputRef = useRef(null);
    const [ writeFilter, setWriteFilter ] = useState(false);
    
    const handleFilter = (event) => {

        if(event.keyCode === 13){
            setFilter(event.target.value);
            inputRef.current.value = "";
            setWriteFilter(false);
            setSettings(false);
        }
    }

    const handleExit = () => {
        history.replace("/");
        localStorage.removeItem('user');
    }

    return (
        <Container transform={!settings ? '-100%' : '0'} opacity={settings ? '1' : '0'} style={{pointerEvents: !settings && 'none'}}>
            <Content > 
                <div className="card">

                    <label> Adicionar Filtro </label>
                    <span onClick={() => setWriteFilter(!writeFilter)}>
                        {writeFilter ? <ToggleOff/> : <ToggleOn/>}    
                    </span>

                </div>

                <div className="inputFilter" style={{height: !writeFilter && '0', opacity: !writeFilter && '0' }}>
                    <input type="text" ref={inputRef} onKeyUp={handleFilter}/>
                </div>

                <div className="card profile">
                    <label onClick={() => history.push('/settings')}> Detalhes do meu perfil </label>
                </div>
                <div className="card" >
                    <label 
                        onClick={handleExit}
                        style={{color: '#ff7979', cursor: 'pointer'}}
                    >
                        Sair
                    </label>
                </div>
            </Content>
        </Container>
    )
}
