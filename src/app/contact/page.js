"use client";

import Header from '../comp/nav';
import Link from 'next/link';

export default function ContactAndHelp() {
    const whatsappGroupLink = "https://chat.whatsapp.com/J2LJZH40IL50iRgWTKOH8V";

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12 pt-20">
            <Header/>
            <div className="max-w-lg w-full text-center bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                    Need Help or Want to Connect?
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                    We are here to assist you with any questions or concerns you might have. Feel free to reach out or join our WhatsApp group for direct communication with our team.
                </p>

                <div className="text-lg md:text-xl text-gray-700 mb-4">
                    <strong>Contact Info:</strong>
                    <ul className="mt-2">
                        <li>Email: nhlafuma@gmail.com</li>
                        <li>Phone: +27 78 233 9698</li>
                    </ul>
                </div>

                <p className="text-base md:text-lg text-gray-600 mb-8">
                    <strong>Or Get started:</strong> Click the button below to continue and get started.
                </p>

                <Link href={whatsappGroupLink} passHref>
                    <button
                        target="_blank"
                        className="inline-block w-full bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
                    >
                        JOIN NOW!
                    </button>
                </Link>

                <p className="text-sm md:text-base text-gray-500 mt-6">
                    After joining, introduce yourself and let us know how we can help you.
                </p>
            </div>
        </section>
    );
}
