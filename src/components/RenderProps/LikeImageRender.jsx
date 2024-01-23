import React from "react";

const LikeImage = (props) => {
    return (
        <>
            <button onClick={props.increaseCount}>Like Image {props.count}</button>
        </>
    );
};

export default LikeImage;
