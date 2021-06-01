import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../Services/api';

import { ScreenModel, Header } from '../../Components';

import avatarDefault from '../../Assets/avatarDefault.png';
import { Content, LogoIcon, ReturnIcon, ImageProfile } from './styles';

export default function SettingsProfile() {

    let history = useHistory();

    const [ inputHobby, setInputHobby ] = useState("Andar de moto e tocar ukulele");
    const [ name, setName ] = useState("");
    const [ id, setId ] = useState("");
    const [ imageProfile, setImageProfile ] = useState(null);

    useEffect(() => {
        (async () => {

            let storage =  await JSON.parse(localStorage.getItem('user'));
            console.log(storage);
            
            if(storage != null){
    
                setName(storage.name);
                setId(storage.id);
                setImageProfile(storage.ImageProfile);
            }
        })()
        
    }, [])

    const handleExit = () => {
        history.replace("/");
        localStorage.removeItem('user');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {name: `${name}`, hobby: `${inputHobby}`, imageProfile: `${imageProfile.url}`};

        const request = await api.put(`/developers/${id}`, data);
        console.log(request);
        
        history.push("/developers");
    }


    //<--- Image
    const changeFile = async ({target}) => {   
        let files = target.files[0];


        const profile = {
            file: files,
            url: URL.createObjectURL(files)
        }
        setImageProfile(profile);
        // if(files != null){

        //     const profile = {
        //         file: files,
        //         url: URL.createObjectURL(files)
        //     }

        //     setProfileImage(profile);
        // }

    }
    //<-- 


    return (
        <ScreenModel>
            <Header>
                <ReturnIcon onClick={() => history.replace("/developers")}  title="return"/>
                <LogoIcon onClick={() => history.replace("/developers")}/>
                <div style={{color: 'red', cursor: 'pointer', width: '50px', height: '15px' }} onClick={handleExit} >Sair</div>
            </Header>

            <Content>
                <div className="card card-image">

                    <ImageProfile src={imageProfile ? imageProfile.url : avatarDefault}  style={{backgroundSize: imageProfile && 'cover'}}htmlFor="image-profile"/>
                    <label htmlFor="image-profile" style={{cursor: 'pointer', border: '1px solid #1aaa'}}>Alterar Foto</label>
                    <input type="file" name="image-profile" id="image-profile" style={{display: 'none'}} onChange={changeFile}/>
                </div>

                <div className="card card-name">
                    <label >{name}</label>
                    <input type="text"  placeholder="[ Alterar Nome ]" required onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className="card card-hobby">

                    <label >Meu Hobby</label>
                    <textarea
                        value={inputHobby} 
                        onChange={(event) => setInputHobby(event.target.value)}
                    />
                    
                </div>

                    <div className="saveSettings">
                        <input className="salvar" type="submit" value="Salvar" onClick={handleSubmit}/>
                    </div>
            </Content>
        
        </ScreenModel>
    )
}
