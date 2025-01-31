/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <main className="mx-auto grid w-full">
        <div className="mx-auto mt-16 grid max-w-[1000px] gap-6">
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
                <br className="relative hidden md:block" />
                Open your account in a flash
              </p>
              <div
                className="inline-flex items-center rounded-[10px] bg-[#191c1f] py-[6px] px-4 font-medium text-white"
                href="/"
              >
                <span className="justify-center">Get a free account</span>
              </div>
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
          <div className="hidden min-h-[500px] md:block">
            <div
              href="/"
              className="relative z-10 hidden overflow-hidden rounded-lg px-4 md:block lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Payments.png"
                alt="Payments"
              />
              <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col px-9 py-4">
                <h2 className="basier-semibold mb-3 mt-auto text-xl text-[36px] font-semibold leading-[45px] tracking-tight text-white">
                  Pay and get paid, hassle-free
                </h2>
                <p className="text-[20px] font-semibold leading-normal text-gray-100">
                  Send and request money with a tap, split bills easily with
                  anyone in 30+ countries
                </p>
                <div className="mt-auto pb-8">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      Explore easy payments
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-6 w-6"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Payments_Mobile.png"
                alt="Payments"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[24px] font-semibold leading-[25px] tracking-tight text-white">
                  Pay and get paid, hassle-free
                </h2>
                <p className="px-9 text-[16px] leading-normal text-gray-100">
                  Send and request money with a tap, split bills easily with
                  anyone in 30+ countries
                </p>
                <div className="pl-5 pb-8 pt-4">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      Explore easy payments
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/SavingsVault.png"
                alt="SavingsVault"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  Earn up to 0.7% annual interest, paid daily
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Start saving
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Rewards.png"
                alt="Rewards"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-white lg:leading-[45px]">
                  Get exclusive Rewards and save as you spend
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Browse cashback & discounts
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/SavingsVault_Mobile.png"
                alt="SavingsVault"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  Earn up to 0.7% annual interest, paid daily
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Start saving
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Rewards_Mobile.png"
                alt="SavingsVault"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  Get exclusive Rewards and save as you spend
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Browse cashback & discounts
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div
              href="/"
              className="relative z-10 hidden overflow-hidden rounded-lg px-4 md:block lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Cards.png"
                alt="Cards"
              />
              <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col px-9 py-4">
                <h2 className="basier-semibold mb-3 mt-auto text-xl text-[36px] font-semibold leading-[45px] tracking-tight text-white">
                  Cards with style and substance
                </h2>
                <p className="text-[20px] font-semibold leading-normal text-gray-100">
                  Our cards are more than just their good looks. Get instant
                  payment notifications and manage card security in app. Start
                  spending straight away with Google or Apple Pay
                </p>
                <div className="mt-auto pb-8">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[21px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      Get a card
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-6 w-6"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Cards_Mobile.jpeg"
                alt="Cards"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  Cards with style and substance
                </h2>
                <p className="px-9 pt-2 text-[14px] leading-normal text-gray-100">
                  Our cards are more than just their good looks. Get instant
                  payment notifications and manage card security in app. Start
                  spending straight away with Google or Apple Pay
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get a card
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/OpenBanking.png"
                alt="OpenBanking"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  All your accounts, all in one place
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Discover Open Banking
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Subscriptions.png"
                alt="Subscriptions"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-white lg:leading-[45px]">
                  No more unwanted subscriptions
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore Subscriptions
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/OpenBanking_Mobile.png"
                alt="OpenBanking"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  All your accounts, all in one place
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Discover Open Banking
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Subscriptions_Mobile.png"
                alt="Subscriptions"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  No more unwanted subscriptions
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore Subscriptions
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
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
          <div className="relative hidden md:block">
            <div
              href="/"
              className="relative z-10 hidden overflow-hidden rounded-lg px-4 md:block lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Crypto.png"
                alt="Payments"
              />
              <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col px-9 py-4">
                <h2 className="basier-semibold mb-3 mt-auto text-xl text-[36px] font-semibold leading-[45px] tracking-tight text-white">
                  Go from cash to crypto instantly
                </h2>
                <p className="text-[20px] font-semibold leading-normal text-gray-100">
                  Get secure crypto storage and realtime updates so you can
                  supercharge your investments for less.
                </p>
                <p className="pt-5 text-[20px] font-semibold leading-normal text-gray-100">
                  Capital at risk, not FCA regulated
                </p>
                <div className="mt-auto pb-8">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      Get started with Crypto
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-6 w-6"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Crypto_Mobile.png"
                alt="Crypto"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  Go from cash to crypto instantly
                </h2>
                <p className="px-9 pt-2 text-[14px] leading-normal text-gray-100">
                  Get secure crypto storage and realtime updates so you can
                  supercharge your investments for less.
                </p>
                <p className="px-9 pt-5 text-[14px] leading-normal text-gray-100">
                  Capital at risk, not FCA regulated
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get started with Crypto
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden min-h-[400px] grid-cols-2 gap-0 md:grid lg:gap-5">
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Stocks.jpeg"
                alt="Stocks"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-white lg:leading-[45px]">
                  Trade 800+ global shares commision-free*
                </h2>
                <p className="px-9 pt-2 pr-12 text-[20px] font-semibold leading-normal text-white">
                  * within your allowance. Other fees may apply
                </p>
                <p className="px-9 pt-5 text-[22px] font-semibold leading-normal text-white">
                  Capital at risk
                </p>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore Stock trading
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Commodities.png"
                alt="Commodities"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  Buy gold and silver instantly in-app
                </h2>
                <p className="px-9 pt-2 text-[20px] font-semibold leading-normal text-black">
                  Capital at risk, not FCA regulated
                </p>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Discover Open Banking
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Stocks_Mobile.jpeg"
                alt="Stocks"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  Trade 800+ global shares commision-free*
                </h2>
                <p className="px-9 pt-2 text-[14px] leading-normal text-gray-100">
                  * within your allowance. Other fees may apply
                </p>
                <p className="px-9 pt-5 text-[14px] leading-normal text-gray-100">
                  Capital at risk, not FCA regulated
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore Stock trading
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Commodities_Mobile.png"
                alt="Commodities"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  Buy gold and silver instantly in-app
                </h2>
                <p className="px-9 pt-5 text-[14px] leading-normal text-black">
                  Capital at risk, not FCA regulated
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get started with Crypto
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
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
          <div className="relative hidden md:block">
            <div
              href="/"
              className="relative z-10 hidden overflow-hidden rounded-lg px-4 md:block lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Stays.png"
                alt="Stays"
              />
              <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col px-9 py-4">
                <h2 className="basier-semibold mb-3 mt-auto text-xl text-[36px] font-semibold leading-[45px] tracking-tight text-white">
                  It pays to book with stays
                </h2>
                <p className="text-[20px] font-semibold leading-normal text-white">
                  Time to get away? Book amazing holiday accommodation all
                  around the world and get up to 10% cashback
                </p>
                <div className="mt-auto pb-8">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      Discover Stays
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-6 w-6"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Stays_Mobile.png"
                alt="Stays"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  It pays to book with stays
                </h2>
                <p className="px-9 pt-5 text-[14px] leading-normal text-white">
                  Time to get away? Book amazing holiday accommodation all
                  around the world and get up to 10% cashback
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get started with Crypto
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Currencies_Small.jpeg"
                alt="Currencies"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  Spend abroad like a local at the real exchange rate
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore FX
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Lounge.png"
                alt="Lounge"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  Travel in style with lounge passes for less
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get started
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Currencies_Small_Mobile.jpeg"
                alt="Currencies"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  Spend abroad like a local at the real exchange rate
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Explore FX
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Lounge_Mobile.png"
                alt="Lounge"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  Travel in style with lounge passes for less
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Get started
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                Lifestyle
              </p>
              <p className="basier-semibold mb-6 text-4xl font-bold lg:text-6xl">
                Get a little more in life with #####
              </p>
              <p className="text-md font-semibold text-[#1f2225] lg:text-xl">
                Let us take care of all the added extras, from donations to
                gifts
                <br />
                for friends and so much more
              </p>
            </div>
          </div>
          <div className="relative hidden grid-cols-2 gap-0 md:grid lg:gap-5">
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Gifts.png"
                alt="Gifts"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-white lg:leading-[45px]">
                  Share the love with ##### gifting
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Spread some love
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div
              href="/"
              className="relative z-10 overflow-hidden rounded-lg px-4 lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Donations.png"
                alt="Donations"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[36px] font-semibold leading-[35px] tracking-tight text-black lg:leading-[45px]">
                  Donate to causes you care about with a tap
                </h2>
                <div className="mt-auto pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Try Donations
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Gifts_Mobile.png"
                alt="Gifts"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  Share the love with ##### gifting
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Spread some love
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Donations_Mobile.png"
                alt="Donations"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-black lg:leading-[45px]">
                  Donate to causes you care about with a tap
                </h2>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-[#0666eb] hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      Try Donations
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
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
          <div className="relative hidden md:block">
            <div
              href="/"
              className="relative z-10 hidden overflow-hidden rounded-lg px-4 md:block lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Security.png"
                alt="Security"
              />
              <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col px-9 py-4">
                <h2 className="basier-semibold mb-3 mt-auto text-xl text-[36px] font-semibold leading-[45px] tracking-tight text-white">
                  We keep your funds safe
                </h2>
                <p className="text-[20px] font-semibold leading-normal text-white">
                  Our disposable virtual cards allow you to make one-off, secure
                  payments. And as an e-money institution (EMI), your money is
                  protected through safeguarding and not by the financial
                  services compensation scheme (FSCS)
                </p>
                <div className="mt-auto pb-8">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[20px] font-semibold text-white hover:bg-[#0666eb]">
                    <span className="justify-center">
                      More about security
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-6 w-6"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative block md:hidden">
            <div
              href="/"
              className="relative z-10 block overflow-hidden rounded-lg px-4 md:hidden lg:px-0"
            >
              <img
                className="h-full w-full rounded-2xl object-cover"
                src="/images/Security_Mobile.png"
                alt="Security"
              />
              <div className="absolute top-0 left-0 flex h-full flex-col py-4">
                <h2 className="basier-semibold mt-4 px-9 text-xl text-[22px] font-semibold leading-[25px] tracking-tight text-white lg:leading-[45px]">
                  We keep your funds safe
                </h2>
                <p className="px-9 pt-3 text-[16px] leading-normal text-gray-100">
                  Our disposable virtual cards allow you to make one-off, secure
                  payments. And as an e-money institution (EMI), your money is
                  protected through safeguarding and not by the financial
                  services compensation scheme (FSCS)
                </p>
                <div className="pl-5 pb-8 pt-2">
                  <span className="inline-flex items-center rounded-[55px] py-[6px] px-4 text-[16px] font-semibold text-white hover:bg-[#0666eb] hover:text-white">
                    <span className="justify-center">
                      More about security
                      <svg
                        viewBox="0 0 24 24"
                        size="24"
                        aria-label="Explore easy payments"
                        className="ml-2 mb-1 inline-block h-4 w-4"
                      >
                        <g fill="currentColor">
                          <path
                            fill="currentColor"
                            d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 mx-auto mt-20 mb-6 px-4 lg:mt-44 lg:mb-32 lg:px-0">
            <div className="text-center">
              <p className="basier-semibold mb-8 text-4xl font-bold lg:text-6xl">
                Join 18M people who already trust us with their money
              </p>
              <div
                className="inline-flex items-center rounded-[10px] bg-[#191c1f] py-[6px] px-4 font-medium text-white"
                href="/"
              >
                <span className="justify-center">Get started</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
