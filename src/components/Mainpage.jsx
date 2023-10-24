import { Button } from "@mui/material";
import React from "react";
// import Stack from '@mui/material/Stack';



function Mainpage() {
  return (
    <>
      <div id="carouselExample" class="carousel slide container-fluid mt-4 ms-4">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              width="1440"
              height="560"
              alt=""
              src="https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/10/18/leo-poster.jpg"
              loading="lazy"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              width="1440"
              height="560"
              alt=""
              src="https://www.nowrunning.com/content/movie/2023/rdx-26817/bg4_rdx.jpg"
              loading="eager"
            />
          </div>
          <div class="carousel-item">
            <img
              width="1440"
              height="560"
              alt=""
              src="https://i.ytimg.com/vi/dk6jjQOO2ls/sddefault.jpg"
              loading="eager"
            />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     
      {/* text */}
      <div className="text m-3">
        <h1>Free Movies For You</h1>
        <p>
          Limited Period Offer
        </p>

        <Button variant="outlined" className="text-dark bg-info " style={{borderRadius:'1px', textTransform:'initial',border:'1px black solid', fontWeight:'bold', width:'200px'}}>Check for offers</Button>

    

      </div>

    





    
    </>
  );
}

export default Mainpage;