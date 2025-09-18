'use client'

import { motion } from 'framer-motion'
import { SprayCan, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-primary-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Professional{' '}
              <span className="text-primary-600">Power Washing</span>{' '}
              Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your property with our expert power washing and cleaning services. 
              From driveways to gutters, we make it shine with professional results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="btn btn-primary inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                className="btn btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <SprayCan className="h-16 w-16 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Professional Power Washing
              </h3>
              <p className="text-gray-600 mb-6">
                State-of-the-art equipment and eco-friendly solutions
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-primary-50 rounded-lg p-3">
                  <div className="font-semibold text-primary-700">Driveways</div>
                  <div className="text-primary-600">Pressure Washing</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-3">
                  <div className="font-semibold text-primary-700">Debris</div>
                  <div className="text-primary-600">Removal</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-3">
                  <div className="font-semibold text-primary-700">Patios</div>
                  <div className="text-primary-600">Surface Restoration</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-3">
                  <div className="font-semibold text-primary-700">Sidewalks</div>
                  <div className="text-primary-600">Stain Removal</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
