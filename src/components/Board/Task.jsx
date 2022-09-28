import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/store/ui-slice";

const Task = ({ task }) => {
    const compeletedSubtasks = task.subtasks && task.subtasks.filter(st => {
        return st.completed === true
    }
    )
    console.log(task.subtasks)

    const dispatch = useDispatch()

    return <div
        onClick={() => {
            dispatch(uiActions.setSelectedTask({
                task
            }))
        }}
        className="flex flex-col gap-1 bg-white px-6 py-3 rounded-md shadow-md cursor-pointer hover:text-purplePrimary"
    >
        <div className="font-semibold  ">
            {task["title"]}
        </div>
        <div className="font-semibold text-mediumGrey text-xs">
            {task.subtasks.length > 0 ? <>{compeletedSubtasks.length} of {task.subtasks.length} subtasks</> : <>No subtasks</>}
        </div>
    </div>
}

export default Task