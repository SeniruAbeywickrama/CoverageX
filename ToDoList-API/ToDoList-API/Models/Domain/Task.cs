using System.ComponentModel.DataAnnotations;

namespace ToDoList_API.Models.Domain;

public class Task
{
    public Guid Id { get; set; } =  Guid.NewGuid();
    public string Title { get; set; }
    public string Description { get; set; }
    public bool IsDone { get; set; }
    public DateTime DueDate { get; set; } = DateTime.Now;
}