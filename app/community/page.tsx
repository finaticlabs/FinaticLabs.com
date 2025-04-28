import React from 'react';
import BlogCard from '../components/BlogCard'

export default function CommunityPage() {
  const blogPosts = [
    {
      title: "The Rise of AI in Financial Services: Transforming Banking in 2024",
      excerpt: "Artificial intelligence has revolutionized financial services with unprecedented levels of personalization. From advanced spending pattern analysis to predictive analytics, discover how AI is reshaping the future of banking and what it means for both consumers and institutions.",
      date: "March 15, 2024",
      readTime: "5 min",
      slug: "ai-in-financial-services-2024"
    },
    {
      title: "Blockchain's Green Revolution: Sustainable Finance Technology",
      excerpt: "As environmental concerns take center stage, the financial industry is making significant strides in developing greener blockchain solutions. Learn about the latest innovations in sustainable blockchain technology and their impact on the future of digital finance.",
      date: "March 12, 2024",
      readTime: "4 min",
      slug: "blockchain-green-revolution"
    },
    {
      title: "Healthcare Meets IoT: The Internet of Medical Things in 2024",
      excerpt: "The Internet of Medical Things (IoMT) is transforming healthcare delivery through connected devices and real-time monitoring. Explore how this technology is improving patient care, enabling preventive medicine, and revolutionizing the healthcare industry.",
      date: "March 8, 2024",
      readTime: "6 min",
      slug: "healthcare-iomt-2024"
    }
  ]

  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold" style={{ color: '#ffffff' }}>
            Technology Insights
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the latest technological innovations across finance, healthcare, and other industries. Stay informed about the developments shaping our future.
          </p>
        </div>
        
        <div className="grid gap-6 mt-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}