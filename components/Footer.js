/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <>
      <footer className="mx-auto mt-20 grid w-full bg-[#191c1f]">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-5">
          <div className="z-10 mx-auto mt-32 mb-6 px-4 lg:px-0">
            <div className="text-center">
              <p className="basier-semibold text-[24px] font-bold text-[#77828c] lg:text-[34px]">
                Choose your plan
              </p>
            </div>
          </div>
          <div className="mx-6 mb-0 grid grid-cols-1 space-y-6 space-x-0 text-[#191c1f] md:grid-cols-4 md:space-x-6 md:space-y-0 lg:mx-0 lg:space-x-8">
            <a
              href="/"
              className="relative rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-6 lg:pb-8 lg:pl-6 lg:pr-9"
            >
              <span className="basier-semibold text-[24px] lg:text-[34px]">
                Standard
              </span>
              <h3 className="basier-semibold text-[16px] font-semibold lg:text-[20px]">
                Free
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Whether you're looking to save money spending abroad or sticking
                to your budget with our built-in budgeting, get more from your
                money with our Standard account
              </span>
              <div className="absolute bottom-0 right-0 mb-4 mr-5 text-[#75808a]">
                <svg viewBox="0 0 24 24" size="24" className="h-6 w-6">
                  <g fill="currentColor">
                    <path
                      fill="currentColor"
                      d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="/"
              className="relative rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-6 lg:pb-8 lg:pl-6 lg:pr-9"
            >
              <h2 className="basier-semibold text-[24px] lg:text-[34px]">
                Plus
              </h2>
              <h3 className="basier-semibold text-[16px] font-semibold lg:text-[20px]">
                £2.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Give your everyday finances a boost. Get more out of your money
                for less than the cost of a coffee
              </span>
              <div className="absolute bottom-0 right-0 mb-4 mr-5 text-[#75808a]">
                <svg viewBox="0 0 24 24" size="24" className="h-6 w-6">
                  <g fill="currentColor">
                    <path
                      fill="currentColor"
                      d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="/"
              className="relative rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-6 lg:pb-8 lg:pl-6 lg:pr-9"
            >
              <h2 className="basier-semibold text-[24px] lg:text-[34px]">
                Premium
              </h2>
              <h3 className="basier-semibold text-[16px] font-semibold lg:text-[20px]">
                £6.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Upgrade to a global lifestyle. Get the confidence to spend,
                invest, and save smarter across the globe
              </span>
              <div className="absolute bottom-0 right-0 mb-4 mr-5 text-[#75808a]">
                <svg viewBox="0 0 24 24" size="24" className="h-6 w-6">
                  <g fill="currentColor">
                    <path
                      fill="currentColor"
                      d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="/"
              className="relative rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-6 lg:pb-8 lg:pl-6 lg:pr-9"
            >
              <h2 className="basier-semibold text-[24px] lg:text-[34px]">
                Metal
              </h2>
              <h3 className="basier-semibold text-[16px] font-semibold lg:text-[20px]">
                £12.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Unlock your money's potential. Make your money work for you with
                0.7% interest paid daily on savings, cashback, low-fee crypto
                and much more
              </span>
              <div className="absolute bottom-0 right-0 mb-4 mr-5 text-[#75808a]">
                <svg viewBox="0 0 24 24" size="24" className="h-6 w-6">
                  <g fill="currentColor">
                    <path
                      fill="currentColor"
                      d="M20.5 11.992c0-.276-.105-.535-.306-.737L14.77 5.832a.919.919 0 0 0-1.3 0l-.324.325a.919.919 0 0 0 0 1.3l3.394 3.395H4.42a.919.919 0 0 0-.92.919v.46c0 .507.411.918.92.918h12.12l-3.394 3.394a.919.919 0 0 0 0 1.3l.325.325c.359.359.94.359 1.3 0l5.423-5.422c.204-.205.306-.477.306-.754Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="z-10 mx-auto mt-6 mb-6 px-8 lg:mt-16 lg:mb-28 lg:px-0">
            <div className="text-center">
              <p className="basier-regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                What are you waiting for?
              </p>
              <p className="basier-semibold mb-10 text-[34px] font-bold text-white lg:text-6xl">
                Get the only financial super app
              </p>
              <a
                className="inline-flex items-center rounded-[10px] bg-white py-[6px] px-4 font-medium text-[#191c1f]"
                href="/"
              >
                <span className="justify-center">Try Revolut Now</span>
              </a>
            </div>
          </div>
          <div className="mb-24 hidden grid-cols-6 gap-4 px-6 md:grid lg:px-0">
            <div>
              <h2 className="basier-regular mb-1 text-[12px] text-[#ffffffcc]">
                Everyday needs
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Payments
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Early salary
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                On-Demand Pay
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Cards
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Budgeting and analytics
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Junior
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Open banking
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Pockets
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Rewards
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Subscriptions
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Gifting
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Donations
              </a>
            </div>
            <div>
              <h2 className="basier-regular mb-1 text-[12px] text-[#ffffffcc]">
                Invest
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Crypto
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Stocks
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Commodities
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Vaults
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Saving vaults
              </a>
              <h2 className="basier-regular float-left clear-left mt-3 mb-1 text-[12px] text-[#ffffffcc]">
                Insurance
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Pet Insurance
              </a>
              <h2 className="basier-regular float-left clear-left mt-3 mb-1 text-[12px] text-[#ffffffcc]">
                Security
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Security
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Revolut Shopper
              </a>
            </div>
            <div>
              <h2 className="basier-regular mb-1 text-[12px] text-[#ffffffcc]">
                Travel
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                International transfers
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Currency exchange
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Lounge & Smart delay
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Stays
              </a>
              <h2 className="basier-regular float-left clear-left mt-3 mb-1 text-[12px] text-[#ffffffcc]">
                Help
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Customer help
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                System status
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Community
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Developers API
              </a>
            </div>
            <div>
              <h2
                href="/"
                className="basier-regular mb-1 text-[12px] text-[#ffffffcc]"
              >
                Plans
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Standard
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Plus
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Premium
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Metal
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Compare plans
              </a>
            </div>
            <div>
              <h2 className="basier-regular mb-1 text-[12px] text-[#ffffffcc]">
                Company
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                About us
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Culture
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Diversity and Inclusion
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Code of conduct
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Careers
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Blog
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                News
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Leadership
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Affiliates
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Influencers
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Contact
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Finacial statements
              </a>
            </div>
            <div>
              <h2 className="basier-regular mb-1 text-[12px] text-[#ffffffcc]">
                Follow
              </h2>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Facebook
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Instagram
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Twitter
              </a>
              <a
                href="/"
                className="float-left clear-left mb-1 text-[12px] text-[#ffffff99] transition hover:text-white"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="px-4 lg:px-0">
            <a href="/" className="inline-block hover:text-white">
              <span className="flex items-center text-[12px] text-[#ffffff99] transition hover:text-white">
                <img
                  src="https://assets.revolut.com/assets/flags/GB.svg"
                  alt="User profile"
                  className="mr-2 inline-block h-5 w-5 lg:mr-3"
                />
                United Kingdom
              </span>
            </a>
            <ul className="flex list-none flex-wrap pb-4 pt-1 pr-2 lg:pt-3">
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Website terms
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Legal Agreements
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Complaints
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Responsible Disclosure Program Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  UK Modern Slavery Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="pr-5 text-[12px] text-[#ffffff99] transition hover:text-white"
                >
                  Customer Vulnerability
                </a>
              </li>
            </ul>
          </div>
          <p className="px-4 text-[12px] text-[#ffffff4d] lg:px-0">
            © Revolut Ltd 2022
          </p>
          <p className="px-4 text-[12px] text-[#ffffff4d] lg:px-0">
            If you would like to find out more about which Revolut entity you
            receive services from, or if you have any other questions, please
            reach out to us via the in-app chat in the Revolut app. Revolut Ltd
            (No. 08804411) is authorised by the Financial Conduct Authority
            under the Electronic Money Regulations 2011 (Firm Reference 900562).
            Registered address: 7 Westferry Circus, Canary Wharf, London,
            England, E14 4HD. Insurance related-products are arranged by Revolut
            Travel Ltd which is authorised by the Financial Conduct Authority to
            undertake insurance distribution activities (FCA No: 780586) and by
            Revolut Ltd, an Appointed Representative of Revolut Travel Ltd in
            relation to insurance distribution activities. Trading and
            investment products are provided by Revolut Trading Ltd (No. 832790)
            is wholly owned subsidiary of Revolut Ltd and is an appointed
            representative of Resolution Compliance Ltd which is authorised and
            regulated by the Financial Conduct Authority.
          </p>
          <p className="px-4 text-[12px] text-[#ffffff4d] lg:px-0">
            Revolut's cryptocurrency service is not regulated by the FCA, other
            than for the purposes of money laundering. Revolut Ltd has been
            temporarily registered with the FCA as a cryptoasset business until
            31 March 2022, pending determination of its application by the FCA.
          </p>
          <p className="mb-8 px-4 text-[12px] text-[#ffffff4d] lg:px-0">
            Revolut's commodities service is not regulated by the FCA.
          </p>
        </div>
      </footer>
    </>
  );
}
