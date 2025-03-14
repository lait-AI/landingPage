import { Button } from "./components/ui/button"
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Spline from '@splinetool/react-spline/next'
import Header from './components/header'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/XZHuRKH2kw1cO-Ot/scene.splinecode"
            />
          </div>

          <div className="space-y-8 max-w-5xl mx-auto animate-fade-in relative z-10 -mt-24">
            <div className="flex flex-col items-center">
              <div className="relative w-96 h-96 md:w-[40rem] md:h-[40rem] flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Zetlkast Logo"
                  fill
                  className="object-contain invert brightness-0"
                  priority
                />
                <p className="text-xl md:text-xl font bg-white text-transparent bg-clip-text absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[80%] max-w-3xl">
                  Artificial Intelligence for Real Estate Made Easy.
                </p>
              </div>
            </div>
            <div className="pt-8 flex justify-center">
              <Link href="https://www.zetlkast.com/get-started">
                <Button className="text-lg px-10 py-7 bg-white text-black hover:bg-gray-100 transform transition-all hover:scale-105 hover:shadow-lg group">
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
          </div>
        </section>

        {/* First Section */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-white text-center mb-16">
              44% of Paid Leads Are Lost Due to Agent Availability
            </h2>
            <div className="min-h-[400px]"></div>
          </div>
        </section>

        {/* Second Section */}
        <section className="py-24 bg-black/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-white text-center mb-16">
              80% of Leads Would Rather Call Another Agent Than Leave A Voicemail
            </h2>
            <div className="min-h-[400px]"></div>
          </div>
        </section>

        {/* Third Section */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-semibold text-white text-center mb-16">
              Our Solution
            </h2>
            <div className="min-h-[400px]"></div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo and TM */}
            <div className="flex items-center">
              <div className="relative w-12 h-12">
                <Image
                  src="/image.png"
                  alt="Zetlkast Logo"
                  fill
                  className="object-contain invert brightness-0"
                  priority
                />
              </div>
              <span className="text-white ml-2">™</span>
            </div>

            {/* Contact Info */}
            <div className="text-center space-y-2">
              <p className="text-gray-400">
                <a href="mailto:client.zetlkast@gmail.com" className="hover:text-white transition-colors">
                  client.zetlkast@gmail.com
                </a>
              </p>
              <p className="text-gray-400">5032 Forbes Avenue</p>
              <p className="text-gray-400">Est. 2024</p>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              {new Date().getFullYear()} Zetlkast. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}