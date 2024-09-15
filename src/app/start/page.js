import Link from 'next/link';
import Header from '../comp/nav'

export default function StartPage() {
  const whatsappGroupLink = "https://chat.whatsapp.com/J2LJZH40IL50iRgWTKOH8V";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
      <Header/>
      <div className="max-w-lg w-full text-center bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Join Our WhatsApp Group
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Connect with our team of developers and designers to get your project started!
        </p>

        <div className="text-lg md:text-xl text-gray-700 mb-4">
          <strong>Contact Info:</strong>
          <ul className="mt-2">
            <li>Email: nhlafuma@gmail.com</li>
            <li>Phone: +27 78 233 9698</li>
          </ul>
        </div>

        <p className="text-base md:text-lg text-gray-600 mb-8">
          <strong>Steps to get started:</strong> Join our WhatsApp group by clicking the button below, and send a message with details about what you need. Our developers and designers will attend to you shortly!
        </p>

        <Link href={whatsappGroupLink} passHref>
          <button
            target="_blank"
            className="inline-block w-full bg-purple-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
          >
            JOIN NOW!
          </button>
        </Link>

        <p className="text-sm md:text-base text-gray-500 mt-6">
          After joining, introduce yourself and let us know what you're looking for so our team can assist you.
        </p>
      </div>
    </section>
  );
}
