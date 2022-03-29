import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{height:"50px",
                    width:"100%",
                    padding:"20px",
                    border:"1px solid black",
                    display:"flex",
                    justifyContent:"space-around"
                }
                    }>

                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to={"/users"} >Userlist</Link>

    </nav>
  )
}

export default Navbar