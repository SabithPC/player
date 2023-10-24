import { Stack } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

function Cardss() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide container-fluid mt-5"
      >
        <h1>Latest Releases</h1>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          
        </div>
        <div class="carousel-inner " >
          <div class="carousel-item active ">
            <Stack direction="row" spacing={1} height={380}>
              <Card style={{ width: "18rem", }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4911/1604911-i-c9d4b1329741"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Mansion 24</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    horrific events unfold as amrutha searches for
                    her missing father in old mansion
                  </Card.Text>
                  <p>Play Now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6237/1296237-h-5662015305e4"
                  height={'160px'}
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Vikram</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    A covert investigation change its course
                    when special officer amar encounters and
                    its pursuitto take down on notorious drug
                  </Card.Text>
                  <p>Play now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/6976/1386976-h-b93490b80821"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Liger</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    A brave-hearted liger work his way up to
                    find hisdream spot in MMA world
                  </Card.Text>
                  <p>play now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.news18.com/ibnlive/uploads/2023/08/king-of-kotha-review-1-16928718983x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>King of kotha</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    In the omingous village of kotha,'king' raju makes
                    a comeback with cop's aid
                  </Card.Text>
                  <p>Play now</p>{" "}
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F10%2Fdisney-plus-loki-season-2-ai-poster-info-001.jpg?cbr=1&q=90"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Loki</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    NEW EPISODE EVERY FRIDAY AT 6:30 AM. the mercurial
                    villian loki resume his role as the god of mischief in a new series
                  </Card.Text>
                  <p>Play now</p>{" "}
                </Card.Body>
              </Card>
            </Stack>
          </div>
          <div class="carousel-item">
            <Stack direction="row" spacing={1} height={380}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/9550/1000159550/1000159550-h"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Two countries</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    A con man gets lucky when he marries a wealthy indian
                    women settled in canada.life is now a bed of roses for him
                  </Card.Text>
                  <p>Play now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://data1.ibtimes.co.in/en/full/635202/aadu-2-aadu-oru-bheekara-jeeviyanu-jayasurya.jpg"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Aadu</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    shaji papan's tug-of-war team gets a nanny goat as reward for winning a match
                    however,it brings them bad luck.what will the misogynistic do?
                  </Card.Text>
                  <p>Play now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6913/216913-h"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Chunkzz</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    A girl joins an all-boys class of an engineering college
                    and all hell breaks loose.things take a turn for the worse
                    when she gets pregnant
                  </Card.Text>
                  <p>Play now</p>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1676/1000081676/1000081676-h"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Ring master</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Prince name his dog diana,after his ex-flame,an actress.when the dog features in diana's film
                    she becomes jealous and plots to seprate it from its owner
                  </Card.Text>
                  <p>Play now</p>{" "}
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h"
                />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title>Banglore Days</Card.Title>
                  <Card.Text style={{ height: "120px" }}>
                    Three cousins-divya,kuttan and arjun-have always dreamt of living in
                    banglore.when they grt there,they end up discovering their true selves
                  </Card.Text>
                  <p>Play now</p>{" "}
                </Card.Body>
              </Card>
            </Stack>
          </div>
     
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselExampleIndicators1"
        class="carousel slide container-fluid mt-5"
      >
        <h1>Popular channels</h1>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          
        </div>
        <div class="carousel-inner " >
          <div class="carousel-item active ">
            <Stack direction="row" spacing={1} height={160}>
              <Card style={{ width: "18rem", }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4940/1424940-a-6486777c0aa5"
                />
              </Card>

              <Card style={{ width: '18rem', }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4921/1424921-a-209a2f2e2af7"
                  height={'160px'}
                />
              </Card>

              <Card style={{ width: "18rem", height:"100px"}}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4956/1424956-a-5e7b10f2c22a"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4942/1424942-a-6e211260a748"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4918/1424918-a-64e6ffba59a6"
                />
              </Card>
            </Stack>
          </div>
          <div class="carousel-item">
            <Stack direction="row" spacing={1} height={160}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4922/1424922-a-d53d3176ee16"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6449/1576449-a-b50f06fe57c6"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4943/1424943-a-e3a5d328a913"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4934/1424934-a-03765ec160a2"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4927/1424927-a-ef9d55486d37"
                />
              </Card>
            </Stack>
          </div>
     
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
      <div
        id="carouselExampleIndicators2"
        class="carousel slide container-fluid mt-5"
      >
        <h1>Popular Genres</h1>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          
        </div>
        <div class="carousel-inner " >
          <div class="carousel-item active ">
            <Stack direction="row" spacing={1} height={160}>
              <Card style={{ width: "18rem", }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e"
                />
              </Card>

              <Card style={{ width: '18rem', }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69"
                  height={'160px'}
                />
              </Card>

              <Card style={{ width: "18rem", height:"100px"}}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63"
                />
              </Card>
            </Stack>
          </div>
          <div class="carousel-item">
            <Stack direction="row" spacing={1} height={160}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5302/1535302-a-e90748391e0d"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5288/1535288-a-690bac400aa1"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5279/1535279-a-c92b487cb711"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5259/1535259-a-6e0b7daffb29"
                />
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8364/1538364-a-a3b574f36633"
                />
              </Card>
            </Stack>
          </div>
     
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark rounded"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
</div>
      <div className="mt-5  container-fluid ">
        <div className=" partners-banner-module--content--bYVF_">
          <h2 className="ms-5 partners-banner-module--heading--21OVA">
            Sponsored by over 1,232 movie production company and millions of viewers  around the
            world
          </h2>
          <br />
          <ul
            style={{ justifyContent: "space-around", listStyle: "none" }}
            className=" d-flex p-1"
          >
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://entertainment.time.com/wp-content/uploads/sites/3/2012/09/warner_bros-_pictures_intro.jpg?w=720&h=480&crop=1"
                alt="WB"
                width={108}
                height={100}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://www.5dariyanews.com/Uploads/2023/01/02/en-news-18253177-hombale-films-large.jpg"
                alt="Hombale"
                width={121}
                height={104}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://variety.com/wp-content/uploads/2013/07/paramount-studios-logo.jpg"
                alt="Paramount"
                width={147}
                height={100}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75537567-5a6c-4a5e-9a11-ea3255f1ccc4/dfjpb1k-0ebd863a-99b8-4636-8ae2-0cdad16e8e9c.jpg/v1/fill/w_1181,h_676,q_70,strp/_what_if___universal_pictures_logo__2022_present__by_alexthetetrisfan_dfjpb1k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMzIiwicGF0aCI6IlwvZlwvNzU1Mzc1NjctNWE2Yy00YTVlLTlhMTEtZWEzMjU1ZjFjY2M0XC9kZmpwYjFrLTBlYmQ4NjNhLTk5YjgtNDYzNi04YWUyLTBjZGFkMTZlOGU5Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-_HiAnxQa4bl8Fw1bMMA4VWz-zOsIho11yB_3wwfRkE"
                alt="universal"
                width={147}
                height={100}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://yt3.googleusercontent.com/ytc/APkrFKZF9NbT_qxxp4c4wBMSFsXTkUNQ6EHyQ2nY3AvNRw=s900-c-k-c0x00ffffff-no-rj"
                alt="Amal"
                width={128}
                height={98}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://cdn.gulte.com/wp-content/uploads/2023/05/Lyca.jpg"
                alt="lyca"
                width={134}
                height={100}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://d2kjfw7r4xcwtw.cloudfront.net/admin/f065a752-1dea-5aa7-bf14-515bbbc07384.jpg"
                alt="Citi logo"
                width={132}
                height={100}
                loading="lazy"
              />
            </li>
            <li className="partner-logos-module--item--1KtIF">
              <img
                src="https://wallpapercave.com/wp/wp4406569.png"
                alt="Ericsson logo"
                width={145}
                height={98}
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cardss;