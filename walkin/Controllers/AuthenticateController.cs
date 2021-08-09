using System.Collections.Generic;
using System.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using walkin.Data;
using walkin.models;

namespace walkin.Controllers
{

    
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticateController : ControllerBase
    {
        private readonly IJwtAuthenticationManager jwtAuthenticationManager;
        public AuthenticateController(IJwtAuthenticationManager jwtAuthenticationManager)
        {
            this.jwtAuthenticationManager=jwtAuthenticationManager;
        }
       
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { 
                "atif hingwala","yuvraj haryan"
            };
        }

        [Authorize]
        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public IActionResult login([FromBody] UserCredentials userCredentials)
        {
            
            if (userCredentials == null)
            {
                return BadRequest("Invalid Request");
            }
            var token = jwtAuthenticationManager.Authenticate(userCredentials.email, userCredentials.password);
            if (token == null)
            {
                return Unauthorized(); 
            }
            return Ok(token);
        }

        [HttpPost]
        [Route("register")]
        public IActionResult register([FromBody] RegisterCredentials db_data)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.registerUser(db_data));
            // return new JsonResult(obj.registerUser(db_data));
             
        }


        [HttpPost]
        [Route("registerInWalkIn")]
        public void registerInWalkIn([FromBody] RegisterCredentials db_data)
        {
            ExecuteSp obj= new ExecuteSp();
            obj.registerInWalkIn(db_data);
            // return new JsonResult(obj.registerUser(db_data));
            
             
        }

        [HttpPost]
        [Route("insertRegister")]
        public IActionResult insertRegistrationInWalkIn([FromBody] insertRegistrationInWalkIn data)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.insertRegistrationInWalkIn(data));
            // return new JsonResult(obj.registerUser(db_data));
            
             
        }

        [HttpPost]
        [Route("hallTicket")]
        public IActionResult hallTicket([FromBody] hallTicket data)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.hallTicket(data));
            // return new JsonResult(obj.registerUser(db_data));
            
             
        }
    }

}