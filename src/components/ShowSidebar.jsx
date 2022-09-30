import React from "react";


const ShowSidebar = ({ toggle }) => {
    return <div
        onClick={() => toggle()}
        className="absolute left-0 bottom-5 px-3 p-2 w-[100px] text-center bg-purplePrimary text-white rounded-r-full hover:bg-purpleLight hover:text-purplePrimary transition-all duration-2000 z-10 cursor-pointer">
        Show
    </div>
}
export default ShowSidebar