using System;
using System.Net.Http;
using back.Application.Controller;
using back.Domain.Interface;
using back.Infrastructure.Entities;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace backApi.Test.ControllerTest
{
    // public class ControllerTest
    // {
    //     [Fact]
    //     public void AddRoute()
    //     {
    //         var newDev = new Developer(

    //             name: "batata",
    //             gender: 'M',
    //             age: 24,
    //             hobby: "Andar de moto e tocar ukulele",
    //             birthDate: new DateTime(1994, 01, 03) 
    //         );

    //         var mockRepositiory = new Mock<IDeveloperRepository<Developer>>();
    //         var controller = new DevelopersController(mockRepositiory.Object);

    //         var result = controller.AddDev(newDev);

    //         Assert.NotNull(result);
    //         Assert.IsType<ObjectResult>(result);
            
    //     }
    // }
}