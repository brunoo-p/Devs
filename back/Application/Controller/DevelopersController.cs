using System.Collections.Generic;
using back.Domain.Interface;
using back.Infrastructure.Entities;
using Microsoft.AspNetCore.Mvc;

namespace back.Application.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class DevelopersController : ControllerBase
    {
        IDeveloperRepository<Developer> _repository;

        public DevelopersController(IDeveloperRepository<Developer> repository)
        {
            _repository = repository;
        }


        [HttpGet]
        public ActionResult<List<Developer>> GetAllDevs(){
            
            var devsList = _repository.All();
            if(devsList.Count == 0 ){

                return StatusCode(200, "Nenhum dev cadastrado");
            }

            return StatusCode(200, devsList);

        }


        [HttpGet("{id}")]
        public ActionResult<Developer> GetDevById(int id){

            var dev = _repository.GetByid(id);

            if(dev == null){
                return StatusCode(404, "User not finded.");
            }

            return StatusCode(200, dev);
        }


        [HttpPost]
        public ActionResult AddDev([FromBody] Developer dev){

            var newDev = _repository.Add(dev);

            if(!newDev){
                return StatusCode( 400, "Error into Register, try again");
            }

            return StatusCode(201, "New dev created sucefully");
        }


        [HttpPut ("{id}")]
        public ActionResult UpadateDev(Developer dev){

            var newDev = _repository.Update(dev);

            if(!newDev){
                return StatusCode(400, "Server fail in update");
                
            }

            return StatusCode(200, "Sucefully");
        }


        [HttpDelete ("{id}")]
        public ActionResult DeleteDev(int id){

            var dev = _repository.Delete(id);

            if(!dev){
                return StatusCode(400, "Failed to delete this register.");
            }

            return StatusCode(204);
        }
    }
}