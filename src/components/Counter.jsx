import { useState } from "react";

function Counter(props) {
    const [value, setValue] = useState(props.value || 0);

    function handleClick() {
        setValue(value+1);
    }

    return <button onClick={handleClick}>{value}</button>;
}

export default Counter;