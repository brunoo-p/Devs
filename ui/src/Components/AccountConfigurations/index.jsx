import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Content, ToggleOn, ToggleOff  } from './styles';

import PropTypes from 'prop-types';


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
        <Container transform={!settings ? '-100%' : '0'} opacity={settings ? '1' : '0'} style={{pointerEvents: !settings && 'none'}} data-testid="configurationContainer">
            <Content > 
                <div className="card">

                    <label> Adicionar Filtro </label>
                    <span onClick={() => setWriteFilter(!writeFilter)} data-testid='btnToggleFilter'>
                        {writeFilter ? <ToggleOff/> : <ToggleOn/>}    
                    </span>

                </div>


                <div className="inputFilter"
                    style={{
                        height: !writeFilter && '0',
                        opacity: !writeFilter && '0',
                        pointerEvents: !writeFilter && 'none'
                    }}>

                    <input type="text" ref={inputRef} onKeyUp={handleFilter} data-testid='inputFilter' placeholder="Digite sua busca"/>
                </div>


                <div className="card profile">
                    <label
                        onClick={() => history.push('/settings')}
                        data-testid='toConfigurationPage'
                    >
                        Detalhes do meu perfil
                    </label>
                </div>


                <div className="card" >
                    <label 
                        onClick={handleExit}
                        style={{color: '#ff7979', cursor: 'pointer'}}
                        data-testid='btnExit'
                    >
                        Sair
                    </label>
                </div>
                
            </Content>
        </Container>
    )
}

AccountConfiguration.propTypes = {
    setFilter: PropTypes.func,
    settings: PropTypes.bool,
    setSettings: PropTypes.func, 
}
