import {useState} from "react";

export default function Counter()
{
    let [count,setCount] = useState(0);
    let [another,setAnother] =useState(10);
    let c =0;
    console.log('render ',count);
    console.log('C is ',c);
    const incHandler = () => {
        //console.log('inc handler ',count);
        setCount(c=>c + 1);
        setCount(c=>c + 1);
        setCount(c=>c + 1);
        c++;
    }
    const decHandler = () => {
        //console.log('de handler ',count);
        setCount(count -1);

        c--;
    }
    return (<div>
        <button onClick={incHandler}>+</button>
            <h3>{count}</h3>
        <button onClick={decHandler}>-</button>
        <h1>Another {another}</h1>
        <button onClick={()=>setAnother(another+2)}>
            Update Another
        </button>
    </div>)
}