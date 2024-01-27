import React from "react";

const LikePost = (props) => {
    const { increaseCount, count } = props;
    return (
        <>
            <button onClick={increaseCount}>❤️ Post {count}</button>
        </>
    );
};

export default LikePost;
