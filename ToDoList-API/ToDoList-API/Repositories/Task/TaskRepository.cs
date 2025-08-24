using Microsoft.EntityFrameworkCore;
using ToDoList_API.Data;
using ToDoList_API.Models.DTO;

namespace ToDoList_API.Repositories.Task;

public class TaskRepository : ITaskRepository
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;

    public TaskRepository(AppDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }
    
    public async Task<CreateTaskResponse> CreateTask(CreateTaskRequest request)
    {
        var task = new Models.Domain.Task
        {
            Title = request.Title,
            Description = request.Description,
            IsDone = request.IsDone,
        };
        
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        return new CreateTaskResponse
        {
            code = "200",
            message = "Task created",
            task = task
        };
    }

    public async Task<GetTaskResponse> GetTask()
    {
        // Only fetch the pendings
        var tasks = await _context.Tasks.Where(u => u.IsDone == false).ToListAsync();
      
        if (tasks == null || tasks.Count == 0)
        {
            return new GetTaskResponse
            {
                code = "404",
                message = "Task not found",
                tasks = null
            };
        }

        return new GetTaskResponse
        {
            code = "200",
            message = "Tasks found",
            tasks = tasks.ToArray()
        };
    }

    public async Task<CompleteTaskResponse> CompleteTask(CompleteTaskRequest request)
    {
        var task = await _context.Tasks.FindAsync(request.id);

        if (task == null)
        {
            return new CompleteTaskResponse
            {
                code = "404",
                message = "Task not found",
            };
        }
        
        task.IsDone = true;

        _context.Tasks.Update(task);
        await _context.SaveChangesAsync();

        return new CompleteTaskResponse
        {
            code = "200",
            message = "Task completed",
        };
    }
}