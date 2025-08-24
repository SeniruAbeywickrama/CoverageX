namespace ToDoList_API.Models.DTO;

public class CreateTaskRequest
{
    public string Title { get; set; }
    public string Description { get; set; }
    public bool IsDone { get; set; }
}