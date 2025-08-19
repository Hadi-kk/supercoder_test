import { useState } from "react";
import Icon from "@/shared/components/atoms/Icon";
import { iconSrcMapping } from "@/shared/constants/iconSrcMapping";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "@/routes/routes";
import useAuthStore from "@/shared/stores/authStore";

const navLinks = [
  { name: "SS", href: "#" },
  { name: "FW", href: "#" },
  { name: "PANTS", href: "#" },
  { name: "T-Shirt", href: "#" },
  { name: "SALE", href: "#" },
  { name: "COLLECTION", href: "#" },
  { name: "COMMUNITY", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useAuthStore((s) => s.user);

  const AuthControls: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();
    if (!user) {
      return (
        <Link
          to={ROUTE_PATH.LOGIN}
          className={`text-white text-lg hover:text-yellow-400 transition-colors ${
            isMobile ? "" : "hidden md:inline"
          }`}
        >
          로그인
        </Link>
      );
    }
    return (
      <div
        className={`flex items-center space-x-3 ${
          isMobile ? "" : "hidden md:flex"
        }`}
      >
        <span className="text-white text-sm truncate max-w-[160px]">
          {user.id}
        </span>
        <button
          onClick={() => {
            logout();
            navigate(ROUTE_PATH.MAIN);
          }}
          className="text-white text-sm hover:text-yellow-400 underline"
        >
          로그아웃
        </button>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black h-[64px]">
      <div className="container mx-auto px-8 py-4 bg-transparent">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center flex-1 sm:flex-none sm:items-center">
            <a href="#" className="block mx-auto sm:mx-0">
              <img
                src="/assets/logo.svg"
                alt="LANDAS"
                className="h-4 sm:h-5 md:h-6 object-contain"
              />
            </a>
          </div>
          {/* Navlinks */}
          <nav className="hidden md:flex items-center space-x-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white  font-pretendard text-[18px] leading-[1] tracking-normal hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Icons and Logout */}
          <div className="flex items-center space-x-4">
            <Icon
              src={iconSrcMapping.basket}
              alt="Basket"
              className="h-6 w-6 text-white hover:text-yellow-400 transition-colors"
            />
            <Icon
              src={iconSrcMapping.user}
              alt="User"
              className="h-6 w-6 text-white hover:text-yellow-400 transition-colors"
            />
            <Icon
              src={iconSrcMapping.search}
              alt="Search"
              className="h-6 w-6 text-white hover:text-yellow-400 transition-colors"
            />
            <AuthControls />
            {/* mobile menu button */}
            <button
              className="md:hidden ml-2 p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile slide-over menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 h-full w-72 bg-black text-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <img
                src="/assets/logo.svg"
                alt="LANDAS"
                className="h-7 object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg hover:text-yellow-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex items-center space-x-3">
                <Icon
                  src={iconSrcMapping.user}
                  alt="User"
                  className="h-6 w-6 text-white"
                />
                <AuthControls isMobile />
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;
