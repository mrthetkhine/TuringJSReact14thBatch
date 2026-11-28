function UserProfile()
{
    return <div>
        User
    </div>
}
function AdminProfile()
{
    return <div>
        Admin
    </div>
}
export default function AccountProfile({role})
{
   /* let Comp;
    if(role=='admin')
    {
        Comp = AdminProfile;
    }
    else
    {
        Comp = UserProfile
    }*/
    let comp;
    if( role == 'admin')
    {
        comp= <AdminProfile/>
    }
    else
    {
        comp =<UserProfile/>
    }
    return(<div>
        Account Profile
       {/* <Comp/>*/}
        {comp}
    </div>);
}