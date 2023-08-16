export const Hero = () => {
  return (
    <>
      <div className="flex px-28 py-6">
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
            <button className="px-9 py-4 bg-darkGreen font-sans text-base mb-16 font-medium text-white rounded-full shadow-2xl">
              Start Using Free, Forever
            </button>
          </span>
          <span>
            <h2 className="font-sans text-lg font-normal text-dblack">
              Download the Eazipay App
            </h2>
            <div className="flex">
              <div className="">
                <div>
                  <img src="/assets/ellipse.png" alt="" />
                  <img src="" alt="" />
                </div>
                <div className="bg-offWHite">
                  <p>Download on the</p>
                  <p>Appstore</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
                <div>
                  <p>Get on</p>
                  <p>Google Play</p>
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
