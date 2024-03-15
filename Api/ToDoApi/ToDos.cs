using ToDoRepository;

namespace ToDoApi
{
    public static class ToDos
    {
        public static List<ToDo> ToDosData { get; set; } = new List<ToDo>
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
