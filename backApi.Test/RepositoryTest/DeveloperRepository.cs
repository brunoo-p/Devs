// using System;
// using back.Domain.Interface;
// using back.Infrastructure.Entities;
// using Moq;
// using Xunit;

// namespace backApi.Test.RepositoryTest
// {
//     public class DeveloperRepository
//     {
//         private readonly Mock<IDeveloperRepository<Developer>> mockDev;


//         [Fact]
//         public void TestAddNewDev()
//         {
//             //Arrange
//             var newDev = new Developer(

//                 name: "Bruno",
//                 gender: 'M',
//                 age: 24,
//                 hobby: "Andar de moto e tocar ukulele",
//                 birth: new DateTime(1997, 03, 06) 
//             );

//             mockDev.Setup(dev => dev.Add(newDev)).Returns(true);
//             var _repository = new DeveloperRepository();
            

//             //Act
//             var resultadoEsperado = _repository.Add(newDev);
//             var resultadoRecebido = mockDev.Object.Add(newDev);

//             //Assert
//             Assert.Equal(resultadoRecebido, resultadoEsperado);
//         }

//         [Fact]
//         public void TestGetDevsById(){
            
//             //Arrange
//             int id = 1;

//             var mockDev = new Mock<IDeveloperRepository<Developer>>();
//             mockDev.Setup(dev => dev.GetByid(id));
//             var _repository = new DeveloperRepository();

//             //Act
//             var resultadoRecebido = mockDev.Object.GetByid(id);
//             var resultadoEsperado = _repository.GetByid(id);
        
//             //Assert
//             Assert.IsType<Developer>(resultadoRecebido);
//         }
//     }
// }