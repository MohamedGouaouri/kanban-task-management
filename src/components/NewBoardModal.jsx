import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../redux/store/ui-slice";

const NewBoardModal = () => {
    const dispatch = useDispatch()

    // TODO: Z-index should be changed dynamicaly
    return <div className="absolute flex items-start justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={(e) => {
            e.stopPropagation()
            dispatch(uiActions.hideBoardModal())
        }}
    >
        <div className="w-[500px] min-h-max bg-white m-auto rounded-lg" onClick={(e) => {
            e.stopPropagation()
            console.log("overload")
        }}>
            <form className="flex flex-col p-5">
                <div className="font-semibold  text-lg">Add New Board</div>
                <label htmlFor="board-name" className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Board Name</label>
                <input id="board-name" placeholder="e.g Web Design" className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />

                {/* TODO: Retreive board columns from store */}
                <label htmlFor="board-cols" className="mt-5 mb-2 text-sm text-mediumGrey font-semibold">Board Columns</label>
                <input id="board-cols" placeholder="e.g Todo" className=" mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />

                <input id="board-cols" placeholder="e.g Doing" className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />

                <input id="board-cols" placeholder="e.g Done" className="mb-5 peer px-4 py-2 text-black dark:text-white dark:bg-mediumGrey text-sm rounded transition-colors outline outline-1 outline-mediumGrey/25 cursor-pointer hover:outline-purplePrimary focus:outline-purplePrimary placeholder:text-black/25 dark:placeholder:text-white/25" />

                <div className="flex flex-col justify-between gap-5">
                    <div className="rounded-full bg-purpleLight py-2 px-4 text-center text-purplePrimary font-semibold text-sm cursor-pointer hover:bg-hoverPurple hover:text-white">
                        + Add New Colmun
                    </div>
                    <div className="rounded-full bg-purplePrimary py-2 px-4 text-center text-white font-semibold text-sm cursor-pointer hover:bg-hoverPurple">
                        Create New Board
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default NewBoardModal