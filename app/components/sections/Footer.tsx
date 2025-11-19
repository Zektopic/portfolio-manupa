import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  return (
    <footer className="mt-12 text-center text-muted-foreground">
      <Separator className="w-32 mx-auto my-6 bg-gradient-to-r from-primary to-primary/50" />
      <p className="text-sm">© 2025 Manupa Wickramasinghe. All rights reserved.</p>
      <p className="text-xs mt-2">Built with Next.js, Tailwind CSS & deployed via Cloudflare Tunnel</p>
    </footer>
  )
}