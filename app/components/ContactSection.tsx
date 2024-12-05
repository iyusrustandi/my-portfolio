// import Image from 'next/image';

export default function ContactSection() {
  return (
    <div id="contact" className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-slate-900 dark:to-slate-700">
      <h1 className="text-[3rem] font-bold text-gray-900 dark:text-white py-5 pl-10">Contact Me</h1>

      <div className="grid items-start max-w-4xl gap-16 p-4 mx-auto sm:grid-cols-2">
        <div>
          <div className="mt-12">
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <a href="#" className="text-gray-900 dark:text-gray-100 text-sm ml-4 hover:scale-105 hover:shadow-xl duration-250">
                  <small className="block underline underline-offset-1">Mail</small>
                  <strong>iyusrustandi2@gmail.com</strong>
                </a>
              </li>
              <li className="flex items-center py-5">
                <div className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>
                <a href="#" className="text-gray-900 dark:text-gray-100 text-sm ml-4 hover:scale-105 hover:shadow-xl duration-250">
                  <small className="block underline underline-offset-1">Phone</small>
                  <strong>085158771917</strong>
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                  </svg>
                </div>
                <a href="https://docs.google.com/gview?embedded=true&url=https://iyusrustandi.github.io/assets/Resume.pdf" className="text-gray-900 dark:text-gray-100 text-sm ml-4 hover:scale-105 hover:shadow-xl duration-250">
                  <small className="block underline underline-offset-1">CV</small>
                  <strong>Curriculum Vitae</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-900 dark:text-gray-100 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                <a href="https://web.facebook.com/iyus.rustandi.7/">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                <a href="https://www.instagram.com/iyusrustandi1/">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                <a href="https://www.youtube.com/@iyusrustandichannel">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </li>
              <li className="bg-gray-200 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 hover:shadow-xl duration-250">
                <a href="https://www.linkedin.com/in/iyus-rustandi-b564866a/">
                  <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4" method="POST" action="https://script.google.com/macros/s/AKfycbxRKiTTDpa4HNfdTVvLQ2DtQmOF7tzjFhDwdwjdvtCBV9uoh9PzJSZeb4gMg3Io1wYU/exec" id="my-form">
          <input type="text" placeholder="Name" className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-md outline-blue-500 focus:bg-transparent dark:focus:bg-transparent" name="Name" />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-md outline-blue-500 focus:bg-transparent dark:focus:bg-transparent" name="Email" />
          <textarea placeholder="Message" className="w-full px-4 pt-3 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-md outline-blue-500 focus:bg-transparent dark:focus:bg-transparent" name="Message"></textarea>
          <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6 font-bold">
            Send Message
          </button>
        </form>
        <span id="msg"></span>
      </div>
    </div>
  );
}
