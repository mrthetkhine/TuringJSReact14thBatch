function User()
{
    return(<div>User</div>);
}
function Admin()
{
    return(<div>Admin</div>);
}
export default function Dashboard({role})
{
    if(role=='admin')
    {
        return <Admin/>
    }
    else {
        return <User/>
    }
}