// import Image from 'next/image';

export default function ServicesSection() {
  return (
    <div id="services" className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-slate-900 dark:to-slate-700">
      <h1 className="text-[3rem] font-bold text-gray-900 dark:text-white py-5 pl-10">My Services</h1>

      <div className="flex flex-wrap justify-center mt-5">
        <div className="max-w-sm p-4 duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col h-full p-8 bg-gray-300 rounded-lg dark:bg-gray-800 hover:text-gray-100 dark:text-white hover:bg-gray-600">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-indigo-500 rounded-full dark:bg-indigo-500">
                <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M465 7c-9.4-9.4-24.6-9.4-33.9 0L383 55c-2.4 2.4-4.3 5.3-5.5 8.5l-15.4 41-77.5 77.6c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l77.6-77.6 41-15.4c3.2-1.2 6.1-3.1 8.5-5.5l48-48c9.4-9.4 9.4-24.6 0-33.9L465 7zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Music Player</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-base leading-relaxed">If you need Guitarist with any music genre start with Rock, Pop and dangdut you can hire me. I have my own rig:</p>
              <ul className="mt-5 text-base leading-relaxed">
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Schecter C6 Plus
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Ibanez Acoustic Guitar
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>NUX MG400
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-sm p-4 duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col h-full p-8 bg-gray-300 rounded-lg dark:bg-gray-800 hover:text-gray-100 dark:text-white hover:bg-gray-600">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-indigo-500 rounded-full dark:bg-indigo-500">
                <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Music Recording</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-base leading-relaxed">
                Music recording with home recording setup, or if you need an operator for your recording studio and mixing engineer. I use Presonus Studio One as a DAW, and can operate other DAW with Learn.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-sm p-4 duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col h-full p-8 bg-gray-300 rounded-lg dark:bg-gray-800 hover:text-gray-100 dark:text-white hover:bg-gray-600">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-indigo-500 rounded-full dark:bg-indigo-500">
                <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Video Editing</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-base leading-relaxed">Video Editing use Adobe Premiere with basic skills or if you need an operator or video editor for your youtube video with remote or at office.</p>
            </div>
          </div>
        </div>

        <div className="max-w-sm p-4 duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col h-full p-8 bg-gray-300 rounded-lg dark:bg-gray-800 hover:text-gray-100 dark:text-white hover:bg-gray-600">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-indigo-500 rounded-full dark:bg-indigo-500">
                <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Web Development</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-base leading-relaxed">Web Development with Beginner skills HTML, CSS and Javascript, Bootstrap, SQL:</p>
              <ul className="mt-5 text-base leading-relaxed columns-2">
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>HTML
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Laravel
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>React JS
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>CSS
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Bootstrap
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Tailwind
                </li>
                <li>
                  <i className="mx-2 fa-solid fa-check"></i>Mysql
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-sm p-4 duration-500 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col h-full p-8 bg-gray-300 rounded-lg dark:bg-gray-800 hover:text-gray-100 dark:text-white hover:bg-gray-600">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-indigo-500 rounded-full dark:bg-indigo-500">
                <svg width="24" height="24" className="fill-current text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" />
                </svg>
              </div>
              <h2 className="text-lg font-medium">Mobile Apps Development</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="text-base leading-relaxed">Mobile Apps Development with Beginner skills React Native.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
