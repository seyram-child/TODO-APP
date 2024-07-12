import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleDelete = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
    };

    const handleEdit = (index, updatedTask) => {
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks[index] = updatedTask;
            return newTasks;
        });
    };

    const filteredTasks = tasks.filter((task) =>
        task.task.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search_input"
            />
            <TaskForm setTasks={setTasks} />
            <div className="task_columns">
                <TaskColumn
                    title="To Do"
                    icon="icon/path"
                    tasks={filteredTasks.filter((task) => task.status === "todo")}
                    status="todo"
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
                <TaskColumn
                    title="Doing"
                    icon="icon/path"
                    tasks={filteredTasks.filter((task) => task.status === "doing")}
                    status="doing"
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
                <TaskColumn
                    title="Done"
                    icon="icon/path"
                    tasks={filteredTasks.filter((task) => task.status === "done")}
                    status="done"
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    );
};

export default App;
