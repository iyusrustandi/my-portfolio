// import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="header"
      className="relative pt-20 bg-cover bg-center bg-no-repeat dark:bg-cover"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
      }}
    >
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-[calc(100vh-80px)] lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">Hi, I&apos;m Iyus Rustandi</h1>
          <p className="max-w-lg mt-4 text-slate-100 dark:text-slate-200 sm:text-xl leading-relaxed">I&apos;m a music player and beginner web developer.</p>
        </div>
      </div>
    </section>
  );
}
