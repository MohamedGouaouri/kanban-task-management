import React from 'react'
import HideIcon from "./icons/HideIcon";
import DashboardIcon from "./icons/DashboardIcon";

const Sidebar = ({ toggle }) => {
    const selected = 0
    return <div className={"flex flex-col align-center border-r  bg-white dark:bg-darkBluePrimary min-h-[calc(100vh-100px)] w-64 lg:w-[300px] pb-10 sm:flex sm:flex-col border-r-lines-light dark:border-r-lines-dark absolute transition-all duration-2000 "}>
        {/*TODO: Change font size to very small*/}
        <p className={"text-mediumGrey px-6 py-4 font-bold text-sm"}>ALL BOARDS (2)</p>

        <div className={"flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-white font-bold bg-purplePrimary hover:bg-hoverPurple"}>
            <DashboardIcon color={selected === 0 ? "#fff" : "hsl(227, 12%, 61%)"} />
            Platform Launch
        </div>

        <div className={"flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-mediumGrey font-bold hover:bg-purpleLight"}>
            <DashboardIcon color={"hsl(227, 12%, 61%)"} />
            Roadmap
        </div>

        <div className={"flex items-center gap-4 w-11/12 rounded-r-full px-6 py-3 cursor-pointer text-purplePrimary font-bold hover:bg-purpleLight"}>
            <DashboardIcon color={"#635FC7"} />
            + Create New board
        </div>

        <div className={"flex flex-col mt-auto items-center py-2"}>
            {/* Color switcher */}
            <div className={"h-12 w-5/6 bg-purpleLight text-center rounded-[12px]"}>
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