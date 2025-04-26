'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setIsClient(true)
  }, [])

  return (
    <main className="relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        {isClient && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/new.mp4" type="video/mp4" />
          </video>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="w-full min-h-screen max-w-[1400px] mx-auto px-8 py-24 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-light mb-12 text-center text-white">
            Our Products
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product 1 */}
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg transition-all duration-700 delay-100 transform hover:border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-white/90">Financial Utility and Credit Kit</h2>
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                A comprehensive set of financial tools designed specifically for NBFCs to streamline loan processing, credit assessment, and financial management operations.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl text-white/90 font-medium mb-3">Credit Assessment</h3>
                  <p className="text-white/70">
                    Advanced algorithms for risk evaluation and credit scoring tailored to your specific lending criteria.
                  </p>
                </div>
                
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl text-white/90 font-medium mb-3">Loan Processing</h3>
                  <p className="text-white/70">
                    End-to-end digital loan processing system with application tracking, verification, and approval workflows.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-lg transition-all duration-700 delay-200 transform hover:border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-white/90">Reports and Analytics Workflow</h2>
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Advanced analytics and reporting platform that transforms your financial data into actionable insights through customizable dashboards and intelligent reporting workflows.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl text-white/90 font-medium mb-3">Customizable Dashboards</h3>
                  <p className="text-white/70">
                    Build tailored dashboards to monitor key performance indicators in real-time with the ability to visualize any data in any form.
                  </p>
                </div>
                
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl text-white/90 font-medium mb-3">Regulatory Reporting</h3>
                  <p className="text-white/70">
                    Automated generation of compliance reports aligned with the latest regulatory requirements for NBFCs.
                  </p>
                </div>
                
                <div className="bg-black/40 p-5 rounded-xl border border-white/10">
                  <h3 className="text-xl text-white/90 font-medium mb-3">Data Visualization</h3>
                  <p className="text-white/70">
                    Interactive charts and graphs that transform complex financial data into clear, understandable visual formats.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link href="/waitlist" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors text-center">
              Request Demo
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