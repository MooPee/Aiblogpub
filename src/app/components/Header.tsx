import { useState } from "react";
import { Link } from "react-router";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "홈", path: "/" },
    { label: "소개", path: "/about" },
    { label: "스크랩", path: "/scrap" },
    { label: "학습", path: "/learning" },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl text-primary" style={{ fontWeight: 700 }}>
              Dev Digest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground/80 hover:text-primary transition-colors text-[15px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="검색"
            >
              <Search className="w-5 h-5 text-foreground/60" />
            </button>

            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="메뉴"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
