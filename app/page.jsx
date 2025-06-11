import Link from "next/link"
import prisma from '../lib/prisma';

export default async function Home() {
  const totalSpaces = await prisma.parkingSpace.count()
  const totalCities = await prisma.city.count()
  const totalUsers = await prisma.user.count()
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <div className="hero min-h-[70vh] bg-base-200" style={{ backgroundImage: "url(/Hero-image.png)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Smart Parking System</h1>
            <p className="mb-5">
              Find and reserve parking spaces with ease. Save time, reduce stress, and park smarter with our advanced
              parking management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/find-parking" className="btn btn-primary">
                Find Parking
              </Link>
              <Link href="/register" className="btn btn-secondary">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Easy Location Finding</h3>
                <p>
                  Find parking lots near your destination with our interactive map and detailed location information.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Advance Booking</h3>
                <p>Reserve your parking space in advance to ensure availability when you arrive at your destination.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Secure Payments</h3>
                <p>Pay for your parking easily and securely through our integrated payment system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Benefit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Regular Users */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-center justify-center">Regular Users</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Find available parking spaces near your destination</li>
                  <li>Book parking in advance</li>
                  <li>Pay securely online</li>
                  <li>View booking history</li>
                  <li>Leave reviews for parking lots</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <Link href="/register?type=user" className="btn btn-primary">
                    Register as User
                  </Link>
                </div>
              </div>
            </div>

            {/* Parking Lot Owners */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-center justify-center">Parking Lot Owners</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>List your parking facilities</li>
                  <li>Manage parking spaces</li>
                  <li>Set pricing and availability</li>
                  <li>View booking statistics</li>
                  <li>Receive notifications about bookings</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <Link href="/register?type=owner" className="btn btn-secondary">
                    Register as Owner
                  </Link>
                </div>
              </div>
            </div>

            {/* Administrators */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-center justify-center">Administrators</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Manage all users and owners</li>
                  <li>Monitor system performance</li>
                  <li>View comprehensive statistics</li>
                  <li>Handle disputes and issues</li>
                  <li>System configuration and maintenance</li>
                </ul>
                <div className="card-actions justify-center mt-4">
                  <Link href="/admin/login" className="btn btn-accent">
                    Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg">1</div>
                <h3 className="text-xl font-bold mt-4">Search</h3>
                <p>Find parking near your destination</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg">2</div>
                <h3 className="text-xl font-bold mt-4">Book</h3>
                <p>Reserve your parking space</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg">3</div>
                <h3 className="text-xl font-bold mt-4">Pay</h3>
                <p>Complete secure payment</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg">4</div>
                <h3 className="text-xl font-bold mt-4">Park</h3>
                <p>Enjoy hassle-free parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Happy Users</div>
              <div className="stat-value text-primary">{totalUsers}</div>
              <div className="stat-desc">Growing more than!</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Parking Spaces</div>
              <div className="stat-value text-secondary">{totalSpaces}</div>
              <div className="stat-desc">Available across cities</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Cities</div>
              <div className="stat-value">{totalCities}</div>
              <div className="stat-desc">↗︎ 14 (16%)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Smart Parking?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benefits of our Smart Parking System. Register now to
            start finding and booking parking spaces with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn btn-secondary">
              Register Now
            </Link>
            <Link href="/find-parking" className="btn btn-outline btn-secondary">
              Find Parking
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="flex justify-center gap-32 footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <Link href="/find-parking" className="link link-hover">
            Find Parking
          </Link>
          <Link href="/pricing" className="link link-hover">
            Pricing
          </Link>
          <Link href="/for-owners" className="link link-hover">
            For Parking Owners
          </Link>
          <Link href="/business" className="link link-hover">
            Business Solutions
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/careers" className="link link-hover">
            Jobs
          </Link>
          <Link href="/press" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link href="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/privacy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/cookies" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
        <div className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Smart Parking System © {new Date().getFullYear()} - All rights reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
