import { IoReorderFourSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { CiSaveUp2 } from "react-icons/ci";
import Navbtn from "../Navbtn/Navbtn";
import "./Navbar.css"
import { useContext } from "react";
import { Authcontext } from "../Context/Authcontext";

export default function Navbar() {
  const {viewsidebar , setviewsidebar } = useContext(Authcontext);  
  return (
    <nav>
      <div className="container w-100 h-100 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="text-capitalize">little <span className="special-text">fashion</span></h2>
        </div>

        <div className="d-flex gap-4 align-items-center links">
            <Navbtn>home</Navbtn>
            <Navbtn>story</Navbtn>
            <Navbtn>products</Navbtn>
            <Navbtn>faqs</Navbtn>
            <Navbtn>contact</Navbtn>
        </div>

        <div className="d-flex gap-2 align-items-center fs-3">
          <button 
            className="text-capitalize bg-transparent border-0 sideicon"
            onClick={()=>setviewsidebar(true)}
          >
            <IoReorderFourSharp />
          </button>
          <button className="text-capitalize bg-transparent border-0">
            <IoIosPerson />
          </button>
          <button className="text-capitalize bg-transparent border-0">
            <CiSaveUp2 />
          </button>
        </div>
      </div>
    </nav>
  )
}