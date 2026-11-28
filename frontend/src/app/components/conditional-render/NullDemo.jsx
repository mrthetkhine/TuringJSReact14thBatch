export default function NullDemo({flag})
{
    /*if(flag){
        return null;
    }
    else {
        return <div>Something</div>
    }*/
    return (<div>
        NullDemo
        {
            flag && <div>With Flag</div>
        }
    </div>)
}