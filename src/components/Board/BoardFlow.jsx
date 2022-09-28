import clsx from "clsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskDetailsModal from "../TaskDetailsModal";
import Task from "./Task";
const randomColor = require('randomcolor');

const BoardFlow = ({ boardId, columnId }) => {
    const board = useSelector(state => {
        return state.ui.boards.filter(board => {
            return board.id === boardId
        })
    })

    const column = board.length >= 0 && board[0].boardColumns.filter(col => {
        return col.id === columnId
    })

    return <section
        className="w-[300px] box-content"
    >
        <div className="flex items-center mb-6 gap-2 ">
            <div className={clsx("rounded-full h-5 w-5", `bg-[${column && column[0].color}]`)} ></div>
            <div>{column && column[0].type}</div>
        </div>
        <div className="flex flex-col gap-5">
            {column && column[0].tasks.map(task => {
                return <Task task={task} />
            })}
        </div>
    </section>
}

export default BoardFlow
