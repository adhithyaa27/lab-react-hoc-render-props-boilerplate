import React from "react";

const LikePost = (props) => {

    return (
        <>
            <button onClick={props.increaseCount}>Like Post {props.count}</button>
        </>
    );

}
export default LikePost