import React, { useState } from "react";
import { HEADER_NAV_LINKS } from "../../data/links";
import logo from "../../assets/images/logo/logo.svg";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Header = ({ navbar }) => {
    let [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <div
            className={classNames(
                navbar === true
                    ? "bg-gradient-to-r from-header1 via-header3 to-header1 fixed top-0 left-0 z-50 w-full text-white"
                    : "fixed top-0 left-0 z-50 w-full bg-white text-header3"
            )}
        >
            <div className="container items-center justify-between py-4 mx-auto lg:flex lg:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
                    <Link to="/" className="w-3/6">
                        <img
                            alt="Snowy mountain lake"
                            className="object-cover w-full h-full"
                            src={logo}
                        />
                    </Link>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute text-3xl cursor-pointer right-8 top-2/4 lg:hidden"
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>
                </div>

                <ul
                    className={`lg:flex md:items-center lg:pb-0 pb-12 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-30 h-screen bg-white" : "top-[-890px]"
                        }`}
                >
                    {HEADER_NAV_LINKS.map((link) => (
                        <li
                            key={link.key}
                            className={`${navbar ? "" : ""}text-sm font-medium   lg:ml-8 lg:my-0 my-7 font-secondary `}
                        >
                            <Link
                                to={link.path}
                                className={classNames(
                                    pathname === link.path
                                        ? "bg-gradient-to-r from-header1 via-header2 to-header3 bg-[length:100%_2px] bg-no-repeat bg-bottom "
                                        : "font-secondary "
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default Header;
