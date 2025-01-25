// import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 text-sm">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-6 gap-y-10">
    {/* Solutions Column */}
    <div className="flex-1 min-w-[200px]">
      <h3 className="text-lg font-semibold mb-4">Solutions</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Marketing</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Analytics</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Automation</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Commerce</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Insights</a></li>
      </ul>
    </div>

    {/* Support Column */}
    <div className="flex-1 min-w-[200px]">
      <h3 className="text-lg font-semibold mb-4">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Submit ticket</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
      </ul>
    </div>

    {/* Company Column */}
    <div className="flex-1 min-w-[200px]">
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Jobs</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
      </ul>
    </div>

    {/* Legal Column */}
    <div className="flex-1 min-w-[200px]">
      <h3 className="text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition">License</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="flex-1 min-w-[300px]">
      <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
      <p className="text-gray-400 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
      <div className="flex">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-grow px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring focus:ring-indigo-500" 
        />
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-500 transition">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div className="mt-10 border-t border-gray-700 pt-6 text-center">
    <p className="text-gray-500">&copy; 2024 Your Company, Inc. All rights reserved.</p>
    <h2 className="mt-2 text-gray-300 font-semibold">Made By Chill Guys with ♥</h2>
  </div>
</footer>
    </div>
  )
}

export default Footer
