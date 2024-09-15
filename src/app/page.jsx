"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './comp/nav'

const sliderImages = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
  '/images/slide6.jpg',
  '/images/slide7.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 8000); // Changes slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  // Manual slide change logic
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const router = useRouter();

  const navigateToPage = (page) => {
    router.push(page); // This will navigate to the specified page
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };


  return (
    <div className="min-h-screen flex flex-col bg-white pt-12">
      {/* Header */}
      
      <Header/>

{/* Hero Section */}
<section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12 px-6 md:px-20 bg-gray-50">
  <div className="w-full md:w-1/2 mt-8 md:mt-0">
    <Image
      src="/images/display.png"
      alt="Freelance Services"
      width={500}
      height={500}
      className="mx-auto md:mx-0"
    />
  </div>
  <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
    <h1 className="text-4xl md:text-9xl font-bold text-yellow-400 mb-4">
      Outsource
    </h1>
    <h2 className="text-xl md:text-4xl font-bold text-gray-800">
      Get Your Projects Done with World-Class Freelancers!
    </h2>
    <p className="mt-4 text-sm md:text-lg text-gray-600">
      We provide professional freelance services for all your needs. Whether you're
      looking for software development, graphic design, or content creation, we connect
      you with top talent from around the world.
    </p>
    <button onClick={() => navigateToPage('/start')} className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600">
      Start Now
    </button>
  </div>
</section>


{/* Auto Slider Section */}
<section className="relative">
  {/* Image Section */}
  <div className="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
    <Image
      src={sliderImages[currentSlide]} // Dynamically change image based on the current slide
      alt={`Slide ${currentSlide + 1}`}
      layout="fill"
      objectFit="cover"
    />
  </div>

  {/* Dots Section */}
  <div className="absolute bottom-5 w-full flex justify-center items-center space-x-2">
    {sliderImages.map((_, index) => (
      <span
        key={index}
        onClick={() => changeSlide(index)} // Change to clicked slide
        className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'bg-black' : 'bg-gray-400'}`}
      />
    ))}
  </div>
</section>

{/* Convincing Business Statistics */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mx-6 px-4 md:px-20">
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <h3 className="text-3xl md:text-4xl font-bold text-green-600">51+</h3>
    <p className="mt-2 text-gray-600">Projects Completed</p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <h3 className="text-3xl md:text-4xl font-bold text-blue-600">27+</h3>
    <p className="mt-2 text-gray-600">Happy Clients</p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
    <h3 className="text-3xl md:text-4xl font-bold text-purple-600">2+</h3>
    <p className="mt-2 text-gray-600">Countries Served</p>
  </div>
</div>

{/* Get Started Button */}
<div className="mt-8 flex justify-center">
  <div className="py-12 bg-white border-gray-600 border-b pb-9 mb-4">
    {/* Get Started Button and Intro Text */}
    <div className='flex flex-col md:flex-row justify-center items-center w-full border-gray-600 border-b mb-8'>
      <div className="mb-12 text-center md:text-end">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600" onClick={() => navigateToPage('/start')}>
          Get Started
        </button>
        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
          Outsourcing is a powerful tool for businesses, offering cost savings, flexibility, and access to specialized skills. It allows companies to focus on core operations while experts handle specific tasks. We promise to deliver high-quality, tailored solutions that meet your unique needs, ensuring efficiency and precision. Trust us to bring expertise and reliability to every project we undertake.
        </p>
      </div>

      {/* Circle Image (Right) */}
      <div className="flex justify-center mb-12">
        <div className="w-48 h-48 relative rounded-full overflow-hidden border border-gray-300 ml-8">
          <Image
            src="/images/deal.jpg" // Replace with the path to deal.jpg in your public folder
            alt="Business Deal"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>

    {/* Vertical Services Sections */}
    <div className="space-y-8">
      <div className='flex justify-center items-center font-bold w-full px-12 text-center text-black text-4xl md:text-6xl mb-8'>
        <h1>Our Services</h1>
      </div>

      {/* Coding Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 h-48 relative bg-gray-400 rounded-lg overflow-hidden">
          <Image
            src="/images/code.jpg" // Replace with the path to code.jpg in your public folder
            alt="Coding"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 pl-8 mt-6 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">CODING</h3>
          <p className="text-gray-600">
            Our expert developers provide cutting-edge solutions tailored to your needs. Whether it's web development, app development, or custom software, we've got you covered.
          </p>
        </div>
      </div>

      {/* Designing Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 h-48 relative bg-white rounded-lg overflow-hidden">
          <Image
            src="/images/design.jpg" // Replace with the path to design.jpg in your public folder
            alt="Designing"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 pl-8 mt-6 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">DESIGNING</h3>
          <p className="text-gray-600">
            From UX/UI design to branding, we create visually stunning designs that captivate your audience and make your business stand out in a competitive market.
          </p>
        </div>
      </div>

      {/* Consulting Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 h-48 relative bg-gray-400 rounded-lg overflow-hidden">
          <Image
            src="/images/consult.jpg" // Replace with the path to consult.jpg in your public folder
            alt="Consulting"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 pl-8 mt-6 md:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">CONSULTING</h3>
          <p className="text-gray-600">
            Our consulting services provide expert advice to optimize your business processes, helping you make informed decisions and achieve success in your projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='flex justify-center items-center font-thin w-full px-12 text-center text-gray-500 text-2xl md:text-3xl border-gray-600 border-b pb-9 mb-4'>
  <h1>Established By</h1>
  <Image src="/images/tech.jpg" alt="Image 1" width={80} height={50} className='mt-4 ml-4 rounded-xl' />
</div>


      {/* Main Section */}
      <main className="p-8">

      <div className='flex justify-center items-center font-bold w-full px-12 text-center text-black text-6xl mb-8'>
          <h1>Our Vision</h1>
        </div>

        {/* Three Paragraphs with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image src="/images/good.jpg" alt="Image 1" width={400} height={250} />
            <p className="text-gray-600">
              Our platform has successfully connected over <strong>27+ clients</strong> with expert freelancers. We’ve helped businesses of all sizes find the right skills to complete their projects on time and within budget.
            </p>
          </div>
          <div className="space-y-4">
            <Image src="/images/slide2.jpg" alt="Image 2" width={400} height={250} />
            <p className="text-gray-600">
              From startups to Well-known companies, we provide access to a diverse pool of talent, ensuring that you get the best resources for your project, no matter how big or small.
            </p>
          </div>
          <div className="space-y-4">
            <Image src="/images/slide3.jpg" alt="Image 3" width={400} height={250} />
            <p className="text-gray-600">
              Our platform guarantees high-quality deliverables, secure payments, and ongoing support throughout the project. Join the growing number of businesses that trust us to handle their freelance needs.
            </p>
          </div>
        </div>
        
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-8">
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
