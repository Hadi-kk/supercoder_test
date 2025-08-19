import Icon from "@/shared/components/atoms/Icon";
import { iconSrcMapping } from "@/shared/constants/iconSrcMapping";

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
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black h-[64px]">
      <div className="container mx-auto px-8 py-4 bg-transparent">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-yellow-400 font-extrabold text-3xl tracking-tight">
              LANDAS
            </span>
          </div>
          {/* Navlinks */}
          <nav className="flex items-center space-x-14">
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
          <div className="flex items-center space-x-7">
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
            <span className="text-white  text-lg hover:text-yellow-400 transition-colors">
              로그아웃
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
