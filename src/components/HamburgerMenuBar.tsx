import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

const HamburgerMenuBar = () => {
  return (
    <Sheet>
      {/* Trigger (your hamburger button) */}
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      {/* Drawer content */}
      <SheetContent side="right" className="w-64">
        <div className="mt-6 flex flex-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default HamburgerMenuBar
