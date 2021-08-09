using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using walkin.Data;
using walkin.models;

namespace walkin.Controllers
{
    
    [ApiController]
    [Route("walkin")]
    public class WalkInController: ControllerBase
    {
        [HttpGet]
        public JsonResult WalkInList()
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.ExecuteList());
        }

        [HttpGet]
        [Route("{walkin_id}")]
        public JsonResult WalkInDetailById(int walkin_id)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.ExecuteDetailById(walkin_id));   
        }

        [HttpGet]
        [Route("role/{walkin_id}")]
        public JsonResult ExecuteRoleDetailById(int walkin_id)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.ExecuteRoleDetailById(walkin_id));   
        }


        [HttpGet]
        [Route("pre/{walkin_id}")]
        public JsonResult ExecutePreRequisiteDetailById(int walkin_id)
        {
            ExecuteSp obj= new ExecuteSp();
            return new JsonResult(obj.ExecutePreRequisiteDetailById(walkin_id));   
        }

    }
}