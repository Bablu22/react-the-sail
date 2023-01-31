import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, path }) => {
    return (
        <Link
            to={path}
            className="px-8 py-2 text-lg font-bold tracking-widest text-white uppercase bg-gradient-to-r via-header1 from-header1 to-header3 font-primary"
        >
            {title}
        </Link>
    );
};

export default Button;
