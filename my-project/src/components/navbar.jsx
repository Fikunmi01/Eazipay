export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-around py-6 font-sans px-5">
        <div>
          <img src="/assets/logo.png" alt="" />
        </div>
        <ul className="inline-flex gap-6 font-medium text-gray text-base">
            <li>Individual</li>
            <li>Business</li>
            <li>Pricing</li>
            <li>Set your payroll</li>
        </ul>
        <div className="flex gap-6 text-sm font-medium">
             <button className="text-darkGreen border-solid border-2 border-darkGreen px-8 py-2.5 rounded-full">Login</button>
            <button className="text-white bg-darkGreen border-solid border-2 border-darkGreen px-8 py-2.5 rounded-full">Register</button>
        </div>
      </div>
    </>
  );
};
