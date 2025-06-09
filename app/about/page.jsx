import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">
              Learn more about our mission to revolutionize parking management and make urban mobility smarter.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Smart Parking System was founded in 2025 with a simple yet powerful vision: to eliminate the frustration
                of finding parking in busy urban areas. Our founders, experienced software engineers and urban planning
                experts, recognized that parking challenges were affecting millions of people daily.
              </p>
              <p className="text-lg mb-4">
                What started as a small project to database course project has grown into a
                comprehensive platform serving users, parking lot owners, and administrators across multiple cities.
              </p>
              <p className="text-lg">
                We're proud to be at the forefront of smart city initiatives, helping reduce traffic congestion,
                lower emissions, and improve the overall urban experience.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/Parking.png"
                alt="Our Story"
                className="rounded-lg shadow-xl max-w-full h-auto"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-primary mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title justify-center">Our Mission</h3>
                <p>
                  To simplify urban parking through innovative technology, making it easier for people to find, book,
                  and pay for parking spaces while helping property owners maximize their revenue.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-primary mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="card-title justify-center">Our Vision</h3>
                <p>
                  To become the leading smart parking solution globally, contributing to sustainable urban development
                  and creating smarter, more livable cities for everyone.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-primary mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title justify-center">Our Values</h3>
                <p>
                  Innovation, reliability, sustainability, and customer-centricity guide everything we do. We believe in
                  creating solutions that benefit all stakeholders in the parking ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="/user-place-holder.webp" alt="CEO" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Biruk Tesfaye</h3>
                <p className="text-sm text-base-content/70">CEO & Co-Founder</p>
                <p className="text-sm">Former urban planner with 15+ years of experience in smart city solutions.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="/user-place-holder.webp" alt="CTO" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Chernet Mekuria</h3>
                <p className="text-sm text-base-content/70">CTO & Co-Founder</p>
                <p className="text-sm">Software architect specializing in scalable IoT and mobile applications.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="/user-place-holder.webp" alt="Head of Operations" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Amanuel Fikre</h3>
                <p className="text-sm text-base-content/70">Head of Operations</p>
                <p className="text-sm">
                  Operations expert ensuring smooth platform performance and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="/user-place-holder.webp" alt="Head of Marketing" />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Yohannes H/mariam</h3>
                <p className="text-sm text-base-content/70">Head of Marketing</p>
                <p className="text-sm">
                  Marketing strategist focused on building partnerships and growing our user base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Smart Parking System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reliable Technology</h3>
                <p>Built on robust, scalable infrastructure that ensures 99.9% uptime and fast response times.</p>
              </div>
            </div>

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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p>Industry-standard encryption and secure payment processing to protect your financial information.</p>
              </div>
            </div>

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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p>Round-the-clock customer support to help you with any questions or issues you may encounter.</p>
              </div>
            </div>

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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growing Network</h3>
                <p>Expanding coverage across major cities with thousands of parking spaces available.</p>
              </div>
            </div>

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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
                <p>Intuitive interface designed for ease of use, making parking reservation simple and quick.</p>
              </div>
            </div>

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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p>Reducing traffic congestion and emissions by optimizing parking space utilization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Whether you're looking for convenient parking or want to list your parking spaces, we're here to help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn btn-secondary">
              Get Started Today
            </Link>
            <Link href="/contact" className="btn btn-outline btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
