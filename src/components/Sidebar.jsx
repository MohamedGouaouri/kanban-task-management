import React from 'react'
import HideIcon from "./icons/HideIcon";
import DashboardIcon from "./icons/DashboardIcon";
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../redux/store/ui-slice';
import { boardsSelector } from '../redux/orm';
import SunIcon from './icons/SunIcon';
import Toggle from './Toggle';
import MoonIcon from './icons/MoonIcon';
// import ShowSidebar from './ShowSidebar';

const Sidebar = ({ className, visible, toggle }) => {
    const dispatch = useDispatch()
    const boards = useSelector(state => boardsSelector(state))
    const selectedBoard = useSelector(state => state.ui.selectedBoard)
    // const sidebarShowed = useSelector(state => state.ui.sidebarShowed)


    const handleCreateBoard = () => {
        // dispatch(uiActions.addBoard())
        dispatch(uiActions.showCreateBoardModal())
    }

    return <div className={className}>
        {/*TODO: Change font size to very small*/}
        <p className={"text-mediumGrey px-6 py-4 font-bold text-sm"}>ALL BOARDS ({boards.length})</p>

        {boards.map((board, idx) => {
            return <div className={clsx("flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-white font-bold", selectedBoard === idx ? "bg-purplePrimary hover:bg-hoverPurple" : "text-mediumGrey hover:bg-purpleLight hover:text-purplePrimary")}>
                <DashboardIcon color={selectedBoard === idx ? "#fff" : "hsl(227, 12%, 61%)"} />
                {board.boardName}
            </div>
        })}

        <div className={"flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-purplePrimary font-bold hover:bg-purpleLight"}
            onClick={handleCreateBoard}
        >
            <DashboardIcon color={"#635FC7"} />
            + Create New board
        </div>

        <div className={"flex flex-col mt-auto items-center py-2"}>
            {/* Color switcher */}
            <div className={"flex justify-around items-center mx-auto h-12 w-5/6 bg-purpleLight text-center rounded-[12px]"}>
                <SunIcon color={"hsl(227, 12%, 61%)"} />
                <Toggle onToggle={() => {
                    dispatch(uiActions.toggleTheme())
                }} />
                <MoonIcon color={"hsl(227, 12%, 61%)"} />
            </div>
        </div>
        <div className={"flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-mediumGrey font-bold fill-white hover:bg-purpleLight"}
            onClick={toggle}
        >
            <HideIcon color={"hsl(227, 12%, 61%)"} />
            Hide board
        </div>

    </div>
}
export default Sidebar