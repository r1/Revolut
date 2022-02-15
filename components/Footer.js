/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <>
      <footer className="bg mt-20">
        <div className="mx-auto flex max-w-[1000px] flex-col gap-5">
          <div className="z-10 mx-auto mt-32 mb-6 px-4 lg:px-0">
            <div className="text-center">
              <p className="Basier-SemiBold text-[24px] font-bold text-[#77828c] lg:text-[34px]">
                Choose your plan
              </p>
            </div>
          </div>
          <div className="mx-6 mb-0 grid grid-cols-1 space-y-6 space-x-0 text-[#191c1f] md:grid-cols-4 md:space-x-6 md:space-y-0 lg:mx-0 lg:space-x-6">
            <div className="rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-8 lg:pb-8 lg:pl-6 lg:pr-9">
              <span className="Basier-SemiBold text-[24px] lg:text-[34px]">
                Standard
              </span>
              <h3 className="Basier-SemiBold text-[16px] font-semibold lg:text-[20px]">
                Free
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Whether you're looking to save money spending abroad or sticking
                to your budget with our built-in budgeting, get more from your
                money with our Standard account
              </span>
            </div>
            <div className="rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-8 lg:pb-8 lg:pl-6 lg:pr-9">
              <h2 className="Basier-SemiBold text-[24px] lg:text-[34px]">
                Plus
              </h2>
              <h3 className="Basier-SemiBold text-[16px] font-semibold lg:text-[20px]">
                £2.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Give your everyday finances a boost. Get more out of your money
                for less than the cost of a coffee
              </span>
            </div>
            <div className="rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-8 lg:pb-8 lg:pl-6 lg:pr-9">
              <h2 className="Basier-SemiBold text-[24px] lg:text-[34px]">
                Premium
              </h2>
              <h3 className="Basier-SemiBold text-[16px] font-semibold lg:text-[20px]">
                £6.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Upgrade to a global lifestyle. Get the confidence to spend,
                invest, and save smarter across the globe
              </span>
            </div>
            <div className="rounded-3xl bg-white pt-8 pb-6 pl-4 pr-2 lg:pt-8 lg:pb-8 lg:pl-6 lg:pr-9">
              <h2 className="Basier-SemiBold text-[24px] lg:text-[34px]">
                Metal
              </h2>
              <h3 className="Basier-SemiBold text-[16px] font-semibold lg:text-[20px]">
                £12.99/month
              </h3>
              <span className="text-[12px] text-[#75808a] lg:text-[14px]">
                Unlock your money's potential. Make your money work for you with
                0.7% interest paid daily on savings, cashback, low-fee crypto
                and much more
              </span>
            </div>
          </div>
          <div className="z-10 mx-auto mt-6 mb-6 px-8 lg:mt-16 lg:mb-20 lg:px-0">
            <div className="text-center">
              <p className="Basier-Regular text-md mb-5 font-bold text-[#77828c] lg:text-xl">
                What are you waiting for?
              </p>
              <p className="Basier-SemiBold mb-10 text-[34px] font-bold text-white lg:text-6xl">
                Get the only financial super app
              </p>
              <a
                className="inline-flex items-center rounded-[10px] bg-white py-[6px] px-4 font-medium text-black"
                href="/"
              >
                <span className="justify-center">Try Revolut Now</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
