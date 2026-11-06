import {useState, type MouseEvent} from "react"

function Counter () {
    const [count, setCount] = useState (0);

    const handelClick = (e: MouseEvent) =>{
        e.preventDefault();
        // setCount ((state)=> state + 1);
        setCount(count + 1);
    }

    
    return (
        <>
        <h1>{count}</h1>

        <button onClick = {handelClick}>Click me</button>
        </>
    )
}
export default Counter;