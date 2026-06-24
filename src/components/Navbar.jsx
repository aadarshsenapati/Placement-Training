import { Camera } from 'lucide-react';

function Navbar() {
  return (
    <div className="bg-[#F6F6F4] px-4 py-2 border-b border-gray-200">
      <div className="mx-auto flex items-center justify-between">

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2">
            <Camera size={28}  />

            <h1 className="text-3xl font-medium text-black">
              Clause
            </h1>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black"
            >
              Solutions
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black"
            >
              Customers
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black"
            >
              Pricing
            </a>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <button className="bg-white px-5 py-2 rounded-xl text-sm font-medium text-[#014636] border border-gray-200 shadow-sm">
            Log In
          </button>

          <button className="bg-[#014636] px-5 py-2 rounded-xl text-sm font-medium text-white">
            Start Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default Navbar;