import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../redux/store/ui-slice";

const TaskDetailsModal = ({ task }) => {

    const completedSubtasks = task.subtasks.filter(st => {
        return st.completed === true
    })

    const dispatch = useDispatch()

    return <div className="absolute flex items-start justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={(e) => {
            e.stopPropagation()
            dispatch(uiActions.hideTask())

        }}
    >
        <div className="w-[500px] min-h-max bg-white m-auto rounded-lg" onClick={(e) => {
            e.stopPropagation()
        }}>
            <form className="flex flex-col p-5">
                <div className="font-semibold  text-lg">{task.title}</div>

                <label className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Subtasks ({completedSubtasks.length} of {task.subtasks.length})</label>

                {task.subtasks.map((st, idx) => {
                    return <div className="flex flex-col gap-2" key={idx}

                    >
                        <label onClick={(e) => {
                            e.stopPropagation()
                            dispatch(uiActions.toggleTaskCompleted({
                                taskId: task.id,
                                subtaskId: st.id,
                                columnId: 0,
                            }))
                        }}
                            className="cursor-pointer bg-light-grey dark:bg-very-dark-grey dark:hover:bg-purplePrimary/25 p-4 flex items-center gap-4 rounded hover:bg-purplePrimary hover:bg-opacity-25">
                            <div className="relative">
                                <input className="cursor-pointer" type="checkbox" onClick={(e) => e.stopPropagation()} checked={st.completed ? true : false} />
                            </div>
                            <span className={clsx(
                                "text-black dark:text-white text-xs font-bold text-opacity-50 dark:text-opacity-50",
                                st.completed ? "line-through" : ""
                            )}>{st.title}</span>
                        </label>
                    </div>
                })}

            </form>
        </div>
    </div>
}

export default TaskDetailsModal