import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../assets/images/logo-dark.8590e096.svg'
import { uiActions } from "../redux/store/ui-slice";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";


const Navbar = () => {

    const theme = useSelector(state => state.ui.theme)
    const dispatch = useDispatch()

    const handleCreateTask = () => {
        dispatch(uiActions.showCreateTaskModal())
    }

    const cls = clsx("sticky flex w-full items-center top-0 left-0 sm:pr-4  dark:bg-veryDarkBlue h-24", theme === 'light' ? "bg-white" : "bg-darkBluePrimary")
    return <header className={cls}>
        <div className={"hidden items-center sm:flex pl-6 h-20 border-r border-r-lines-light dark:border-r-lines-dark md:h-24 min-w-[256px] lg:min-w-[300px]"}>
            <img src={logo} alt={"logo"} />
        </div>
        <div className="flex w-11/12 h-full items-center">
            <div className="text-black text-xl dark:text-white font-bold px-4">
                Platform Launch
            </div>
            {/* TODO: Add click event */}
            <div className="flex items-center ml-auto gap-2">
                <div className="text-white text-sm font-bold py-3 px-4 rounded-3xl bg-purplePrimary hover:purpleLight cursor-pointer"
                    onClick={handleCreateTask}
                >
                    + Add New Task
                </div>
                <ThreeDotsIcon color={"hsl(227, 12%, 61%)"} className="cursor-pointer" />
            </div>
        </div>

    </header>
}


export default Navbar