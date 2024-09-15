"use client";

import Image from 'next/image';
import Header from '../comp/nav'
import { useRouter } from 'next/navigation';

export default function Services() {
    const router = useRouter();

    const handleNavigation = (page) => {
      router.push(page);
    };

  return (
    <div className="space-y-8 px-4 py-12 md:px-20 bg-white pt-20">
        <Header/>
      <div className="flex justify-center items-center font-bold w-full px-12 text-center text-black text-4xl md:text-6xl mb-8">
        <h1>Our Services</h1>
      </div>

      {/* Coding Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 h-48 relative bg-gray-400 rounded-lg overflow-hidden">
          <Image
            src="/images/code.jpg" // Replace with the path to your code.jpg in the public folder
            alt="Coding"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">CODING</h3>
          <p className="text-gray-600">
            Our expert developers provide cutting-edge solutions tailored to your needs. Whether it's web development, app development, or custom software, we've got you covered.
          </p>
        </div>
      </div>

      {/* Designing Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 h-48 relative bg-white rounded-lg overflow-hidden">
          <Image
            src="/images/design.jpg" // Replace with the path to your design.jpg in the public folder
            alt="Designing"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">DESIGNING</h3>
          <p className="text-gray-600">
            From UX/UI design to branding, we create visually stunning designs that captivate your audience and make your business stand out in a competitive market.
          </p>
        </div>
      </div>

      {/* Consulting Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 h-48 relative bg-gray-400 rounded-lg overflow-hidden">
          <Image
            src="/images/consult.jpg" // Replace with the path to your consult.jpg in the public folder
            alt="Consulting"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">CONSULTING</h3>
          <p className="text-gray-600">
            Our consulting services provide expert advice to optimize your business processes, helping you make informed decisions and achieve success in your projects.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center font-thin w-full px-12 text-center text-gray-500 text-2xl md:text-3xl border-gray-600 border-t pb-9 mb-4'>

      <p className="mt-4 text-sm md:text-lg text-gray-600">
      We provide professional freelance services for all your needs. Whether you're
      looking for software development, graphic design, or content creation, we connect
      you with top talent from around the world.
    </p>
    <button className="mt-6 bg-green-500 text-white text-xl py-2 px-6 rounded-lg shadow hover:bg-green-600">
      Start Now
    </button>

      </div>

      <footer className="bg-black text-white p-8 left-0 right-0 absolute">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-gray-400">
              We are a leading freelancing startup, connecting clients with skilled freelancers Nation wide.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-lg font-bold">Why Choose Us?</h3>
            <ul className="mt-2 text-gray-400">
              <li>Reliable & vetted freelancers</li>
              <li>Transparent pricing</li>
              <li>24/7 customer support</li>
              <li>Secure payments</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 text-gray-400 cursor-pointer">
              <li onClick={() => navigateToPage('/')}>Home</li>
              <li onClick={() => navigateToPage('/services')}>Services</li>
              <li onClick={() => navigateToPage('/contact')} >Contact Us</li>
              <li onClick={() => navigateToPage('/start')}>Get Started</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-gray-400">
              Need assistance? Reach out to us: <br />
              <strong>Email:</strong> nhlafuma@gmail.com <br />
              <strong>Phone:</strong> +27 78 233 9698
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          © 2024 Freelance Startup. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
