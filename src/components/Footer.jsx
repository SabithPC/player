import { Button } from "@mui/material";
import React from "react";
import { Globe } from "react-feather";
function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className=" text-center text-lg-start bg-success text-light mt-5">
        <div  className="d-flex pt-5  me-3">
          <div
            className="d-flex"
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
            <ul>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">Get the app</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">terms</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">support</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">About us</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">Contact us</li>
              </a>
            </ul>
  
            <ul>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">career</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">blog</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">help</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">Affiliate</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">investors</li>
              </a>
            </ul>
  
            <ul>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">cookies</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">privacy policy</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">global sitemap</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">local sitemap</li>
              </a>
              <a href="" style={{ textDecoration: "none", color: "yellow" }}>
                <li class="list-group-item">Accessibility</li>
              </a>
            </ul>
          </div>
          <div style={{marginLeft:'400px', width:'200px'}}>
          <Button
            variant="outlined"
            className="text-light "
            style={{
              borderRadius: "1px",
              textTransform: "initial",
              border: "1px white solid",
              fontWeight: "bold",
            }}
          >
            <Globe width={"20px"} />
            English 
          </Button>
        </div>
        </div>
        
        <div className="ms-5 mt-5 ps-5 ">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/903/347/small/gold-abstract-letter-s-logo-for-negative-video-recording-film-production-free-vector.jpg"
            width="120"
            height="90"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>

        <div className="text-center" style={{color:'yellow'}}>
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            style={{ textDecoration: "none", color:'yellow' }}
            href="https://mdbootstrap.com/"
          >
            2023 MOVIES, Inc.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}

export default Footer;