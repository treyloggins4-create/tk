'use client'

import { motion } from 'framer-motion'
import { SprayCan, Leaf, Trash2, Home, CheckCircle, ArrowRight, Shield } from 'lucide-react'

const services = [
  {
    icon: SprayCan,
    title: 'Power Washing',
    description: 'Professional pressure washing for driveways, sidewalks, patios, and exterior surfaces. Remove dirt, grime, and stains effectively.',
    features: ['Driveway cleaning', 'Sidewalk restoration', 'Patio cleaning', 'Exterior wall cleaning'],
    featured: true,
  },
  {
    icon: Leaf,
    title: 'Leaf Cleanup',
    description: 'Complete leaf removal and yard cleanup services to keep your property looking pristine year-round.',
    features: ['Yard cleanup', 'Leaf removal', 'Debris clearing', 'Seasonal maintenance'],
    featured: false,
  },
  {
    icon: Home,
    title: 'Debris Removal',
    description: 'Professional debris removal and cleanup services to keep your property clean and safe.',
    features: ['Debris cleanup', 'Yard waste removal', 'Property clearing', 'Maintenance services'],
    featured: false,
  },
  {
    icon: Shield,
    title: 'Sealing',
    description: 'Protect and enhance your surfaces with professional sealing services. Extend the life of your driveways, patios, and walkways.',
    features: ['Driveway sealing', 'Patio protection', 'Concrete sealing', 'Asphalt maintenance'],
    featured: false,
  },
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: 'Efficient junk and debris removal services for residential and commercial properties.',
    features: ['Furniture removal', 'Debris cleanup', 'Yard waste', 'Construction debris'],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions for your property. From power washing to junk removal, 
            we provide professional services that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                service.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-8 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  service.featured ? 'bg-primary-100' : 'bg-gray-100'
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.featured ? 'text-primary-600' : 'text-gray-600'
                  }`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  service.featured ? 'text-primary-600' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`mb-6 ${
                  service.featured ? 'text-lg' : 'text-base'
                } text-gray-600`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote today and see the difference professional cleaning makes.
            </p>
            <a
              href="#contact"
              className="btn bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
