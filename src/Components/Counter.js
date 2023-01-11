import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); 
    const [multiplication, setMultiplication] = useState(0);

    useEffect(() => {
        setMultiplication(() => count * 10);
        console.log("triggered");
    }, [count]);

    return (
        <div >
            <p>Count: {count}</p>
            <button onClick={() => setCount( count + 1)}>click for multiplication</button>
            <p>Calculation: {multiplication}</p>
        </div>
    );
}