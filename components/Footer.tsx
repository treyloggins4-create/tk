import Link from 'next/link'
import { SprayCan, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <SprayCan className="h-8 w-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold">TK Prime Services LLC</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional power washing and cleaning services for residential and commercial properties. 
              We transform your property with expert care and attention to detail.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-primary-400" />
                <span>(517) 302-7743</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-primary-400" />
                <span>treyloggins18@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-primary-400" />
                <span>40 miles surrounding Fowlerville, MI</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Power Washing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Sealing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Leaf Cleanup
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Debris Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 TK Prime Services LLC. All rights reserved. | (517) 302-7743
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}
