import { Search } from "lucide-react"

// import { Label } from "@/components/ui/label"
// import { SidebarInput } from "@/components/ui/sidebar"

export function MobileSearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative inline-flex h-9 w-12 cursor-pointer items-center justify-center rounded-full border bg-background hover:bg-muted">
        <Search className="size-4 opacity-60" />
      </div>
    </form>
  )
}
