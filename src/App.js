
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import EventDemo from "./EventDemo"
import Counter from "./Counter"
import Sumdemo from "./Sumdemo"
function App() {
  return (<>
    <h1>My React App</h1>
    <Router>
    <Link to='home'>Home</Link>|
    <Link to='about'>About</Link>|
    <Link to='contact'>Contact</Link>|
    <Link to='eventdemo'>Event</Link> |
    <Link to='counter'>Counter</Link> |
    <Link to='sumdemo'>SumDemo</Link>
      <Routes>
      <Route element={<Home/>} path="/home"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<EventDemo/>} path="/eventdemo"/>
      <Route element={<Counter/>} path="/counter"/>
      <Route element={<Sumdemo/>} path="/sumdemo"/>
      <Route element={<h1>404 Page Not Found</h1>} path="*"/>
      </Routes>

    </Router>
  </>)
}
export default App