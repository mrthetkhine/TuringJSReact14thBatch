export default function EventPropagation() {
    const parentHandler = (e)=>{
        console.log('Parent Handler');
    }
    const childHandler = (e)=>{
        console.log('Child Handler');
        e.stopPropagation();
    }
    const rightClickHandler = (e)=>{
        console.log('Right Click Handler');
        e.preventDefault();
    }
    return (<div onClick={parentHandler}>
        Parent
        <div onClick={childHandler} onContextMenu={rightClickHandler}>
            Child
        </div>
    </div>)
}