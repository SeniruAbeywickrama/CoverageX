using Task = ToDoList_API.Models.Domain.Task;

namespace ToDoList_API.Models.DTO;

public class CreateTaskResponse
{
    public string code { get; set; }
    public string message { get; set; }
    public Task task { get; set; }
}