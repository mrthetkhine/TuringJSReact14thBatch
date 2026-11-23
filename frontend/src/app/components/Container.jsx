import Greeting from "@/app/components/Greeting";

export default function Container(props)
{
    return (<div>
        <span>Container</span>
        <Greeting {...props}/>
    </div>)
}