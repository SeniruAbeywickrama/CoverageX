namespace ToDoList_API.Models.DTO;

public class GetTaskResponse
{
    public string code { get; set; }
    public string message { get; set; }
    public Array tasks { get; set; }
}