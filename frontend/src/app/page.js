'use client';
import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/app/components/HelloWorld";
import Profile from "@/app/components/Profile";
import Gallery from "@/app/components/Gallery";
import JSXDemo from "@/app/components/JSXDemo";
import Greeting from "@/app/components/Greeting";
import Container from "@/app/components/Container";
import Bordered from "@/app/components/Bordered";
import Dashboard from "@/app/components/conditional-render/Dashboard";

export default function Home() {
    console.log('Home page ');
  return (
    <div >
      {/*<h1>Hello from Next.js</h1>*/}
       {/* <HelloWorld/>*/}
       {/* <Profile
            profile={{
                name:"One",
                url:"https://react.dev/images/docs/scientists/MK3eW3Am.jpg"
            }}
            />*/}
        {/*<Gallery/>
        <Greeting/>*/}
        {/*<JSXDemo/>*/}
       {/* <Greeting message={"Hi"}/>*/}



        {/*<Container style={{
                color:'green'
            }}
            message={"Foward props"}
        />*/}
        {/*<Bordered>
            <Greeting message="Hello"/>
            <Profile
                profile={{
                    name:"One",
                    url:"https://react.dev/images/docs/scientists/1bX5QH6.jpg"
                }}
                width={50}
                height={50}
            />
        </Bordered>

        <Bordered>
            <h3>Test bordered</h3>
        </Bordered>*/}
        <Dashboard role={'admin'}></Dashboard>
        <Dashboard role={'user'}></Dashboard>
    </div>
  );
}
