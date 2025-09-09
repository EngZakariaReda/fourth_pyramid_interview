import { Link } from "react-router-dom";
import { FaYoutube , FaFacebook , FaWhatsapp } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="container-fluid py-5">
      <div className="container text-secondary text-capitalize">
        <div className="row m-0">

          <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column gap-3">
                 <h4 className="mb-5">little <span className="text-white">fashion</span></h4>
                 <p>copyright @ 2022 <span className="text-white">little fasion</span></p>
                 <p>deigned by tooplate</p>
              </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column gap-2">
                 <h4 className="text-white">sitemap</h4>
                 <Link to={"/"} className="text-secondary">story</Link>
                 <p className="mb-0">privacy policay</p>
                 <Link to={"/"} className="text-secondary">contact</Link>
              </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-3 mt-5">
                 <Link to={"/"} className="text-secondary">products</Link>
                 <Link to={"/"} className="text-secondary">faqs</Link>

              </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-3">
                 <h4 className="text-white">social</h4>
                 <div className="d-flex gap-3">
                    <Link to={"/"} className="text-white"><SlSocialInstagram /></Link>
                    <Link to={"/"} className="text-white"><FaWhatsapp /></Link>
                    <Link to={"/"} className="text-white"><FaFacebook /></Link>
                    <Link to={"/"} className="text-white"><FaYoutube /></Link>
                 </div>
              </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}