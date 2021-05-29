import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Content, ToggleOn, ToggleOff  } from './styles';


export default function AccountConfiguration({setFilter, settings}) {

    let history = useHistory();
    let inputRef = useRef(null);
    const [ writeFilter, setWriteFilter ] = useState(false);
    
    const handleFilter = (event) => {

        if(event.keyCode === 13){
            setFilter(event.target.value);
            inputRef.current.value = "";
            setWriteFilter(false);
        }
    }

    return (
        <Container transform={!settings ? '-100%' : '0'} opacity={settings ? '1' : '0'}>
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
                    <label onClick={() => history.push('/settings')}> Ver detalhes do perfil </label>
                </div>
            </Content>
        </Container>
    )
}
