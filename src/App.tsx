import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import TabletHeader from "./components/TabletHeader"

function App() {
  return (
    <BrowserRouter>
      {/* Tablet */}
      <div className="xs:flex sm:flex md:hidden lg:hidden">
        <TabletHeader />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex lg:flex">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
