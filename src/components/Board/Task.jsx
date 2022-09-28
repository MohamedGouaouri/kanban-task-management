import React from "react";

const Task = ({ task }) => {
    const compeletedSubtasks = task.subtasks && task.subtasks.filter(st => {
        return st.completed === true
    }
    )
    return <div
        className="flex flex-col gap-1 bg-white px-6 py-3 rounded-md shadow-md cursor-pointer"
    >
        <div className="font-semibold hover:text-purplePrimary ">
            {task["title"]}
        </div>
        <div className="font-semibold text-mediumGrey text-xs">
            {task.subtasks.length > 0 ? <>{compeletedSubtasks.length} of {task.subtasks.length} subtasks</> : <>No subtasks</>}
        </div>
    </div>
}

export default Task