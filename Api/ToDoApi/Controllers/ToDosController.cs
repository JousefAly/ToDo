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
            return new List<ToDo>
            {
                new ToDo
                {
                    Id = 1,
                    Text = "todo text 1 from api"
                },
                 new ToDo
                {
                    Id = 2,
                    Text = "todo text 2 from api"
                }
            };
        }
    }
}