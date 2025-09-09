import { Link } from "react-router-dom";
import { useState } from "react";
import './Manalone.css'

export default function Manalone() {
    const links = ["introduction" , "how we work?" ,"capabilites"];
    const [active , setactive] = useState("introduction")
  return (
    <>
      <div className="container aloneman-parent">
            <div className="row m-0 g-5 justify-content-center aloneman">

                <div className="col-lg-2 col-sm-12 child">
                    <div className="h-100 d-flex flex-column justify-content-center">
                       {
                        links.map((item , index)=>(
                            <Link 
                                key={index} 
                                className={`${item === active ? "activeside" : ""} border-start text-dark border-dark p-2 text-capitalize fs-5`}
                                onClick={()=>{setactive(item)}}
                            >
                                {item}
                            </Link>
                        ))
                       }
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 child">
                    <img 
                        src="/images/man.webp" alt="img" 
                        loading="lazy"
                        className="w-100 h-100 manimg" 
                    />
                </div>

                <div className="col-lg-4 col-sm-12 child">
                    <div className="h-100 d-flex flex-column justify-content-between">
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
                            <Link className="text-dark">LEARN MORE ABOUT US</Link>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
    </>
  )
}
