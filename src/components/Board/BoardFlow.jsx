import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { tasksSelector } from "../../redux/orm";
import Task from "./Task";

const BoardFlow = ({ taskGroup }) => {

    const tasks = useSelector(state => tasksSelector(state))
    const filteredTasks = tasks.filter(t => {
        return t.groupId === taskGroup.id
    })
    return <section
        className="w-[300px] box-content"
    >
        <div className="flex items-center mb-6 gap-2 ">
            <div className={clsx("rounded-full h-5 w-5", `${taskGroup.color}`)} ></div>
            <div className="font-semibold text-mediumGrey">{taskGroup.title} {tasks.length > 0 ? <>( {tasks.length} )</> : <></>}</div>
        </div>
        <div className="flex flex-col gap-5">
            {filteredTasks && filteredTasks.map(task => {
                return <Task task={task} />
            })}
        </div>
    </section>
}

export default BoardFlow
