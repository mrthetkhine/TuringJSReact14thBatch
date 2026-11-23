export default function Bordered({children})
{
    console.log('children',children);
    return(<div style={{
        border: '1px',
        borderStyle: 'solid',
        borderColor: 'lightgray',
        /*backgroundColor: 'lightgray',*/
    }}>
        {children}
    </div>);
}