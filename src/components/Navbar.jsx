import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3 font-bold text-xl text-gray-800"
          >
            <img src="/logo.png" alt="logo" className="h-9 w-9" />
            <span className="text-[#bd1818]">Scan App</span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/HomePage"
              className="font-medium hover:text-[#bd1818] transition"
            >
              Home
            </Link>

            <Link
              to="/Home"
              className="font-medium hover:text-[#bd1818] transition"
            >
              ScanIn
            </Link>

            <Link
              to="/Dashboard"
              className="font-medium hover:text-[#bd1818] transition"
            >
              Dashboard
            </Link>

            {/* Login */}

            <div className="relative">
              <button
                onClick={() => {
                  setLoginOpen(!loginOpen);
                  setRegisterOpen(false);
                }}
                className="flex items-center gap-1 font-medium hover:text-[#bd1818]"
              >
                Login
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {loginOpen && (
                <div className="absolute mt-3 w-40 rounded-xl bg-white shadow-xl border">
                  <Link
                    to="/AdminLogin"
                    className="block px-4 py-3 hover:bg-red-50"
                  >
                    Admin
                  </Link>

                  <Link
                    to="/UserLogin"
                    className="block px-4 py-3 hover:bg-red-50"
                  >
                    User
                  </Link>
                </div>
              )}
            </div>

            {/* Register */}

            <div className="relative">
              <button
                onClick={() => {
                  setRegisterOpen(!registerOpen);
                  setLoginOpen(false);
                }}
                className="bg-[#bd1818] text-white px-5 py-2 rounded-lg hover:bg-[#991b1b] transition flex items-center gap-1"
              >
                Register
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {registerOpen && (
                <div className="absolute mt-3 w-40 rounded-xl bg-white shadow-xl border">
                  <Link
                    to="/AdminRegister"
                    className="block px-4 py-3 hover:bg-red-50"
                  >
                    Admin
                  </Link>

                  <Link
                    to="/UserRegister"
                    className="block px-4 py-3 hover:bg-red-50"
                  >
                    User
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7 text-[#bd1818]" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-[#bd1818]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg">

          <Link
            to="/HomePage"
            className="block px-6 py-4 hover:bg-red-50"
          >
            Home
          </Link>

          <Link
            to="/Home"
            className="block px-6 py-4 hover:bg-red-50"
          >
            ScanIn
          </Link>

          <Link
            to="/Dashboard"
            className="block px-6 py-4 hover:bg-red-50"
          >
            Dashboard
          </Link>

          {/* Login */}

          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex justify-between items-center w-full px-6 py-4 hover:bg-red-50"
          >
            Login
            <ChevronDownIcon className="w-5 h-5" />
          </button>

          {loginOpen && (
            <>
              <Link
                to="/AdminLogin"
                className="block pl-10 py-3 text-gray-600 hover:bg-red-50"
              >
                Admin
              </Link>

              <Link
                to="/UserLogin"
                className="block pl-10 py-3 text-gray-600 hover:bg-red-50"
              >
                User
              </Link>
            </>
          )}

          {/* Register */}

          <button
            onClick={() => setRegisterOpen(!registerOpen)}
            className="flex justify-between items-center w-full px-6 py-4 bg-[#bd1818] text-white"
          >
            Register
            <ChevronDownIcon className="w-5 h-5" />
          </button>

          {registerOpen && (
            <div className="bg-red-50">
              <Link
                to="/AdminRegister"
                className="block pl-10 py-3"
              >
                Admin
              </Link>

              <Link
                to="/UserRegister"
                className="block pl-10 py-3"
              >
                User
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;