import { useState } from "react";
import {
    Menu,
    X,
    ShoppingCart,
    Search,
    User,
} from "lucide-react";

const navItems = ["SS", "FW", "PANTS", "T-Shirt", "SALE", "COLLECTION", "COMMUNITY"];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-yellow-400 font-bold text-2xl">LANDAS</div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:text-yellow-400 text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Icons */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="#" aria-label="Cart">
                        <ShoppingCart size={20} />
                    </a>
                    <a href="#" aria-label="Search">
                        <Search size={20} />
                    </a>
                    <a href="#" aria-label="User/Login">
                        <User size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-black px-4 pb-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block text-sm font-medium hover:text-yellow-400"
                        >
                            {item}
                        </a>
                    ))}

                    <div className="flex space-x-4 pt-3 border-t border-gray-700">
                        <a href="#" aria-label="Cart">
                            <ShoppingCart size={20} />
                        </a>
                        <a href="#" aria-label="Search">
                            <Search size={20} />
                        </a>
                        <a href="#" aria-label="User/Login">
                            <User size={20} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
