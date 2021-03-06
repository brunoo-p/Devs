using System.Collections.Generic;
using System.Threading.Tasks;
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


        [HttpGet("{id}")]
        [Route("/")]
        public ActionResult<Developer> GetDevById(string id)
        {

            var dev = _repository.GetByid(id);

            if(dev == null){
                return StatusCode(404, "User not finded.");
            }

            return StatusCode(200, dev);
        }


        [HttpGet ("{param?}")]
        public ActionResult<List<Developer>> GetAllWithParam([FromQuery] string param = null)
        {
            var dev = _repository.GetWithParam(param);

            if(dev == null || dev.Count.Equals(0))
            {
                return StatusCode(404, "Nothing founded with param");
            }

            return StatusCode(200, dev);
        }


        [HttpGet ("find/{gender?}")]
        public ActionResult<List<Developer>> GetByGender([FromQuery] char gender='T')
        {
            var dev = _repository.GetByGender(gender);

            if(dev == null || dev.Count.Equals(0))
            {
                return StatusCode(404, "Nothing founded with param");
            }

            return StatusCode(200, dev);
        }



        [HttpPost("login/{nickname}")]
        public ActionResult<Developer> Login(string nickname)
        {
            var dev  = _repository.GetByNickname(nickname);
            if(dev == null)
            {
                return StatusCode(404, "Dev not founded");
            }
            return StatusCode(200, dev);

        }



        [HttpPost]
        public async Task<ActionResult> AddDev(Developer dev)
        {

            var newDev = await _repository.Add(dev);

            if(!newDev){
                return StatusCode( 400, "Error into Register, try again");
            }

            return StatusCode(201, "New dev created sucefully");
        }



        [HttpPut]
        [Route("{id}")]
        public ActionResult UpadateDev(string id,[FromForm] Developer dev)
        {

            var newDev = _repository.Update(id, dev);

            if(!newDev){
                return StatusCode(300, "Server fail in update");
                
            }

            return StatusCode(200, "Sucefully");
        }



        [HttpDelete ("{id}")]
        public ActionResult DeleteDev(string id)
        {

            var dev = _repository.Delete(id);

            if(!dev){
                return StatusCode(400, "Failed to delete this register.");
            }

            return StatusCode(204);
        }
    }
}