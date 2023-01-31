import React, { Fragment } from "react";

const FooterSocial = () => {
    return (
        <Fragment>
            <div className="flex items-center mt-10 ml-0 space-x-5 text-2xl md:mt-0 flex-start">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
            </div>
            <div>
                <p className="pt-5 pb-2 text-left">
                    &#169;{new Date().getFullYear()} Bablu Mia All Rights Reserved
                </p>
            </div>
        </Fragment>
    );
};

export default FooterSocial;
