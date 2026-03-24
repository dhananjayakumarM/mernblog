// import { Button } from "@base-ui/react"
import { Sun, SunMoon } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // If it's light, go dark. If it's anything else (dark/system), go light.
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant={"outline"}
      onClick={toggleTheme}
      className="flex items-center gap-2"
      size={"lg"}
    >
      {/* If light show Sun, else show SunMoon */}
      {theme === "light" ? <Sun size={20} /> : <SunMoon size={20} />}
    </Button>
  )
}

export default ThemeToggleButton
