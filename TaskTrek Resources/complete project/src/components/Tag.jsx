import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        "High priority": { backgroundColor: "#fda821" },
        "Important": { backgroundColor: "#15d4c8" },
        "Neutral": { backgroundColor: "#ffd12c" },
        "Unimportant": { backgroundColor: "#f9f9f9" },
        default: { backgroundColor: "#f0f0f0" },
    };

    return (
        <button
            type='button'
            className={`tag ${selected ? "selected" : ""}`}
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
