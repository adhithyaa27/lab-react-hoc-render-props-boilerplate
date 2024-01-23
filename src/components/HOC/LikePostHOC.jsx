import React from "react";

const LikePost = (props) => {
    const { increaseCount, count } = props;
    return (
        <>
            <button onClick={increaseCount}>Like Post {count}</button>
        </>
    );
};

export default LikePost;
