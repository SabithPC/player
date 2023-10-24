import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Globe, Search, ShoppingCart,Home,Plus,Download} from "react-feather";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";


function Header() {
  return (
    <div className="nav1 container-fluid">
      <Navbar className="mt-2" style={{backgroundColor:"brown"}}>
     
        <Navbar.Brand className="" href="#home">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/903/347/small/gold-abstract-letter-s-logo-for-negative-video-recording-film-production-free-vector.jpg"
            width="120"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Link className="ms-2 m-3" href="#home" style={{color:"yellow" }}>
          <Home width={'18px'}/>
          Home
        </Nav.Link>
        <Nav.Link className="ms-2 m-3" href="#home" style={{color:"yellow" }}>
          <Plus width={'18px'}/>
          Watchlist
        </Nav.Link>
        
            <Nav.Link className="ms-3" href="#home" style={{color:"yellow"}}>
              <Download width={'18px'}/>
          Downloads
        </Nav.Link>
        

        <Form
          className="d-flex ms-3 "
          style={{
            borderRadius: "30px",
            width: "450px",
            height: "48px",
            border: "1px solid black",
          }}
        >
          <div className="m-2 ms-3">
            <Search color="black" size={"10px"} />
          </div>
          <input
            style={{
              width: "420px",
              border: "none",
              outline: "none",
              marginLeft: "10px",
            }}
            type="text"
            placeholder="search movie here"
          />
        </Form>

       
       
        <Nav.Link className="ms-3" href="#home">
          {" "}
          <ShoppingCart />
        </Nav.Link>

        <Stack direction="row" spacing={0.5} className="ms-3">
          
          <Button variant="outlined" className="text-dark " style={{borderRadius:'1px', textTransform:'initial',border:'1px black solid', fontWeight:'bold'}}>Log in</Button>
          <Button variant="contained" className="bg-dark" style={{ fontWeight:'bold',borderRadius:'1px', textTransform:'initial'}}>Sign up </Button>
          <Button variant="outlined" className="text-dark " style={{fontWeight:'bold',borderRadius:'1px',border:'1px black solid'}}><Globe /></Button>

        </Stack>
        <Button variant="contained" className="bg-secondary ms-5" style={{ fontWeight:'bold',borderRadius:'1px', textTransform:'initial', width:"170px", height:"50px"}}>book your ticket</Button>
      </Navbar>
    
    </div>
  );
}

export default Header;