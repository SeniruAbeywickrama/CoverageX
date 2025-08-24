import React from 'react';

function TaskCard(props) {
    return (
        <>
            {props.task.isDone && (
                <div className="w-full bg-green-200 dark:bg-green-900 rounded-2xl px-10 py-6 text-left opacity-70">
                    <div className="flex justify-between" key={props.index}>
                        <div className="flex flex-col gap-4 w-1/2 overflow-hidden">
                            <p className="text-xl dark:text-gray-50 text-gray-900 font-bold">{props.task.title}</p>
                            <p className="text-sm dark:text-gray-200 text-gray-600 font-light">{props.task.description}</p>
                        </div>
                        <button type="submit" disabled
                            className="bg-white dark:bg-sky-950 border text-xs border-blue-400 dark:text-white text-gray-800 h-9 w-32 rounded-md cursor-not-allowed "
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
            {!props.task.isDone && (
                <div className="w-full bg-amber-200 dark:bg-sky-900 rounded-2xl px-10 py-6 text-left">
                    <div className="flex justify-between" key={props.index}>
                        <div className="flex flex-col gap-4 w-1/2 overflow-hidden">
                            <p className="text-xl dark:text-gray-50 text-gray-900 font-bold">{props.task.title}</p>
                            <p className="text-sm dark:text-gray-200 text-gray-600 font-light">{props.task.description}</p>
                        </div>
                        <button type="submit" onClick={()=>props.handleTaskComplete(props.task)} className="bg-white text-xs dark:bg-sky-950 border border-blue-400 dark:text-white text-gray-800 hover:text-white h-9 w-32 rounded-md hover:bg-green-700 hover:bg-green-700">
                            Done
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default TaskCard;
