import React from "react";
import PropTypes from "prop-types";

export const Tittle = (props) => {
    return (
        <h1 className={`text-center mt-5 text-${props.color}`}>{props.text}</h1>
    )
}