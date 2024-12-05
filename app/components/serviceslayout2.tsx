'use client';

import {useState} from 'react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: string) => {
    setSelectedService(service === selectedService ? null : service); // Toggle service details
  };

  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">My Services</h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-4">I offer a variety of services to help you with your projects.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Service Card 1 */}
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => handleServiceClick('web-development')}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Development</h3>
            <p className="text-gray-500 dark:text-gray-300 mt-2">Creating responsive and interactive websites tailored to your needs.</p>

            {selectedService === 'web-development' && (
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <ul>
                  <li>Frontend Development (React, Next.js)</li>
                  <li>Backend Development (Node.js, Express)</li>
                  <li>API Integration</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            )}
          </div>

          {/* Service Card 2 */}
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => handleServiceClick('music-production')}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Music Production</h3>
            <p className="text-gray-500 dark:text-gray-300 mt-2">Offering music production services including mixing and mastering.</p>

            {selectedService === 'music-production' && (
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <ul>
                  <li>Mixing & Mastering</li>
                  <li>Sound Design</li>
                  <li>Recording</li>
                  <li>Music Arrangement</li>
                </ul>
              </div>
            )}
          </div>

          {/* Service Card 3 */}
          <div className="p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => handleServiceClick('video-editing')}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Video Editing</h3>
            <p className="text-gray-500 dark:text-gray-300 mt-2">Helping you edit your videos with professional tools and techniques.</p>

            {selectedService === 'video-editing' && (
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                <ul>
                  <li>Color Grading</li>
                  <li>Cutting & Trimming</li>
                  <li>Transitions & Effects</li>
                  <li>Sound Design for Videos</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
