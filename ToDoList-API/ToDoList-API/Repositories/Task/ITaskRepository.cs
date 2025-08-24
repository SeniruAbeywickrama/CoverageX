using ToDoList_API.Models.DTO;

namespace ToDoList_API.Repositories.Task;

public interface ITaskRepository
{
    Task<CreateTaskResponse> CreateTask(CreateTaskRequest request);
    Task<GetTaskResponse> GetTask();
    
    Task<CompleteTaskResponse> CompleteTask(CompleteTaskRequest request);

}