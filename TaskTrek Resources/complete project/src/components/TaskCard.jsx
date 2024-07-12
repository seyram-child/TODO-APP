import React, { useState } from "react";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import "./TaskCard.css";

const TaskCard = ({ task, index, handleDelete, handleEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleTagChange = (tag) => {
        setEditedTask((prevTask) => ({
            ...prevTask,
            tags: [tag],
        }));
    };

    const saveChanges = () => {
        handleEdit(index, editedTask);
        setIsEditing(false);
    };

    return (
        <div className="task_card">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="task"
                        value={editedTask.task}
                        onChange={handleInputChange}
                        className="task_edit_input"
                    />
                    <select
                        name="status"
                        value={editedTask.status}
                        onChange={handleInputChange}
                        className="task_status"
                    >
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <div className="task_tags">
                        {["High priority", "Important", "Neutral", "Unimportant"].map((tag) => (
                            <button
                                key={tag}
                                type="button"
                                className={`tag ${editedTask.tags.includes(tag) ? "selected" : ""}`}
                                onClick={() => handleTagChange(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <button onClick={saveChanges} className="task_save_button">
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <p className="task_text">{task.task}</p>
                    <div className="task_card_bottom_line">
                        <div className="task_tags">
                            {task.tags.map((tag, i) => (
                                <span key={i} className="task_tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="task_actions">
                            <img
                                src={editIcon}
                                alt="Edit"
                                className="edit_icon"
                                onClick={() => setIsEditing(true)}
                            />
                            <img
                                src={deleteIcon}
                                alt="Delete"
                                className="delete_icon"
                                onClick={() => handleDelete(index)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
