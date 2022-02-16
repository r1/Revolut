/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <main className="mx-auto grid w-full">
        <div className="mx-auto mt-16 grid max-w-[1000px] gap-5">
          <div className="mb-4 grid max-h-[700px] max-w-[1000px] place-items-center lg:min-h-[810px]">
            <div className="border-box w-100 absolute z-0 m-0 mt-14 hidden w-full overflow-hidden p-0 lg:block">
              <img
                src="/images/Hero.jpeg"
                alt="Hero"
                className="h-full w-full"
              />
            </div>
            <div className="inline-flex items-center">
              <img
                src="/images/Hero_Mobile.png"
                alt="Hero"
                className="block h-full w-full lg:hidden"
              />
            </div>
            <div className="z-10 mx-auto max-h-[300px] gap-6 text-center lg:min-h-[550px]">
              <div className="basier-semibold text-4xl font-bold text-[#191c1f] lg:text-8xl">
                One app, all <br /> things money
              </div>
              <p className="whitespace-pre-wrap py-4 px-4 text-sm font-semibold text-[#292c2f] lg:px-0 lg:py-6 lg:text-xl">
                From easy money management, to travel perks and investments.{" "}
                <br className="hidden md:block" />
                Open your account in a flash
              </p>
              <a
                className="inline-flex items-center rounded-[10px] bg-[#191c1f] py-[6px] px-4 font-medium text-white"
                href="/"
              >
                <span className="justify-center">Get a free account</span>
              </a>
            </div>
          </div>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-6 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-4 font-bold text-[#77828c] lg:text-xl">
                Everyday essentials
              </p>
              <p className="basier-semibold mb-4 text-4xl font-bold lg:text-6xl">
                Send, spend and save smarter
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Make day-to-day spending a breeze with all things money in one
                place
              </p>
            </div>
          </div>
          <a href="/" className="z-10 hidden px-4 md:block lg:px-0">
            <img
              src="/images/Payments.png"
              alt="Payments"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Payments_Mobile.png"
              alt="Payments"
              className="rounded-2xl"
            />
          </a>
          <div className="hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/SavingsVault.png"
                alt="SavingsVault"
                className="rounded-2xl"
              />
            </a>
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Rewards.png"
                alt="Rewards"
                className="rounded-2xl"
              />
            </a>
          </div>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/SavingsVault_Mobile.png"
              alt="SavingsVault"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Rewards_Mobile.png"
              alt="Rewards"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 hidden px-4 md:block lg:px-0">
            <img src="/images/Cards.png" alt="Cards" className="rounded-2xl" />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Cards_Mobile.jpeg"
              alt="Cards"
              className="rounded-2xl"
            />
          </a>
          <div className="hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/OpenBanking.png"
                alt="OpenBanking"
                className="rounded-2xl"
              />
            </a>
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Subscriptions.png"
                alt="Subscriptions"
                className="rounded-2xl"
              />
            </a>
          </div>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/OpenBanking_Mobile.png"
              alt="OpenBanking"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Subscriptions_Mobile.png"
              alt="Subscriptions"
              className="rounded-2xl"
            />
          </a>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                Investments
              </p>
              <p className="basier-semibold mb-6 text-4xl font-bold lg:text-6xl">
                Investments from just $1
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Create your portfolio and start trading with just a few taps.
                Capital at risk
              </p>
            </div>
          </div>
          <a href="/" className="z-10 hidden px-4 md:block lg:px-0">
            <img
              src="/images/Crypto.png"
              alt="Payments"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Crypto_Mobile.png"
              alt="Crypto"
              className="rounded-2xl"
            />
          </a>
          <div className="hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Stocks.jpeg"
                alt="Stocks"
                className="rounded-2xl"
              />
            </a>
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Commodities.png"
                alt="Commodities"
                className="rounded-2xl"
              />
            </a>
          </div>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Stocks_Mobile.jpeg"
              alt="Stocks"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Commodities_Mobile.png"
              alt="Commodities"
              className="rounded-2xl"
            />
          </a>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                Travel
              </p>
              <p className="basier-semibold mb-6 text-4xl font-bold lg:text-6xl">
                All your travel needs, sorted
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Travel card? Check. Insurance? Covered. Hotels? Say no more.
                We’re building you a connected trip
              </p>
            </div>
          </div>
          <a href="/" className="z-10 hidden px-4 md:block lg:px-0">
            <img
              src="/images/Stays.png"
              alt="Payments"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Stays_Mobile.png"
              alt="Stays"
              className="rounded-2xl"
            />
          </a>
          <div className="hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Currencies_Small.jpeg"
                alt="Currencies"
                className="rounded-2xl"
              />
            </a>
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Lounge.png"
                alt="Lounge"
                className="rounded-2xl"
              />
            </a>
          </div>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Currencies_Small_Mobile.jpeg"
              alt="Currencies"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Lounge_Mobile.png"
              alt="Lounge"
              className="rounded-2xl"
            />
          </a>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                Lifestyle
              </p>
              <p className="basier-semibold mb-6 text-4xl font-bold lg:text-6xl">
                Get a little more in life with Revolut
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Let us take care of all the added extras, from donations to
                gifts
                <br />
                for friends and so much more
              </p>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Gifts.png"
                alt="Gifts"
                className="rounded-2xl"
              />
            </a>
            <a href="/" className="z-10 px-2 lg:px-0">
              <img
                src="/images/Donations.png"
                alt="Donations"
                className="rounded-2xl"
              />
            </a>
          </div>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Gifts_Mobile.png"
              alt="Gifts"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Donations_Mobile.png"
              alt="Donations"
              className="rounded-2xl"
            />
          </a>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                Security
              </p>
              <p className="basier-semibold mb-6 text-4xl font-bold lg:text-6xl">
                End-to-end security
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Get peace of mind with our strong security systems and trusted
                partners
              </p>
            </div>
          </div>
          <a href="/" className="z-10 hidden px-4 md:block lg:px-0">
            <img
              src="/images/Security.png"
              alt="Security"
              className="rounded-2xl"
            />
          </a>
          <a href="/" className="z-10 block px-4 md:hidden lg:px-0">
            <img
              src="/images/Security_Mobile.png"
              alt="Security"
              className="rounded-2xl"
            />
          </a>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-32 lg:px-0">
            <div className="text-center">
              <p className="basier-semibold mb-8 text-4xl font-bold lg:text-6xl">
                Join 18M people who already trust us with their money
              </p>
              <a
                className="inline-flex items-center rounded-[10px] bg-[#191c1f] py-[6px] px-4 font-medium text-white"
                href="/"
              >
                <span className="justify-center">Get started</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
