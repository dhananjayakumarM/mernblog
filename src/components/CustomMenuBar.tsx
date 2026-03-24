import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Link } from "react-router-dom"

const CustomMenuBar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <Link to={"/"}>
          <MenubarTrigger>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link to={"/about"}>
          <MenubarTrigger>About</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link to={"/projects"}>
          <MenubarTrigger>Projects</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  )
}

export default CustomMenuBar
