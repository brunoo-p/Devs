# Devstê 
<h3>Este projeto rodando em microserviços simula uma aplicação para encontro entre devs. Afinal, duas cabeças na madrugada pensam melhor do que uma. </h3>
<p>
  <img alt="C#" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"/>
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</p>
<br/>

# Pré-Requisito
<h4>Tenha o Docker: https://www.docker.com/products/docker-desktop</h4>

<br/>

# Começando 🚀
<h4>Primeiro será necessário clonar o repositório</h4>
  <h5>Abra o prompt e digite</h5>
  
```shel
mkdir Devs
cd Devs
git clone https://github.com/brunoo-p/Devs
```

## Construindo e iniciando 🔧⚙
```shel
cd Devs
docker-compose up -d
```

## Finalizar containers 🔧⚙
```shel
docker-compose down
```
<br/>

- O comando ``` docker-compose up -d ``` irá iniciar em background 4 containers, sendo:

  - MONGO: Microserviço do Mongo Database rodando em ``localhost: 27017``
      - ``portas: 27017:27017``
      
  - MONGO-EXPRESS: Monitoramento do container "mongo" trazendo uma interface dos documents e collections ```localhost:8081```
      - ``portas: 8081:8081``
      - Browser irá pedir senha -  ``usuário: kali | senha: kali``
      
  - API: WebApi em AspNetCore version=5.6.3  HTTP ``localhost: 5000``
      - ``portas: 5000:5000``
      
  - UI: Aplicação Reactjs  se conectando através de HTTP ``localhost: 3000``
      - ``portas: 3000:3000``
      
 
 - Também criará um diretório "DATA" para persistência de dados mesmo com a finalização do container.
 
 
<br/>
  


# Testes 🚦🎓

## Backend
```shel
cd Devs
dotnet test
```
## Frontend
```shel
cd ui
npm test
```
