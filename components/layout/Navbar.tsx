export default function Navbar() {
    return (
      <nav className="w-full bg-[#0f172a] text-white fixed top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-white">Nexa</span>
            <span className="text-blue-500">Web</span>
            <span className="text-gray-400 text-sm ml-1">Technologies</span>
          </h1>

          <div className="space-x-8 hidden md:block">
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
            <a href="#pricing" className="hover:text-blue-400 transition">
              Pricing
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
  