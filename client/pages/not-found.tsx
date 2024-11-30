import { Button } from "@/components/ui/button"
import { MoveLeft, RefreshCw } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen fixed top-0 left-0 w-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-foreground px-4">
        <h1 className="text-6xl font-bold mb-4 animate-pulse">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <div className="max-w-md mx-auto mb-8">
          <p className="mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p>
            Don't worry, let's get you back on track!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild variant="secondary" className="group">
            <a href="/">
              <MoveLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Home
            </a>
          </Button>
          <Button
            variant="outline"
            className="group"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  )
}

