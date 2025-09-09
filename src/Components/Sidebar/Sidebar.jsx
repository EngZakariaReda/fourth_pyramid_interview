import Navbtn from '../Navbtn/Navbtn'
import { RiCloseLargeFill } from "react-icons/ri";
import { useContext } from 'react';
import { Authcontext } from '../Context/Authcontext';
import './Sidebar.css'

export default function Sidebar() {
  const {viewsidebar , setviewsidebar } = useContext(Authcontext);
  return (
    <>
        <aside className={viewsidebar ? "active" : "" }>
            <div className='d-flex flex-column gap-4 child bg-white h-100 p-4'>
                <div className='d-flex justify-content-between'>
                    <Navbtn onClick={()=>setviewsidebar(false)}>home</Navbtn>
                    <button 
                        className="text-capitalize bg-transparent border-0"
                        onClick={()=>setviewsidebar(false)}
                    >
                        <RiCloseLargeFill />
                    </button>
                </div>
                <Navbtn onClick={()=>setviewsidebar(false)} >story</Navbtn>
                <Navbtn onClick={()=>setviewsidebar(false)} >products</Navbtn>
                <Navbtn onClick={()=>setviewsidebar(false)} >faqs</Navbtn>
                <Navbtn onClick={()=>setviewsidebar(false)} >contact</Navbtn>
            </div>
        </aside>
    </>
  )
}
