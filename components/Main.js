/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

export default function Main() {
  return (
    <main className="grid gap-5 mx-auto max-w-[1000px]">
      <div className="grid max-h-[700px] lg:min-h-[810px] max-w-[1000px] place-items-center mb-4">
        <div className="absolute overflow-hidden border-box w-100 z-0 m-0 p-0 w-full hidden lg:block mt-14">
          <img src="/images/Hero.jpeg" alt="Hero" className="h-full w-full" />
        </div>
        <div className="inline-flex items-center">
          <img
            src="/images/Hero_Mobile.png"
            alt="Hero"
            className="h-full w-full lg:hidden block"
          />
        </div>
        <div className="z-10 mx-auto max-h-[300px] lg:min-h-[550px] gap-6 text-center">
          <div className="Basier-SemiBold text-[#191c1f] text-4xl lg:text-8xl font-bold">
            One app, all <br /> things money
          </div>
          <p className="text-[#292c2f] text-sm lg:text-xl font-semibold whitespace-pre-wrap py-4 lg:py-6">
            From easy money management, to travel perks and investments.{" "}
            <br className="hidden lg:block" />
            Open your account in a flash
          </p>
          <a
            className="inline-flex items-center py-[6px] px-4 font-medium text-white rounded-[10px] bg-[#191c1f]"
            href="/"
          >
            <span className="justify-center">Get a free account</span>
          </a>
        </div>
      </div>
      <div className="mx-auto mt-20 lg:mt-0 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-Regular text-md lg:text-xl font-bold text-[#77828c] mb-4">
            Everyday essentials
          </p>
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-4">
            Send, spend and save smarter
          </p>
          <p className="text-md lg:text-xl font-semibold text-[#1f2225]">
            Make day-to-day spending a breeze with all things money in one place
          </p>
        </div>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10">
        <img
          src="/images/Payments.png"
          alt="Payments"
          className="rounded-2xl"
        />
      </a>
      <div className="grid grid-cols-2 gap-5">
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/SavingsVault.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Rewards.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10">
        <img src="/images/Cards.png" alt="Payments" className="rounded-2xl" />
      </a>
      <div className="grid grid-cols-2 gap-5">
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/OpenBanking.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Subscriptions.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </div>
      <div className="mx-auto mt-20 lg:mt-44 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-Regular text-md lg:text-xl font-bold text-[#77828c] mb-5">
            Investments
          </p>
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-6">
            Investments from just $1
          </p>
          <p className="text-md lg:text-xl font-semibold text-[#1f2225]">
            Create your portfolio and start trading with just a few taps.
            Capital at risk
          </p>
        </div>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10">
        <img src="/images/Crypto.png" alt="Payments" className="rounded-2xl" />
      </a>
      <div className="grid grid-cols-2 gap-5">
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Stocks.jpeg"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Commodities.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </div>
      <div className="mx-auto mt-20 lg:mt-44 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-Regular text-md lg:text-xl font-bold text-[#77828c] mb-5">
            Travel
          </p>
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-6">
            All your travel needs, sorted
          </p>
          <p className="text-md lg:text-xl font-semibold text-[#1f2225]">
            Travel card? Check. Insurance? Covered. Hotels? Say no more. We’re
            building you a connected trip
          </p>
        </div>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10">
        <img src="/images/Stays.png" alt="Payments" className="rounded-2xl" />
      </a>
      <div className="grid grid-cols-2 gap-5">
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Currencies_Small.jpeg"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Lounge.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </div>
      <div className="mx-auto mt-20 lg:mt-44 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-Regular text-md lg:text-xl font-bold text-[#77828c] mb-5">
            Lifestyle
          </p>
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-6">
            Get a little more in life with Revolut
          </p>
          <p className="text-md lg:text-xl font-semibold text-[#1f2225]">
            Let us take care of all the added extras, from donations to gifts
            <br />
            for friends and so much more
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <a href="/" className="lg:px-0 px-4 z-10">
          <img src="/images/Gifts.png" alt="Payments" className="rounded-2xl" />
        </a>
        <a href="/" className="lg:px-0 px-4 z-10">
          <img
            src="/images/Donations.png"
            alt="Payments"
            className="rounded-2xl"
          />
        </a>
      </div>
      <div className="mx-auto mt-20 lg:mt-44 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-Regular text-md lg:text-xl font-bold text-[#77828c] mb-5">
            Security
          </p>
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-6">
            End-to-end security
          </p>
          <p className="text-md lg:text-xl font-semibold text-[#1f2225]">
            Get peace of mind with our strong security systems and trusted
            partners
          </p>
        </div>
      </div>
    </main>
  );
}
