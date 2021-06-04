using System;
using back.Infrastructure.Entities;
using back.Domain.Repository;
using back.Domain.Interface;
using System.Collections.Generic;
using back.Infrastructure.Database;
using Moq;
using Xunit;
using System.Threading.Tasks;

namespace backApi.Test
{
    public class RepositoryTest
    {

        Connection connection;
        DeveloperRepository _repository;
        Mock<IDeveloperRepository<Developer>> mockDev;

        public RepositoryTest()
        {
            connection = new Connection();
            _repository = new DeveloperRepository(connection);
            mockDev = new Mock<IDeveloperRepository<Developer>>();
        }

        [Fact]
        public void Adicionar_NovoDev()
        {

            //Arrange
            var newDev = new Developer(

                name: "Bruno",
                nickname: "bruno",
                gender: 'M',
                schooseGender: 'F',
                age: 24,
                birthDate: "06-03-1997"
            );
            
            //mockDev.Setup(_ => _.Add(newDev)).Returns();
            

            /*------------------> Teste para passar <----------------------------*/
            //Act
            var resultadoEsperado_Correto = mockDev.Object.Add(newDev);
            var resultadoRecebido_Correto = _repository.Add(newDev);

            //Assert
            Assert.Equal(resultadoRecebido_Correto, resultadoEsperado_Correto);

            /*------------------> Teste para falhar <----------------------------*/
            //Act
            var resultadoEsperado_Errado = mockDev.Object.Add(newDev);
            var resultadoRecebido_Errado = _repository.Add(newDev);

            //Assert
            Assert.Equal(resultadoRecebido_Errado, resultadoEsperado_Errado);
        }


        [Fact]
        public void Pegar_Dev_PorId()
        {
            
            //Arrange
            string idCorreto = "60b69a6dcc3864ef36d1829a";
            string idErrado =  "000000000000000000000009";
            
            mockDev.Setup(dev => dev.GetByid(idCorreto)).Returns(new Developer());
            
            /*------------------> Teste para passar <----------------------------*/
            //Act
            var resultadoRecebido_Correto = mockDev.Object.GetByid(idCorreto);
            var resultadoEsperado_Correto = _repository.GetByid(idCorreto);
        
            //Assert
            Assert.IsType<Developer>(resultadoRecebido_Correto);
            Assert.IsType<Developer>(resultadoEsperado_Correto);


            /*------------------> Teste para falhar <----------------------------*/
            //Act
            var resultadoRecebido_Errado = mockDev.Object.GetByid(idErrado);
            var resultadoEsperado_Errado = _repository.GetByid(idErrado);
        
            //Assert
            Assert.IsNotType<Developer>(resultadoRecebido_Errado);
            Assert.IsNotType<Developer>(resultadoEsperado_Errado);

        }

        [Fact]
        public void Pegar_PorFiltro_RetornarUmaLista()
        {
            /*-----------------> Pegando todos <----------------------------*/
            string paramEmpty = "ukulele";
            //Arrange
            mockDev.Setup(_ => _.GetWithParam(paramEmpty)).Returns(() => new List<Developer>{});
            var resultadoEsperado = _repository.GetWithParam(paramEmpty);
            
            //Act
            var resultadoRecebido = mockDev.Object.GetWithParam(paramEmpty);

            //Assert
            Assert.NotNull(resultadoRecebido);


            /*-----------------> Pegar por parâmetro <----------------------------*/
            string param = "bruno";
            //Arrange
            mockDev.Setup(_ => _.GetWithParam(param)).Returns(() => new List<Developer>{});
            var esperado = _repository.GetWithParam(param);
            
            //Act
            var recebido = mockDev.Object.GetWithParam(param);

            //Assert
            Assert.NotNull(resultadoRecebido);
            
        }

        [Fact]
        public void Modificar_DevCadastrado_RetornarTRUEorFALSE()
        {
            //Arrange
            string idCorreto = "60ad557aca2d7e916cbdf353";
            string idErrado = "60ad557aca2d7e916cbdf35";

            var dev = new Developer(

                // name: "Blabla ",
                // gender: 'F',
                // age: 14,
                // hobby: "Correr na rua",
                // birthDate: new DateTime(1997, 03, 06) 
            );
            
            mockDev.Setup(_ => _.Update(idCorreto, dev)).Returns(true);

            /*-----------------> Teste para passar <----------------------------*/
            //Act
            var resultadoEsperado_Correto = _repository.Update(idCorreto, dev);
            var resultadoRecebido_Correto = mockDev.Object.Update(idCorreto, dev);
            
            //Assert
            Assert.True(resultadoRecebido_Correto);
            Assert.Equal(resultadoEsperado_Correto, resultadoRecebido_Correto);


            /*------------------> Teste para falhar <----------------------------*/
            //Act
            var resultadoEsperado_Errado = _repository.Update(idErrado, dev);
            var resultadoRecebido_Errado = mockDev.Object.Update(idErrado, dev);

            //Assert
            Assert.False(resultadoRecebido_Errado);
            Assert.Equal(resultadoEsperado_Errado, resultadoRecebido_Errado);
        }


        [Fact]
        public void Marcar_no_BD_uma_Flag_DevDeletado()
        {
            //Arrange
            string idCorreto = "60ad557aca2d7e916cbdf353";
            string idErrado = "60ad557aca2d7e916cbdf35";

            mockDev.Setup(_ => _.Delete(idCorreto)).Returns(true);


            /*------------------> Teste para passar <----------------------------*/
            //Act       
            var resultadoRecebido_Correto = mockDev.Object.Delete(idCorreto);

            //Assert
            Assert.True(resultadoRecebido_Correto);


            /*------------------> Teste para falhar <----------------------------*/
            //Act
            var resultadoRecebido_Errado = mockDev.Object.Delete(idErrado);

            //Assert
            Assert.False(resultadoRecebido_Errado);
        }
    }
}
