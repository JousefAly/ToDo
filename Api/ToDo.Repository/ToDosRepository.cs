namespace ToDoRepository
{
    public class ToDosRepository : IToDosRepository
    {
        private readonly ToDoContext _context;

        public ToDosRepository(ToDoContext context)
        {
            _context = context;
        }
        public void Add(ToDo todo)
        {
            _context.Add(todo);
            _context.SaveChanges();
        }

        public void Delete(ToDo todo)
        {
            _context.Remove(todo);
            _context.SaveChanges();
        }

        public List<ToDo> GetAll(int userId)
        {
            return _context.ToDos.ToList();
        }

        public ToDo GetById(int todoId)
        {
            return _context.ToDos.Find( todoId);
        }

        public void Update(ToDo todo)
        {
            _context.Update(todo);
            _context.SaveChanges();
        }
    }
}
