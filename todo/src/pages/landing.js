import React, {useEffect, useState} from 'react';
import AddToDo from "../components/add-to-do";
import ViewToDo from "../components/view-todo";

function Landing() {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await fetch("http://localhost:5067/api/task/get-task");
            const data = await res.json();

            if(data.code == "404"){
                console.log("No data")
                setTasks([]);
                return;
            }
            setTasks(data.tasks);
            console.log(data);
        } catch (err) {
            console.error("Error fetching tasks:", err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2  bg-gradient-to-r gap-20 from-orange-300 via-amber-200 to-yellow-100 dark:from-slate-950 dark:via-gray-800 dark:to-gray-700 min-h-screen p-4 md:p-10 gap-6">

                {/* Left */}
                <div className="relative flex flex-col items-center justify-center mb-10 text-black dark:text-white">
                    <h1 className="text-4xl mb-10 font-extralight">To-Do List</h1>
                    <AddToDo onTaskAdded={fetchTasks}/>
                    <br/>
                    {/* Mobile */}
                    <div className="absolute md:hidden left-1/2 bottom-0 -translate-x-1/2 w-[100%] h-1 bg-gray-600 dark:bg-gray-200 rounded"></div>

                    {/* Desktop */}
                    <div className="absolute hidden md:block right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-1 bg-gray-600 dark:bg-gray-200 rounded"></div>

                </div>

                {/* Right */}
                <div className="flex items-center justify-center">
                    <ViewToDo tasks={tasks} onTaskAdded={fetchTasks}/>
                </div>
            </div>

        </>
    );
}

export default Landing;
