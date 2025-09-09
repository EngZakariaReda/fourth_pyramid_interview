import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

export default function Layout() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
    </>
  )
}
