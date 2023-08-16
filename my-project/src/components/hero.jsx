export const Hero = () => {
  return (
    <>
      <div className="flex pl-28 py-6">
        <div>
          <span>
            <h1 className="text-6xl text-darkBrown font-serif font-medium mb-4">
              Run your <span>payroll</span>{" "}
              <span className="text-lightBrown">easily</span> in{" "}
              <span className="text-orange">seconds</span>
            </h1>
            <p className="text-xl font-sans text-gray font-normal mb-4">
              We've built an all-inclusive simple solution for individual and
              businesses to manage staff, pay salaries, bills and relevant taxes
              all at once.
            </p>
            <button className="px-9 py-4 bg-darkGreen font-sans text-base mb-12 font-medium text-white rounded-full shadow-2xl">
              Start Using Free, Forever
            </button>
          </span>
          <span>
            <h2 className="font-sans text-lg font-normal mb-4 text-dblack">
              Download the Eazipay App
            </h2>
            <div className="flex gap-6 text-darkBrown font-sans">
              <div className="">
                <div className="flex items-center gap-6 bg-white shadow-2xl py-3 px-3 rounded-lg">
                  <div className="flex items-center justify-center">
                    <img src="/assets/ellipse.png" alt="" />
                    <img src="/assets/apple.png" alt="" className="absolute"/>
                  </div>
                  <div className="">
                    <p className="font-medium text-xs">Download on the</p>
                    <p className="text-lg font-bold">Appstore</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 font-sansbg-white shadow-2xl px-3 rounded-lg">
                <div className="flex items-center justify-center">
                  <img src="/assets/ellipse.png" alt="" />
                  <img src="/assets/googleplay.png" className="absolute w-4" alt="" />
                </div>
                <div>
                  <p className="text-xs">Get on</p>
                  <p className="text-darkBrown font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div>
          <img src="/assets/frame.png" alt="" />
        </div>
      </div>
    </>
  );
};
