import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Authcontextprovider from './Components/Context/Authcontext'
import Myroutes from './Components/Routes/Myroutes'
import "./App.css"

export default function App() {
  return (
    <Authcontextprovider>
      <Myroutes />
    </Authcontextprovider>
  )
}
