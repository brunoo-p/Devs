import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { EncodedToBlob } from '../../Services/EncodedToBlob';
import api from '../../Services/api';

import { ScreenModel, Header } from '../../Components';

import avatarDefault from '../../Assets/avatarDefault.png';
import { Content, LogoIcon, ReturnIcon, ImageProfile } from './styles';

export default function SettingsProfile() {

    let history = useHistory();

    const [ imageProfile, setImageProfile ] = useState(null);
    const [ inputHobby, setInputHobby ] = useState("");
    const [ nickname, setNickname ] = useState("");
    const [ name, setName ] = useState("");
    const [ id, setId ] = useState("");

    useEffect(() => {
        (async () => {

            let storage = JSON.parse(localStorage.getItem('user'));
            
            if(storage != null){
    
                setName(storage.name);
                setNickname(storage.nickname);
                setId(storage.id);
            }
            
        })()
        
    }, [])
    

    useEffect(() => {
        (async () => {
            let storage =  await JSON.parse(localStorage.getItem('user'));
            
            if(storage.imageProfile != null){
                
                var imageEnconded = storage.imageProfile;
                let urlImage = EncodedToBlob(imageEnconded);
                setImageProfile({url: urlImage});
            }
                
            if(storage.hobby?.length)
            {
                setInputHobby(storage.hobby);
            }

        })()
        
    },[])


    const handleExit = () => {
        history.replace("/");
        localStorage.removeItem('user');
    }


    const handleSubmit = async (event) => {
        event.preventDefault();


        let data = new FormData();
        
        data.append('name', name);
        data.append('hobby', inputHobby);
        data.append('imagePath', imageProfile.file);


        await api.put(`/developers/${id}`, data);
       
        const response = await api.post(`/developers/login/${nickname}`);

        localStorage.setItem('user', JSON.stringify(response.data));

        
        history.push("/developers");
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        await api.delete(`/developers/${id}`);
     
        history.replace('/');
    }

    //<--- Image
    const changeFile = async ({target}) => {   
        let files = target.files[0];

        if(files){
            
            const profile = {
                file: files,
                url: URL.createObjectURL(files)
            }
            setImageProfile(profile);
        }
    }
    //<-- 


    return (
        <ScreenModel>
            <Header data-testid="settingsProfileHeader">
                <ReturnIcon onClick={() => history.replace("/developers")}  title="return"/>
                <LogoIcon onClick={() => history.replace("/developers")}/>
                <div style={{color: 'red', cursor: 'pointer', width: '50px', height: '15px' }} onClick={handleExit} >Sair</div>
            </Header>

            <Content data-testid="settingsProfileContent" >
                <div className="card card-image">

                    <ImageProfile src={imageProfile ? imageProfile.url : avatarDefault}  style={{backgroundSize: imageProfile && 'cover'}}htmlFor="image-profile"/>
                    <label htmlFor="image-profile" style={{cursor: 'pointer', border: '1px solid #1aaa'}}>Alterar Foto</label>
                    <input type="file" name="image-profile" id="image-profile" style={{display: 'none'}} onChange={changeFile} data-testid="inputFile"/>
                </div>

                <div className="card card-name">
                    <label >{name}</label>
                    <input type="text" 
                        placeholder="[ Alterar Nome ]"
                        required
                        data-testid="inputName"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="card card-hobby">

                    <label >Meu Hobby</label>
                    <textarea
                        value={inputHobby} 
                        onChange={(event) => setInputHobby(event.target.value)}
                        data-testid='inputHobby'
                    />
                    
                </div>

                    <div className="saveSettings">
                        <input type="submit" value="Salvar" onClick={handleSubmit}/>
                        <input type="submit" value="Excluir Conta" onClick={handleDelete} style={{backgroundColor: 'red'}}/>
                    </div>
            </Content>
        
        </ScreenModel>
    )
}
