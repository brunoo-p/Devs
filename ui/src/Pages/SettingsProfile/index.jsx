import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ScreenModel, Header } from '../../Components';
import foto from '../../Assets/foto.jpg';
import { Content, LogoIcon, ReturnIcon, ImageProfile } from './styles';


export default function SettingsProfile() {

    let history = useHistory();

    const [ inputValue, setInputValue ] = useState("Andar de moto e tocar ukulele");
    const [ changeInput, setChagenInput ] = useState(false);

    const handleExit = () => {
        history.replace("/");
    }

    return (
        <ScreenModel>
            <Header>
                <ReturnIcon onClick={() => history.replace("/developers")}  title="return"/>
                <LogoIcon onClick={() => history.replace("/developers")}/>
                <div style={{color: 'red', cursor: 'pointer', width: '50px', height: '15px' }} onClick={handleExit} >Sair</div>
            </Header>

            <Content>
                <div className="card card-image">

                    <ImageProfile src={foto}/>
                    <label htmlFor="image-profile">Alterar Foto</label>
                    <input type="file" name="image-profile" id="image-profile" style={{display: 'none'}}/>
                </div>

                <div className="card card-hobby">

                    <textarea value={inputValue}  onChange={(event) => setInputValue(event.target.value)} />
                    <label onClick={() => setChagenInput(!changeInput)} >Editar Hobby</label>
                    
                </div>

            </Content>
        
        </ScreenModel>
    )
}
