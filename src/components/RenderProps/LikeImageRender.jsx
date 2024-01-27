import React from "react";

const LikeImage = (props) => {
    return (
        <>
            <button onClick={props.increaseCount}>❤️ Image {props.count}</button>
        </>
    );
};

export default LikeImage;
