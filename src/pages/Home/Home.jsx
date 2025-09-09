import { Link } from "react-router-dom";
import Centertext from "../../Components/Centertext/Centertext";
import Products from "../../Components/Products/Products";
import Manalone from "../../Components/Manalone/Manalone";
import Heroimg from "../../Components/Heroimg/Heroimg";
import "./Home.css"

export default function Home() {
  return (
    <>
      <Heroimg />
      <Centertext>
        get started with 
        <span className="special-text"> little </span>
        fashion
      </Centertext>

      <Manalone />

      <div className="row m-0 g-0 woman-parent">
          <div className="col-md-6 col-sm-12 child">
              <img 
                src="/images/woman.webp" alt="img" 
                loading="lazy"
                className="w-100 h-100" 
              />
          </div>

          <div className="col-md-6 col-sm-12 ps-5 woman-detail">
              <div className="h-100 d-flex flex-column justify-content-center gap-3 text-capitalize">
                <h4 className="fs-1 fw-bolder">
                  <span className="special-text">retail </span>
                   shop owner
                </h4>
                <p className="fs-3 text-secondary">Credits go to Unsplash and FreePik websites for images used in 
                  this Little Fashion by Tooplate
                </p>
                <Link className="text-dark">explore products</Link>
              </div>
          </div>
      </div>

      <Centertext>
        featured products 
      </Centertext>

      <Products />
    </>
  )
}


/* 

<div className="h-100 ">

                <div className="d-flex flex-column gap-2">
                  <h4 className="fw-bold fs-4 text-capitalize">
                    <p className="m-0">Good <span className="special-text">Design</span></p>
                    <p className="m-0">Ideas for<span className="special-text"> your </span>fashion</p>
                  </h4>

                  <div className="d-flex flex-column gap-3">
                    <p className="text-secondary m-0">
                      Little Fashion templates comes with sign sign up pages, 
                      product listing / product detail, about, FAQs, and contact page
                    </p>
                    <p className="text-secondary m-0">
                      Since this HTML template is based on Boostrap 5 CSS library, 
                      you can feel free add more components as you need.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <Link className="text-dark">LEARN MORE ABOUT US</Link>
                  </p>
                </div>

              </div>




*/