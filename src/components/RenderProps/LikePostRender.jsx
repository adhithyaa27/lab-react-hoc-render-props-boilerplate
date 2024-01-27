import React from "react";

const LikePost = (props) => {

    return (
        <>
            <button onClick={props.increaseCount}>❤️ Post {props.count}</button>
        </>
    );

}
export default LikePost