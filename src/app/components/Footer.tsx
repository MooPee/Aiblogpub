import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2026 Dev Digest. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              AI 기반 기술 아카이브 플랫폼
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="mailto:dev@example.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
