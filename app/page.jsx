import Link from "next/link";
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
              <Link href="/lot" className="btn btn-primary">
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
                  <Link href="/register/owner" className="btn btn-secondary">
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
                  <Link href="/login/admin" className="btn btn-accent">
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
            <Link href="/lot" className="btn btn-outline btn-secondary">
              Find Parking
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
