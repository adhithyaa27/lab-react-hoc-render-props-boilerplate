import React, { useState } from "react";

const HigherOrder = (PassedComponent) => {
    const NewComponent = () => {
        let [count, setCount] = useState(0);

        const increaseCount = () => {
            setCount(count + 1);
        };

        return (
            <>
                <PassedComponent increaseCount={increaseCount} count={count} />
            </>
        );
    };

    return NewComponent;
};

export default HigherOrder;
