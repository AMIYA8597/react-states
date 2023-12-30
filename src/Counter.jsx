import { useState } from "react"

export default function Counter() {
    // let count =0;
    // let arr = useState(0);
    // console.log(arr);

    let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0)

    let inCreaseCount = () => {
        // count=count +1;
        setCount(count +1);
        console.log(count);

    }

// function inCount() {
//     count+=1;
//     console.log(count);
// }

return (
    <div>
    <h3>
        Count ={count}
    </h3>
    {/* <button > Increase Count </button> */}
    {/* <button onClick={inCount}> Increase Count </button> */}
    <button onClick={inCreaseCount}> Increase Count </button>
    </div>
)


}