'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main>
      <div className="w-full min-h-screen max-w-[1400px] mx-auto px-8 py-24">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-light mb-12 text-center text-white">
            About Us
          </h1>
          
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 mb-12">
            <h2 className="text-2xl font-light mb-6 text-white/90">Our Mission</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We are a passionate team dedicated to creating innovative solutions that make a difference in the world of finance. Our work spans various fields, from technology and design to creative industries, aiming to provide meaningful experiences for our audience.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              At Finatic Labs, we believe in collaboration, creativity, and continuous learning. Our goal is to transform NBFC operations with comprehensive software solutions that enhance security, compliance, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className={`text-center transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-4">Innovation</h3>
                <p className="text-white/60">
                  We push boundaries with creative solutions, constantly seeking new ways to solve complex financial problems.
                </p>
              </div>
            </div>
            
            <div className={`text-center transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-4">Collaboration</h3>
                <p className="text-white/60">
                  We work together towards excellence, combining our diverse skills and perspectives to deliver outstanding results.
                </p>
              </div>
            </div>
            
            <div className={`text-center transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl text-white/90 font-medium mb-4">Learning</h3>
                <p className="text-white/60">
                  We embrace continuous growth and improvement, staying at the forefront of technology and industry trends.
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 mt-12 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-light mb-6 text-white/90">Our Vision</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              We envision a future where NBFCs can operate with maximum efficiency and security, empowered by intelligent software solutions that adapt to their unique needs.
            </p>
          </div>
          
          <div className={`bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/5 mt-12 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-2xl font-light mb-6 text-center text-white/90">Our Founder</h2>
            
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 mb-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <div className="text-left">
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Girendra Trivedi, Founder of Finatic Labs, brings over 14 years of deep-rooted leadership and domain expertise in financial services to the world of fintech. With a proven track record across top-tier institutions like Cholamandalam Investment & Finance, Sundaram Finance and Jumbo Finvest, Girendra has consistently driven operational excellence, technological innovation, and business growth.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Girendra's early adoption of technology—introducing tablet-based loan processing and online auction systems—demonstrated how digital tools can transform traditional lending operations. This insight laid the foundation for Finatic Labs, a venture committed to developing high-impact, industry-specific software solutions for NBFCs.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  Under his leadership, Finatic Labs merges robust financial knowledge with modern technological capabilities to empower lending institutions with smarter, faster, and more secure operations. His extensive field experience in commercial vehicle, tractor, construction equipment, home loan, and LAP financing directly informs Finatic's end-to-end software suite—designed to streamline NBFC processes, enhance compliance, and ensure data integrity.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  At Finatic Labs, Girendra leads a passionate team that shares his mission: to build technology that understands finance from the ground up.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link href="/waitlist" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors text-center">
              Join Our Waitlist
            </Link>
            <Link href="/" className="bg-white/90 hover:bg-white text-black px-6 py-3 rounded-lg transition-colors text-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 