import { useState, useEffect } from "react";
import { Phone, Send } from "lucide-react";

const navItems = [
  { label: "Что вы получите", href: "#benefits" },
  { label: "Кому подходит", href: "#audience" },
  { label: "Как проходит", href: "#steps" },
  { label: "О нас", href: "#trust" },
  { label: "FAQ", href: "#faq" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-display font-bold text-foreground tracking-tight"
        >
          HR <span className="gradient-text">Инструментарий</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href.slice(1))}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79871837315" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            +7 (987) 183-73-15
          </a>
          <a href="https://web.telegram.org/k/#@hrinst_bot" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <Send className="w-3.5 h-3.5" />
            Telegram
          </a>
          <button
            onClick={() => scrollTo("audit-form")}
            className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:shadow-[0_0_20px_hsl(38_92%_55%/0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Записаться
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 px-4 pb-6 pt-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => { scrollTo(item.href.slice(1)); setMenuOpen(false); }}
              className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/20"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a href="tel:+79871837315" className="text-sm text-muted-foreground flex items-center gap-2">
              <Phone className="w-4 h-4" /> +7 (987) 183-73-15
            </a>
            <a href="https://web.telegram.org/k/#@hrinst_bot" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground flex items-center gap-2">
              <Send className="w-4 h-4" /> Написать в Telegram
            </a>
            <button
              onClick={() => { scrollTo("audit-form"); setMenuOpen(false); }}
              className="mt-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold"
            >
              Записаться на аудит
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
