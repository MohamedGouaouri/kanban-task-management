import React from "react";
import logo from '../assets/images/logo-dark.8590e096.svg'
import ThreeDotsIcon from "./icons/ThreeDotsIcon";


const Navbar = () => {
    return <header className="flex w-full items-center top-0 left-0 sm:pr-4 bg-white dark:bg-veryDarkBlue h-24">
        <div className={"hidden items-center sm:flex pl-6 h-20 border-r border-r-lines-light dark:border-r-lines-dark md:h-24 min-w-[256px] lg:min-w-[300px]"}>
            <img src={logo} alt={"logo"} />
        </div>
        <div className="flex w-11/12 h-full items-center">
            <div className="text-black text-xl dark:text-white font-bold px-4">
                Platform Launch
            </div>
            {/* TODO: Add click event */}
            <div className="flex items-center ml-auto gap-2">
                <div className="text-white text-sm font-bold py-3 px-4 rounded-3xl bg-purplePrimary hover:purpleLight">
                    <button>
                        + Add New Task
                    </button>
                </div>
                <ThreeDotsIcon color={"hsl(227, 12%, 61%)"} className="cursor-pointer" />
            </div>
        </div>

    </header>
}


export default Navbar