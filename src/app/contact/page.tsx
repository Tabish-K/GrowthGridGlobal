"use client"

import { useState, type FC, type FormEvent, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Globe, type LucideIcon, MessageSquare, Calendar, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import TeamSection from "./team"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  phone: string
  message: string
}

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const features: Feature[] = [
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Get answers to your questions anytime, anywhere",
    },
    {
      icon: Calendar,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving readers from around the world",
    },
  ]

  const socialLinks: { platform: any; url: string }[] = [
    { platform: <Twitter/>, url: "https://x.com/growth__grid" },
    { platform: <Instagram/>, url: "https://instagram.com/growthgrid_global" },
    { platform: <Linkedin/>, url: "https://www.linkedin.com/company/growthgrid-global" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="text-white py-28 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1638864615951-360884c3a277?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
        />

        <div className="container mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "15%" }}
            transition={{ duration: 1 }}
            className="h-1 bg-white mb-8"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight"
          >
            Get in <span className="text-[#D77914]">Touch</span>
            <br />
            With Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl opacity-90 font-afacad"
          >
            {`Have questions, feedback, or want to contribute? We'd love to hear from you.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="/"
              className="inline-flex font-afacad items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 gap-2"
            >
              Back to Home <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <div className="container mx-auto px-6 sm:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#D77914]/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#D77914]" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 font-afacad">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div className="lg:col-span-5 space-y-8" initial="hidden" animate="visible" variants={fadeIn}>
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15%" }}
                transition={{ duration: 1 }}
                className="h-1 bg-[#D77914] mb-8"
              />
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-poppins">{`We'd Love to Hear From You`}</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed font-afacad">
                Whether you have a question about our articles, want to provide feedback, or are interested in
                contributing to our blog, our team is here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  Icon: MapPin,
                  title: "Visit Us",
                  detail: "Gk2, New Delhi, India. 110048",
                },
                {
                  Icon: Phone,
                  title: "Call Us",
                  detail: "+91 9990006274",
                },
                {
                  Icon: Mail,
                  title: "Email Us",
                  detail: "CEO@growthgrid.in",
                },
              ].map(({ Icon, title, detail }) => (
                <motion.div
                  key={title}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 bg-[#D77914]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#D77914]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 font-poppins">{title}</h3>
                    <p className="text-gray-600 font-afacad">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map or Image */}
            {/* <motion.div
              className="mt-8 rounded-3xl overflow-hidden shadow-lg h-64 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
                alt="Office location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-bold text-xl mb-1 font-poppins">Our Headquarters</h3>
                  <p className="font-afacad">123 Blog Street, Content City, 10001</p>
                </div>
              </div>
            </motion.div> */}
            <TeamSection/>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 font-poppins">Send Us a Message</h2>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2 font-poppins">Message Sent Successfully!</h3>
                <p className="text-green-700 font-afacad">{`Thank you for reaching out. We'll get back to you shortly.`}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "firstName", label: "First Name" },
                    { id: "lastName", label: "Last Name" },
                  ].map(({ id, label }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                        {label} <span className="text-[#D77914]">*</span>
                      </label>
                      <input
                        type="text"
                        id={id}
                        name={id}
                        value={formData[id as keyof FormData]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#D77914] focus:border-[#D77914] transition-all duration-200 font-afacad"
                        required
                      />
                    </div>
                  ))}
                </div>

                {[
                  { id: "email", type: "email", label: "Email Address", required: true },
                  { id: "company", type: "text", label: "Company", required: false },
                  { id: "phone", type: "tel", label: "Phone Number", required: false },
                ].map(({ id, type, label, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                      {label} {required && <span className="text-[#D77914]">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof FormData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#D77914] focus:border-[#D77914] transition-all duration-200 font-afacad"
                      required={required}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                    Message <span className="text-[#D77914]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-[#D77914] focus:border-[#D77914] transition-all duration-200 font-afacad"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-[#D77914] border-gray-300 rounded focus:ring-[#D77914]"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 font-afacad">
                    I agree to the{" "}
                    <a href="#" className="text-[#D77914] hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-[#D77914] text-white py-3 px-6 rounded-xl hover:bg-[#D77914]/90 transition-all duration-200 flex items-center justify-center space-x-2 font-poppins"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
                </motion.button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4 font-afacad">
                Or connect with us on social media:
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ platform, url }) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#4F1C51] hover:bg-[#D77914] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="">{platform}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
