import React, { Fragment } from "react";

const FeedbackItem = ({ item }) => {
    return (
        <Fragment>
            <div className="h-64 max-w-xl overflow-hidden feedback_item mr-5">
                <p className="my-4 text-sm ">{item.message}</p>
                <p>{item.name}</p>
                <p>{item.degisnation}</p>
            </div>
        </Fragment>
    );
};

export default FeedbackItem;
