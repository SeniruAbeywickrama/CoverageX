using Microsoft.AspNetCore.Mvc;
using ToDoList_API.Models.DTO;
using ToDoList_API.Repositories.Task;

namespace ToDoList_API.Controller;

[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase
{
    private readonly ITaskRepository _taskRepo;

    public TaskController(ITaskRepository taskRepo)
    {
        _taskRepo = taskRepo;
    }

    [HttpPost("create-task")]
    public async Task<IActionResult> CreateTask(CreateTaskRequest request)
    {
        var response = await _taskRepo.CreateTask(request);
        
        if (response.code == "401")
        {
            return BadRequest(response);
        }
        return Ok(response);
    }

    [HttpGet("get-task")]
    public async Task<IActionResult> GetTask()
    {
        var response = await _taskRepo.GetTask();
        
        if (response.code == "404")
        {
            return BadRequest(response);
        }
        return Ok(response);
        
    }
    
    [HttpGet("test")]
    public async Task<IActionResult> Test()
    {
        return Ok("Wroking");
        
    }
    
    [HttpPut("complete-task")]
    public async Task<IActionResult> CompleteTask(CompleteTaskRequest request)
    {
        var response = await _taskRepo.CompleteTask(request);
        
        if (response.code == "404")
        {
            return BadRequest(response);
        }
        return Ok(response);
    }
}