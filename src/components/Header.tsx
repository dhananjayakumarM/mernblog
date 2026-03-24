import { Button } from "@/components/ui/button"
import { SearchForm } from "./SearchForm"
import CustomMenuBar from "./CustomMenuBar"
import ThemeToggleButton from "./ThemeToggleButton"
import { Link } from "react-router-dom"
// import { Sun, SunMoon } from "lucide-react"

const Header = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "100%",
        height: "5vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"}>
        <span>DJ</span>Blog
      </Link>
      {/* search bar */}
      <SearchForm />
      {/* menubar  */}
      <CustomMenuBar />
      <div style={{ display: "flex" }}>
        <ThemeToggleButton />
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
