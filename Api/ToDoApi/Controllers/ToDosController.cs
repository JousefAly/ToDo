using Microsoft.AspNetCore.Mvc;
using ToDoRepository;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDosController : ControllerBase
    {
        private readonly IToDosRepository _toDosRepository;

        public ToDosController(IToDosRepository toDosRepository)
        {
            _toDosRepository = toDosRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ToDo>> Get()
        {
            int dummyUserId = 0;
            return Ok(_toDosRepository.GetAll(dummyUserId));
        }

        [HttpPost]
        public ActionResult Post(ToDo todo)
        {
            _toDosRepository.Add(todo);
            return Ok();
        }

        [HttpDelete("[action]/{id}")]
        public ActionResult Delete(int id)
        {
            var todo = _toDosRepository.GetById(id);
            _toDosRepository.Delete(todo);
            return Ok();
        }
        [HttpPut("{id}")]
        public ActionResult Put(int id, ToDo todo)
        {
            var updateTodo = _toDosRepository.GetById(id);
            updateTodo.Text = todo.Text;
            _toDosRepository.Update(updateTodo);
            return Ok();
        }
    }
}