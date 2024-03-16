namespace ToDoRepository
{
    public interface IToDosRepository
    {
        public void Add(ToDo todo);
        public void Update(ToDo todo);
        public void Delete(ToDo todo);
        public List<ToDo> GetAll(int userId);
        public ToDo GetById(int todoId);
    }
}
