import { useState } from "react";

export default function Counter({ message }) {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            {`${message}: ${count}`}
        </button>
    );
}