import React, { useState } from "react";

const RenderProps = (props) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            {props.render(count, increaseCount)}
        </>
    );
};

export default RenderProps;
