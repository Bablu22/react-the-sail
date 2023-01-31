import React, { Fragment } from "react";

const FeedbackItem = ({ item }) => {
    return (
        <Fragment>
            <div className="w-full h-56 max-w-sm overflow-hidden feedback_item ml-28">
                <p className="my-4 text-sm ">{item.message}</p>
                <p>{item.name}</p>
                <p>{item.degisnation}</p>
            </div>
        </Fragment>
    );
};

export default FeedbackItem;
