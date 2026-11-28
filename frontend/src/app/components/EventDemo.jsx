function AnotherUI({onClick})
{
    return (<div onClick={onClick}>
        Another UI
    </div>)
}
export default function EventDemo(){
    const handler = (e)=>{
        console.log('Clicked button ',e);
    }
    return (<div>
        <div>
            EventDemo
            <button type={"button"}
                    onClick={handler}>
                Click
            </button>
            <AnotherUI onClick={handler}>

            </AnotherUI>
        </div>
    </div>);
}