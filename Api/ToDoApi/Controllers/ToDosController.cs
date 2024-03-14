using Microsoft.AspNetCore.Mvc;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDosController : ControllerBase
    {


        public ToDosController()
        {

        }

        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            return ToDos.ToDosData;
        }

        [HttpPost]
        public ActionResult Post(ToDo todo)
        {
            ToDos.ToDosData.Add(todo);
            return Ok();
        }
     
        [HttpDelete("[action]/{id}")]
        public ActionResult Delete(int id)
        {
            ToDos.ToDosData.RemoveAll(x => x.Id == id);
            return Ok();
        }
    }
}