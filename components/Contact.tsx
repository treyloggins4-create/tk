'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ServiceAreaMap from './ServiceAreaMap'
import MultiSelect from './MultiSelect'
import { submitContactForm } from '@/lib/contact-form'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(517) 302-7743',
    description: 'Call us for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'treyloggins18@gmail.com',
    description: 'Send us an email anytime',
  },
  {
    icon: MapPin,
    title: 'Service Area',
    details: '40 miles surrounding Fowlerville, MI',
    description: 'We serve the local community',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon-Fri: 8AM-6PM',
    description: 'Sat: 9AM-4PM',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate that at least one service is selected
    if (formData.services.length === 0) {
      setSubmitStatus('error')
      setSubmitMessage('Please select at least one service.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      // Convert services array to string for database storage
      const formDataForSubmission = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.services.join(', '),
        message: formData.message
      }
      
      const result = await submitContactForm(formDataForSubmission)
      
      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          services: [],
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your property? Contact us today for a free estimate. 
            We'll respond within 24 hours with a detailed quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Needed *
                  </label>
                  <MultiSelect
                    options={[
                      { value: 'power-washing', label: 'Power Washing' },
                      { value: 'sealing', label: 'Sealing' },
                      { value: 'leaf-cleanup', label: 'Leaf Cleanup' },
                      { value: 'junk-removal', label: 'Junk Removal' },
                      { value: 'debris-removal', label: 'Debris Removal' }
                    ]}
                    value={formData.services}
                    onChange={(services) => setFormData({ ...formData, services })}
                    placeholder="Select services..."
                    required
                  />
                  {formData.services.length === 0 && (
                    <p className="mt-1 text-sm text-red-600">Please select at least one service</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your project, property size, and any specific requirements..."
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <p className="text-green-800 text-sm">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                  <p className="text-red-800 text-sm">{submitMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help with all your cleaning needs. Reach out to us 
                through any of the channels below, and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-primary-600 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Emergency Service</h4>
              <p className="mb-4">
                Need immediate assistance? We offer emergency cleaning services 
                for urgent situations.
              </p>
              <a
                href="tel:5173027743"
                className="inline-flex items-center text-white font-semibold hover:underline"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: (517) 302-7743
              </a>
            </div>
          </motion.div>
        </div>

        {/* Service Area Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h3>
            <p className="text-lg text-gray-600">
              We proudly serve a 40-mile radius around Fowlerville, MI
            </p>
          </div>
          <ServiceAreaMap />
        </motion.div>
      </div>
    </section>
  )
}
