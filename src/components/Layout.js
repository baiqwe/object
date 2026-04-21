import { Navigation } from './Navigation'
import { Footer } from '@/components/Footer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
