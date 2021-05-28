import React, { useState } from 'react'
import { Container, Content } from './styles';

export default function AccountConfiguration() {

    const [ usefilter, setUseFilter ] = useState("");
    return (
        <Container>
            <Content>
                <div className="card">

                    <label >Adicionar Filtro  <span onClick={() => setUseFilter(!usefilter)}>Toggle</span> </label>
                    <input type="text" style={{width: usefilter ? '100px' : '0', opacity: usefilter ? '1' : '0'}}/>

                </div>
            </Content>
        </Container>
    )
}
