import React from "react";
import BoardFlow from "./Board/BoardFlow";

const Main = () => {
    return <div
        className="relative min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-auto bg-light-grey dark:bg-very-dark-grey transition-all md:translate-x-[300px] lg:translate-x-[300px]"
    >
        <div className="mx-auto w-11/12 pt-6 pb-24 px-2 ">
            <div className="flex gap-8">
                <BoardFlow boardId={0} columnId={0} />
                <BoardFlow boardId={0} columnId={1} />
            </div>
        </div>
    </div>
}

export default Main