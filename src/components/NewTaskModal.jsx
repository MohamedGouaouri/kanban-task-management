import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/models/Task";
import { boardsSelector, taskGroupsSelector } from "../redux/orm";
import { uiActions } from "../redux/store/ui-slice";

const NewTaskModal = () => {
    const selectedBoard = useSelector(state => state.ui.selectedBoard)
    const taskGroups = useSelector(state => {
        const tgs = taskGroupsSelector(state)
        return tgs.filter(tg => {
            return tg.boardId === selectedBoard
        })
    })
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [selectedColumn, setColumn] = useState(null)
    const [subtasks, setSubtasks] = useState([])

    const handleCreateNewTask = () => {
        if (taskName === "") return
        dispatch(createTask({
            title: taskName,
            taskDescription: taskName,
            completed: false,
            groupId: selectedColumn
        }))
        dispatch(uiActions.hideTaskModal())

    }
    const handleSelectColumn = (e) => {
        setColumn(parseInt(e.target.value))
    }

    const handleAddSubtask = (e) => {
        const subtask = {
            id: subtasks.length,
            title: "",
            completed: false
        }
        const newSubtasks = Array.from(subtasks)
        newSubtasks.push(subtask)
        setSubtasks(newSubtasks)
    }

    return <div className="absolute flex items-start justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={(e) => {
            e.stopPropagation()
            dispatch(uiActions.hideTaskModal())
        }}
    >
        <div className="w-[500px] min-h-max bg-white m-auto rounded-lg" onClick={(e) => {
            e.stopPropagation()
        }}>
            <form className="flex flex-col p-5">
                <div className="font-semibold  text-lg">Add New Task</div>
                <label htmlFor="board-name" className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Title</label>
                <input id="board-name" onChange={(e) => {
                    setTaskName(e.target.value)
                }} placeholder="e.g Web Design" className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />


                <label className="mb-2 text-sm text-mediumGrey font-semibold">Description</label>
                <textarea
                    name="Description"
                    rows="4"
                    id="Description"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    class="resize-none px-4 py-2 text-black dark:text-white dark:bg-dark-grey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." spellcheck="false"></textarea>



                <label htmlFor="subtasks" className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Subtasks</label>
                {/* {subtasks.map((st, idx) => {
                    return <input
                        placeholder={`e.g Sub${idx + 1}`}
                        key={idx}
                        className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />
                })} */}
                <div className="flex flex-col justify-between gap-5">
                    <div
                        // onClick={handleAddSubtask}
                        className="rounded-full bg-purpleLight py-2 px-4 text-center text-purplePrimary font-semibold text-sm cursor-pointer hover:bg-hoverPurple hover:text-white">
                        + Add New Subtask
                    </div>
                    <div>
                        <label for="columns" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
                        <select id="columns"
                            onChange={handleSelectColumn}
                            value={selectedColumn}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a column</option>
                            {taskGroups && taskGroups.map((col, idx) => {
                                return <option value={col.id} key={idx}>{col.title}</option>
                            })}
                        </select>
                    </div>
                    <div
                        onClick={handleCreateNewTask}
                        className="rounded-full bg-purplePrimary py-2 px-4 text-center text-white font-semibold text-sm cursor-pointer hover:bg-hoverPurple">
                        Create New Task
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default NewTaskModal