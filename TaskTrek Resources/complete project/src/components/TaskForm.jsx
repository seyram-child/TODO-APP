import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });

    const selectTag = (tag) => {
        setTaskData((prev) => ({ ...prev, tags: [tag] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskData.task.trim()) {
            alert("Task cannot be empty");
            return;
        }
        setTasks((prev) => [...prev, taskData]);
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    };

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    className="task_input"
                    placeholder="Enter your task"
                    onChange={handleChange}
                />
                <div className="task_form_bottom_line">
                    <div className="priority_tags">
                        <Tag tagName="High priority" selectTag={selectTag} selected={taskData.tags.includes("High priority")} />
                        <Tag tagName="Important" selectTag={selectTag} selected={taskData.tags.includes("Important")} />
                        <Tag tagName="Neutral" selectTag={selectTag} selected={taskData.tags.includes("Neutral")} />
                        <Tag tagName="Unimportant" selectTag={selectTag} selected={taskData.tags.includes("Unimportant")} />
                    </div>
                    <div>
                        <select
                            name="status"
                            value={taskData.status}
                            className="task_status"
                            onChange={handleChange}
                        >
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type="submit" className="task_submit">
                            + Add Task
                        </button>
                    </div>
                </div>
            </form>
        </header>
    );
};

export default TaskForm;
