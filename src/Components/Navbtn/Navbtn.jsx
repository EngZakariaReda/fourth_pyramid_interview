import { Link, useLocation } from "react-router-dom"
import "./Navbtn.css"

export default function Navbtn({children , onClick}) {
    const {pathname} = useLocation()
    const pagepath = pathname === "/" ? "home" :  pathname.replace("/","")
  return (
    <>
      <Link to={ children === "home" ? "/" : children } 
        className={`${ pagepath === children ? "active" :"text-dark" } bg-transparent border-0 text-capitalize fs-4`}
        onClick={onClick}
      >
        {children}
      </Link>  
    </>
  )
}
