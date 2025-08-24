using Microsoft.EntityFrameworkCore;
using Task = ToDoList_API.Models.Domain.Task;

namespace ToDoList_API.Data;

public class AppDbContext :  DbContext
{
    public AppDbContext(DbContextOptions options)  : base(options) {}
    
    public DbSet<Task> Tasks { get; set; }
}