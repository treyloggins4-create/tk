'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Star, Users } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Local & Trusted',
    description: 'Proudly serving our community with reliable, trustworthy service',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Work around your schedule with flexible appointment times',
  },
  {
    icon: Star,
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work with a satisfaction guarantee',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About TK Prime Services LLC
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in the cleaning industry, TK Prime Services LLC has built 
              a reputation for delivering exceptional power washing and cleaning services. We pride 
              ourselves on our attention to detail, professional approach, and commitment to customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team uses state-of-the-art equipment and eco-friendly cleaning solutions to ensure 
              the best results for your property while protecting the environment. We believe in building 
              long-term relationships with our clients through reliable, high-quality service.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our 3 Uniques
                </h3>
                <p className="text-gray-600 mb-6">
                  What sets us apart from the competition
                </p>
                
                {/* 3 Uniques */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
                    <div className="text-sm text-gray-600 font-semibold">"Like New" Guarantee</div>
                    <div className="text-xs text-gray-500">If it doesn't look like new, you don't pay</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-2">2</div>
                    <div className="text-sm text-gray-600 font-semibold">Fast, Friendly, Professional</div>
                    <div className="text-xs text-gray-500">On time, quick work, property care</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
                    <div className="text-sm text-gray-600 font-semibold">Complete Care, One Stop</div>
                    <div className="text-xs text-gray-500">Power washing + debris removal + sealing + more</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
