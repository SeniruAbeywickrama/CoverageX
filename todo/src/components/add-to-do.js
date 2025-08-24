import React, {useState} from 'react';

function AddToDo({onTaskAdded}) {

    const [formData,setFormData] = useState({
        title : "",
        description:""
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.description.trim()) newErrors.description = "Description is required";
        return newErrors;
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Pass data to parent
        createTask(formData);
        // Reset form
        setFormData({ title: "", description: "" });
        setErrors({});
    }

    const createTask = async (formData) => {
        try {
            const response =  await fetch('http://localhost:5067/api/task/create-task',{
                method : 'POST',
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            onTaskAdded();
            console.log("Task created:", result);
        }catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div className="bg-white dark:bg-slate-600 rounded-2xl p-6 md:p-10
                    w-11/12 md:w-4/5 lg:w-3/5
                    max-h-[80vh] overflow-y-auto shadow-lg">
                <form className="max-w-md mx-auto text-left" onSubmit={handleSubmit}>
                    <h1 className="text-2xl mb-6 text-black dark:text-white font-semibold text-center md:text-left">
                        Add a Task
                    </h1>

                    {/* Title */}
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter task title"
                        />
                        {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title}</p>}
                    </div>

                    {/* Description */}
                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                       focus:ring-blue-500 focus:border-blue-500
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter task description"
                        ></textarea>
                        {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-blue-800 border border-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out
             shadow-md hover:shadow-lg"
                    >
                        Add
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddToDo;
