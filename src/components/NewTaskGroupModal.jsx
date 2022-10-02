import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskGroup } from "../redux/models/TaskGroup";
import { uiActions } from "../redux/store/ui-slice";
import choose from "../utils/choose";

const colors = ["bg-[#e85133]", "bg-[#e8c733]", "bg-[#78e833]", "bg-[#33e86c]", 'bg-[#336fe8]', 'bg-[#6333e8]', 'bg-[#c433e8]', 'bg-[#e83391]', 'bg-[black]']

const NewTaskGroupModal = () => {
    const selectedBoard = useSelector(state => state.ui.selectedBoard)

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleCreateNewTaskGroup = () => {
        dispatch(createTaskGroup({
            boardId: selectedBoard,
            title: name,
            color: choose(colors)
        }))
        dispatch(uiActions.hideTaskGroupeModal())
    }


    return <div className="absolute flex items-start justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={(e) => {
            e.stopPropagation()
            dispatch(uiActions.hideTaskGroupeModal())
        }}
    >
        <div className="w-[500px] min-h-max bg-white m-auto rounded-lg" onClick={(e) => {
            e.stopPropagation()
        }}>
            <form className="flex flex-col p-5">
                <div className="font-semibold  text-lg">Add New Column</div>
                <label htmlFor="board-name" className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Title</label>
                <input id="board-name" onChange={(e) => {
                    setName(e.target.value)
                }} placeholder="e.g Todo" className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />


                <label className="mb-2 text-sm text-mediumGrey font-semibold">Description</label>
                <textarea
                    name="Description"
                    rows="4"
                    id="Description"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    class="resize-none px-4 py-2 text-black dark:text-white dark:bg-dark-grey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." spellcheck="false"></textarea>



                <div className="flex flex-col justify-between gap-5 my-5">
                    <div
                        onClick={handleCreateNewTaskGroup}
                        className="rounded-full bg-purplePrimary py-2 px-4 text-center text-white font-semibold text-sm cursor-pointer hover:bg-hoverPurple">
                        Add
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default NewTaskGroupModal