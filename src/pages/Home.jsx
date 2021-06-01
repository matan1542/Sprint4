import React from "react";
import { Link } from "react-router-dom";

export function Home() {

  // const handleChange=(ev)=>{
  //     console.log(ev.target.innerText);
  // }

  return (
    <div className="home flex column align-center justify-center">
      <div className="home-hero flex column align-center">
        <h2>Welcome to</h2>
        <h1>WeBuild</h1>
        <Link to="/editor"><button className="btn btn-start w-75 fs28">Click Start to Build your site</button></Link>
      </div>
      {/* <div className="future-card flex"> <h2>Future 1</h2><h2>Img</h2></div>
      <div className="future-card flex row-reverse"> <h2>Future 2</h2><h2>Img</h2></div>
      <div className="future-card flex"> <h2>Future 3</h2><h2>Img</h2></div> */}
    </div>
  );
}

