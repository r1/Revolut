/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

export default function Main() {
  return (
    <>
      <main className="grid gap-5 min-h-screen mr-auto ml-auto mx-width">
        <div className="grid min-h-[810px] place-items-center">
          <div className="absolute overflow-hidden border-boxw-100 z-0 m-0 p-0 w-full hidden lg:block">
            <span>
              <img
                src="/images/Hero.jpeg"
                alt="Hero"
                className="h-full w-full"
              />
            </span>
          </div>
          <img
            src="/images/Hero_Mobile.png"
            alt="Hero"
            className="h-full w-full lg:hidden block"
          />
          <div className="z-10 mr-auto ml-auto max-h-[800px] min-h-[400px] gap-6 w-[640px] text-center">
            <h1 className="Basier-SemiBold text-5xl lg:text-8xl font-bold leading-[30px] lg:leading-[104px]">
              One app, all things money
            </h1>
            <p className="text-2xl lg:text-xl font-semibold whitespace-pre-wrap py-2 lg:py-6">
              From easy money management, to travel perks and investments. Open
              your account in a flash
            </p>
            <a
              className="inline-flex items-center py-[6px] px-4 font-medium text-white rounded-[10px] bg-black"
              href="/"
            >
              <span className="justify-center">Get a free account</span>
            </a>
          </div>
        </div>
        <div className="mr-auto ml-auto mt-12 mb-20">
          <div className="text-center">
            <p className="Basier-Regular text-xl font-bold leading-[10px] text-[#77828c]">
              Everyday essentials
            </p>
            <p className="Basier-Regular text-6xl font-bold leading-[105px]">
              Send, spend and save smarter
            </p>
            <p className="text-xl font-semibold text-[#1f2225]">
              Make day-to-day spending a breeze with all things money in one
              place
            </p>
          </div>
        </div>
        <a href="/" className="pb-12 lg:px-0 px-4 ">
          <img
            src="/images/Payments.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </main>
    </>
  );
}
