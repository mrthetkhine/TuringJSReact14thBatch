export default function Profile({profile,width=150,height=150}){
    //let url = "https://react.dev/images/docs/scientists/MK3eW3Am.jpg";
    return(<div >
        <h3 style={{
            textAlign: "center"
        }}>{profile.name}</h3>
        <img
            style={{
                borderRadius: '50%',
                objectFit: 'cover',
                width:width,
                height:height
            }}
            src={profile.url}
            alt="Katherine Johnson"
        />
    </div>);
}