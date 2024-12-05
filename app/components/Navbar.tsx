import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:bg-neutral-800/30 before:backdrop-blur-md">
      <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
        <div className="flex items-center justify-between">
          <a className="flex items-center space-x-3 rtl:space-x-reverse" href="#" aria-label="Preline">
            <Image src="/images/logo.png" alt="Logo" width={100} height={32} className="w-auto h-8 rounded-lg hover:scale-105 hover:shadow-xl logo md:h-12 max-lg:mr-5" />
            <span className="self-center lg:text-2xl font-semibold whitespace-nowrap dark:text-white">Iyus Rustandi</span>
          </a>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white"
              id="hs-navbar-floating-dark-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-floating-dark"
              data-hs-collapse="#hs-navbar-floating-dark"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div id="hs-navbar-floating-dark" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-floating-dark-collapse">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
            <a className="p-3 ps-px sm:px-3 md:py-4 text-md text-white font-semibold hover:text-neutral-300" href="#about">
              About
            </a>
            <a className="p-3 ps-px sm:px-3 md:py-4 text-md text-white font-semibold hover:text-neutral-300" href="#services">
              Service
            </a>
            <a className="p-3 ps-px sm:px-3 md:py-4 text-md text-white font-semibold hover:text-neutral-300" href="#portfolio">
              Portfolio
            </a>
            <a className="p-3 ps-px sm:px-3 md:py-4 text-md text-white font-semibold hover:text-neutral-300" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
