import ScrollArea from "@xico2k/react-scroll-area/lib/components/ScrollArea";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskGroupsSelector } from "../redux/orm";
import { uiActions } from "../redux/store/ui-slice";
import BoardFlow from "./Board/BoardFlow";

const Main = () => {
    const selectedBoard = useSelector(state => state.ui.selectedBoard)

    const taskGroups = useSelector(state => {
        const tgs = taskGroupsSelector(state)
        return tgs.filter(tg => {
            return tg.boardId === selectedBoard
        })
    })
    console.log("TASK GROUPS", taskGroups)
    const dispatch = useDispatch()

    const handleAddColumn = () => {
        dispatch(uiActions.showCreateTaskGroupModal())
    }

    const cls = clsx("w-[calc(100vw-300px)] min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-auto dark:bg-very-dark-grey transition-all")

    return <div
        className={cls}
    >
        <div className="mx-auto w-full pt-6 pb-24 px-2">
            <div className="flex gap-8 ">
                {taskGroups && taskGroups.map((tg, idx) => {
                    return <BoardFlow taskGroup={tg} />
                })}
                <button
                    className="text-mediumGrey font-semibold cursor-pointer p-2 rounded-md m-0 w-fit h-fit hover:bg-purpleLight"
                    onClick={handleAddColumn}
                >
                    + Add column
                </button>

            </div>
        </div>
        {/* <ReactDragscroll>

        </ReactDragscroll> */}

    </div>
}

export default Main