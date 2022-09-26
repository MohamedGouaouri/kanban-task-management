import React from "react";

const ThreeDotsIcon = ({ className, color }) => {
    return <i className={className}>
        <svg class="fill-medium-grey" fill={color} width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308"></circle><circle cx="2.308" cy="10" r="2.308"></circle><circle cx="2.308" cy="17.692" r="2.308"></circle></g></svg>
    </i>
}

export default ThreeDotsIcon