import { Link } from "react-router";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "대시보드", path: "/admin" },
    { label: "글 관리", path: "/admin/posts" },
    { label: "스크랩 관리", path: "/admin/scraps" },
    { label: "학습 관리", path: "/admin/learning" },
    { label: "설정", path: "/admin/settings" },
  ];

  return (
    <header className="bg-card border-b border-border">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/admin" className="flex items-center">
              <span className="text-xl text-primary" style={{ fontWeight: 700 }}>
                Dev Digest
              </span>
              <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded text-xs">
                ADMIN
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block"
            >
              사이트 보기
            </Link>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">로그아웃</span>
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
