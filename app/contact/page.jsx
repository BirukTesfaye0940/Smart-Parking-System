"use client"

import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "user",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "user",
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation Bar */}
      {/* <nav className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
            >
              <li>
                <Link href="/find-parking">Find Parking</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a>User Type</a>
                <ul className="p-2">
                  <li>
                    <Link href="/user/dashboard">User Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/owner/dashboard">Owner Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard">Admin Dashboard</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Smart Parking
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/find-parking">Find Parking</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="active">
                Contact
              </Link>
            </li>
            <li>
              <details>
                <summary>User Type</summary>
                <ul className="p-2 bg-base-100 text-base-content">
                  <li>
                    <Link href="/user/dashboard">User Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/owner/dashboard">Owner Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/admin/dashboard">Admin Dashboard</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/login" className="btn btn-ghost">
            Login
          </Link>
          <Link href="/register" className="btn btn-accent">
            Register
          </Link>
        </div>
      </nav> */} 

      {/* Hero Section */}
      <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
            <p className="mb-5">
              Get in touch with our team. We're here to help you with any questions or support you need.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-content"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                    <p className="text-base-content/70">
                      123 Smart City Boulevard
                      <br />
                      Tech District, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-content"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                    <p className="text-base-content/70">
                      General Support: +1 (555) 123-4567
                      <br />
                      Business Inquiries: +1 (555) 123-4568
                      <br />
                      Emergency Support: +1 (555) 123-4569
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-content"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Addresses</h3>
                    <p className="text-base-content/70">
                      General: info@smartparking.com
                      <br />
                      Support: support@smartparking.com
                      <br />
                      Business: business@smartparking.com
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary-content"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <p className="text-base-content/70">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                      <br />
                      <span className="text-primary font-medium">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl mb-6">Send Us a Message</h2>

                  {submitMessage && (
                    <div className="alert alert-success mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    {/* User Type */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">I am a *</span>
                      </label>
                      <select
                        name="userType"
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                        required
                      >
                        <option value="user">Regular User</option>
                        <option value="owner">Parking Lot Owner</option>
                        <option value="business">Business Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Subject *</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message *</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        className="textarea textarea-bordered h-32 w-full"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">How do I book a parking space?</div>
              <div className="collapse-content">
                <p>
                  Simply search for parking near your destination, select an available space, choose your time slot, and
                  complete the payment. You'll receive a confirmation with all the details.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Can I cancel my booking?</div>
              <div className="collapse-content">
                <p>
                  Yes, you can cancel your booking up to 1 hour before your reserved time slot. Cancellations made
                  within this timeframe may be subject to a small fee.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">How do I list my parking space?</div>
              <div className="collapse-content">
                <p>
                  Register as a parking lot owner, provide details about your parking facility, set your pricing, and
                  our team will verify and activate your listing within 24-48 hours.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">What payment methods do you accept?</div>
              <div className="collapse-content">
                <p>
                  We accept all major credit cards, debit cards, PayPal, and digital wallets. All transactions are
                  secured with industry-standard encryption.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 mb-4">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Is there customer support available?</div>
              <div className="collapse-content">
                <p>
                  Yes, we offer 24/7 customer support through phone, email, and live chat. Our emergency support line is
                  available for urgent parking-related issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Our Office</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-base-200 rounded-lg p-8 text-center">
              <div className="w-full h-64 bg-base-300 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-base-content/50 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-base-content/70">Interactive Map Coming Soon</p>
                  <p className="text-sm text-base-content/50">123 Smart City Boulevard, Tech District, TC 12345</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on Google Maps
                </a>
                <a href="https://maps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View on Apple Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
