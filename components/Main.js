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
            <br className="hidden md:block" />
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
      <div className="mx-auto mt-20 lg:mt-4 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
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
      <a href="/" className="lg:px-0 px-4 z-10 hidden md:block">
        <img
          src="/images/Payments.png"
          alt="Payments"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Payments_Mobile.png"
          alt="Payments"
          className="rounded-2xl"
        />
      </a>
      <div className="md:grid grid-cols-2 gap-0 lg:gap-5 hidden">
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/SavingsVault.png"
            alt="SavingsVault"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/Rewards.png"
            alt="Rewards"
            className="rounded-2xl"
          />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/SavingsVault_Mobile.png"
          alt="SavingsVault"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Rewards_Mobile.png"
          alt="Rewards"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 hidden md:block">
        <img src="/images/Cards.png" alt="Cards" className="rounded-2xl" />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Cards_Mobile.jpeg"
          alt="Cards"
          className="rounded-2xl"
        />
      </a>
      <div className="md:grid grid-cols-2 gap-0 lg:gap-5 hidden">
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/OpenBanking.png"
            alt="OpenBanking"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/Subscriptions.png"
            alt="Subscriptions"
            className="rounded-2xl"
          />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/OpenBanking_Mobile.png"
          alt="OpenBanking"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Subscriptions_Mobile.png"
          alt="Subscriptions"
          className="rounded-2xl"
        />
      </a>
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
      <a href="/" className="lg:px-0 px-4 z-10 hidden md:block">
        <img src="/images/Crypto.png" alt="Payments" className="rounded-2xl" />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Crypto_Mobile.png"
          alt="Crypto"
          className="rounded-2xl"
        />
      </a>
      <div className="md:grid grid-cols-2 gap-0 lg:gap-5 hidden">
        <a href="/" className="lg:px-0 px-2 z-10">
          <img src="/images/Stocks.jpeg" alt="Stocks" className="rounded-2xl" />
        </a>
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/Commodities.png"
            alt="Commodities"
            className="rounded-2xl"
          />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Stocks_Mobile.jpeg"
          alt="Stocks"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Commodities_Mobile.png"
          alt="Commodities"
          className="rounded-2xl"
        />
      </a>
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
      <a href="/" className="lg:px-0 px-4 z-10 hidden md:block">
        <img src="/images/Stays.png" alt="Payments" className="rounded-2xl" />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Stays_Mobile.png"
          alt="Stays"
          className="rounded-2xl"
        />
      </a>
      <div className="md:grid grid-cols-2 gap-0 lg:gap-5 hidden">
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/Currencies_Small.jpeg"
            alt="Currencies"
            className="rounded-2xl"
          />
        </a>
        <a href="/" className="lg:px-0 px-2 z-10">
          <img src="/images/Lounge.png" alt="Lounge" className="rounded-2xl" />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Currencies_Small_Mobile.jpeg"
          alt="Currencies"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Lounge_Mobile.png"
          alt="Lounge"
          className="rounded-2xl"
        />
      </a>
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
      <div className="md:grid grid-cols-2 gap-0 lg:gap-5 hidden">
        <a href="/" className="lg:px-0 px-2 z-10">
          <img src="/images/Gifts.png" alt="Gifts" className="rounded-2xl" />
        </a>
        <a href="/" className="lg:px-0 px-2 z-10">
          <img
            src="/images/Donations.png"
            alt="Donations"
            className="rounded-2xl"
          />
        </a>
      </div>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Gifts_Mobile.png"
          alt="Gifts"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Donations_Mobile.png"
          alt="Donations"
          className="rounded-2xl"
        />
      </a>
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
      <a href="/" className="lg:px-0 px-4 z-10 hidden md:block">
        <img
          src="/images/Security.png"
          alt="Security"
          className="rounded-2xl"
        />
      </a>
      <a href="/" className="lg:px-0 px-4 z-10 md:hidden block">
        <img
          src="/images/Security_Mobile.png"
          alt="Security"
          className="rounded-2xl"
        />
      </a>
      <div className="mx-auto mt-20 lg:mt-44 mb-6 lg:mb-20 z-10 px-10 lg:px-0">
        <div className="text-center">
          <p className="Basier-SemiBold text-4xl lg:text-6xl font-bold mb-8">
            Join 18M people who already trust us with their money
          </p>
          <a
            className="inline-flex items-center py-[6px] px-4 font-medium text-white rounded-[10px] bg-[#191c1f]"
            href="/"
          >
            <span className="justify-center">Get started</span>
          </a>
        </div>
      </div>
    </main>
  );
}
