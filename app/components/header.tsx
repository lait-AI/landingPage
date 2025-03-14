import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-[2px] border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 md:w-24 md:h-24 -my-4">
                <Image
                  src="/image.png"
                  alt="Zetlkast Logo"
                  fill
                  className="object-contain invert brightness-0"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+14173522153" 
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Link href="https://www.zetlkast.com/about">
              <Button variant="ghost" className="text-white hover:bg-white/5 font-bold">
                About
              </Button>
            </Link>
            <Link href="https://www.zetlkast.com/docs">
              <Button variant="ghost" className="text-white hover:bg-white/5 font-bold">
                Docs
              </Button>
            </Link>
            <Link href="https://www.zetlkast.com/login">
              <Button variant="ghost" className="text-white hover:bg-white/5 font-bold">
                Login
              </Button>
            </Link>
            <Link href="https://www.zetlkast.com/get-started">
              <Button className="bg-white/10 text-white hover:bg-white/15 font-bold border border-white/20">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="tel:+14173522153" 
              className="flex items-center text-white hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
