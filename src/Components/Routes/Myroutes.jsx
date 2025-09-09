import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Layout from '../Layout/Layout'
import Scrolltotop from '../Scrolltotop/Scrolltotop'

export default function Myroutes() {
  return (
    <>
        <BrowserRouter>
              <Scrolltotop />
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path='story' element={<Home />} />
                    <Route path='products' element={<Home />} />
                    <Route path='faqs' element={<Home />} />
                    <Route path='contact' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
