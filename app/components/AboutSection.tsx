'use client';

import {useState} from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className=" min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0 flex justify-center items-center">
              <Image src="/images/user.png" alt="User Image" width={300} height={96} className="max-w-[75%] h-auto rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-500" />
            </div>
            <div className="about-col-2 flex-1 p-2 min-w-[300px]">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h1>
              <p className="text-base text-gray-900 dark:text-gray-300 mt-2">My name is Iyus Rustandi, I have some experience with electronic retail, music, and beginner web development.</p>
              <div className="flex my-5 space-x-5 text-base font-bold text-gray-800 dark:text-gray-300">
                <p
                  className={`inline-block underline cursor-pointer hover:decoration-4 transform hover:scale-105 transition-transform hover:shadow-xl duration-500 tab-links ${
                    activeTab === 'skills' ? 'text-rose-700 dark:text-rose-400' : ''
                  }`}
                  onClick={() => handleTabChange('skills')}
                >
                  Skills
                </p>
                <p
                  className={`inline-block underline cursor-pointer hover:decoration-4 transform hover:scale-105 transition-transform hover:shadow-xl duration-500 tab-links ${
                    activeTab === 'experience' ? 'text-rose-700 dark:text-rose-400' : ''
                  }`}
                  onClick={() => handleTabChange('experience')}
                >
                  Experience
                </p>
                <p
                  className={`inline-block underline cursor-pointer hover:decoration-4 transform hover:scale-105 transition-transform hover:shadow-xl duration-500 tab-links ${
                    activeTab === 'education' ? 'text-rose-700 dark:text-rose-400' : ''
                  }`}
                  onClick={() => handleTabChange('education')}
                >
                  Education
                </p>
              </div>

              {/* Konten Tab */}
              <div className={`my-5 text-base text-gray-900 dark:text-white ${activeTab === 'skills' ? 'block' : 'hidden'}`}>
                <ul>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Report</span>
                    <br />
                    Create Sales Report
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Music Production</span>
                    <br />
                    Recording and Mixing
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Video Editing</span>
                    <br />
                    Basic Editing
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Web Development</span>
                    <br />
                    Basic Skills
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Mobile Apps Development</span>
                    <br />
                    Basic Skills
                  </li>
                </ul>
              </div>

              <div className={`my-5 text-base text-gray-900 dark:text-white ${activeTab === 'experience' ? 'block' : 'hidden'}`}>
                <ul>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Iscalton</span>
                    <br />
                    Waitress
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Citra Cikopo Hotel</span>
                    <br />
                    Housekeeping
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">PT.Bina Usaha Mandiri Sejahtera</span>
                    <br />
                    Cashier, Sales, SPV
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">PT.Courts Retail Indonesia</span>
                    <br />
                    Cashier, Sales
                  </li>
                </ul>
              </div>

              <div className={`my-5 text-base text-gray-900 dark:text-white ${activeTab === 'education' ? 'block' : 'hidden'}`}>
                <ul>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">SMK</span>
                    <br />
                    SMK Pariwisata Indonesia
                  </li>
                  <li className="my-2 transform hover:scale-105 transition-transform hover:shadow-xl duration-500">
                    <span className="text-rose-700 dark:text-rose-400">Universitas Terbuka</span>
                    <br />
                    Sistem Informasi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
