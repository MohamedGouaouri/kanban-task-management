import React from "react";
import ShowIcon from "./icons/ShowIcon";


const ShowSidebar = ({ toggle }) => {
    return <div
        onClick={() => toggle()}
        className="absolute flex justify-center items-center left-0 bottom-5 px-6 p-3 text-center bg-purplePrimary text-white rounded-r-full hover:bg-purpleLight hover:text-purplePrimary transition-all duration-2000 z-10 cursor-pointer">
        <ShowIcon />
    </div>
}
export default ShowSidebar