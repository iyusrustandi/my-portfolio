import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 dark:from-slate-900 dark:to-slate-700">
      <h1 className="text-[3rem] font-bold text-gray-900 dark:text-white py-5 pl-10">My Work</h1>

      <section className="grid justify-center grid-cols-1 mx-auto mt-10 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14">
        <div className="duration-500 bg-white dark:bg-gray-800 shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
          <a href="https://www.instagram.com/iyusrustandi1/">
            <Image src="/images/work-1.png" alt="work " width={300} height={400} className="object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center">
                <p className="my-3 text-lg font-semibold text-gray-900 dark:text-gray-100 cursor-auto">Music Player</p>
                <div className="ml-auto">
                  <i className="fa-solid fa-up-right-from-square text-gray-900 dark:text-gray-100"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="duration-500 bg-white dark:bg-gray-800 shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
          <a href="https://www.youtube.com/channel/UCsjHLbn5APCBV6TRu-axkMA/featured">
            <Image src="/images/work-2.png" alt="work" width={300} height={400} className="object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center">
                <p className="my-3 text-lg font-semibold text-gray-900 dark:text-gray-100 cursor-auto">Music Recording</p>
                <div className="ml-auto">
                  <i className="fa-solid fa-up-right-from-square text-gray-900 dark:text-gray-100"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="duration-500 bg-white dark:bg-gray-800 shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
          <a href="https://iyusrustandi.github.io/jaktourband/">
            <Image src="/images/work-3.png" alt="work" width={300} height={400} className="object-cover  rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center">
                <p className="my-3 text-lg font-semibold text-gray-900 dark:text-gray-100 cursor-auto">Web Development</p>
                <div className="ml-auto">
                  <i className="fa-solid fa-up-right-from-square text-gray-900 dark:text-gray-100"></i>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="duration-500 bg-white dark:bg-gray-800 shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
          <a href="https://drive.google.com/drive/folders/1DytRlzBZxBIyNONXJcjRNyTBeZQsWJDE?usp=sharing">
            <Image src="/images/work-4.png" width={300} height={400} alt="work" className="object-cover  rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center">
                <p className="my-3 text-lg font-semibold text-gray-900 dark:text-gray-100 cursor-auto">Mobile Apps Development</p>
                <div className="ml-auto">
                  <i className="fa-solid fa-up-right-from-square text-gray-900 dark:text-gray-100"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
