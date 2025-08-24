import React, {useEffect, useState} from 'react';
import TaskCard from "./task-card";

function ViewToDo({tasks, onTaskAdded}) {

    const handleTaskComplete = async (task) => {
        const response = await fetch('http://localhost:5067/api/task/complete-task',{
            method : 'PUT',
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({id: task.id})
        })
        onTaskAdded();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

    return (
        <>
            {tasks.length === 0 ? (
                <div className="relative flex flex-col gap-5 items-center justify-center w-11/12 md:w-4/5 lg:w-full h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-y-auto p-4 shadow-lg">
                    <img
                        src="/images/no-content.png"
                        alt="No tasks"
                        className="w-[300px] h-[300px] object-contain"
                    />
                    <p className="dark:text-white text-black text-sm">
                        No Task Created.
                    </p>
                </div>
            ): (
                <div
                    className="relative flex flex-col gap-5 items-center justify-start w-11/12 md:w-4/5 lg:w-full h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-y-auto p-4 shadow-lg">
                    {tasks.map((task, index) => (
                        <TaskCard
                            key={task.id || index}
                            task={task}
                            handleTaskComplete={() => handleTaskComplete(task)}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default ViewToDo;
