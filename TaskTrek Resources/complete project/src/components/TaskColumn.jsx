import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete, handleEdit }) => {
    return (
        <section className="task_column">
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={icon} alt="" /> {title}
            </h2>
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    task={task}
                    index={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </section>
    );
};

export default TaskColumn;
