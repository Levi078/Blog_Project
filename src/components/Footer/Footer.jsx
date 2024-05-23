import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8 px-4 border-4 rounded-lg border-slate-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <h3 className="text-xl mb-3 text-slate-400 hover:text-white">Got queries? Drop us an email.</h3>
          <form className="mt-4 flex">
            <input
              className="rounded-md px-4 py-2 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              placeholder="Enter email address"
              type="email"
            />
            <button
              className="ml-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 text-black hover:text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-black hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-black hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/works" className="text-black hover:text-white">
                Works
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-black hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 text-black hover:text-white">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/support" className="text-black hover:text-white">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-black hover:text-white">
                Delivery Details
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-black hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-black hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
