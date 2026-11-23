import Profile from "@/app/components/Profile";

export default function Greeting({message})
{
    console.log('Props message',message);
    //let message = props.message;
    return(<div style={{
        backgroundColor: 'lightgray',
    }}>

            {message.toUpperCase()}
    </div>);
}