import {useState} from "react";

export default function ObjectState() {
    console.log('render ObjectState');
    let [user,setUser]= useState({
        name:"Jhon Wick",
        age: 51
    });
    const updateHandler = ()=>{
        //user.name = "Change";
        //user.age = 31;

        /*setUser({
            name: "Change",
            age: 31
        });*/
        setUser({
            ...user,
            age: user.age +1,
        })
    };
    return (<div>
        User Name  {user.name}
        <br/>
        Age {user.age}
        <button type={"button"} onClick={updateHandler}>
            Update
        </button>
    </div>);
}