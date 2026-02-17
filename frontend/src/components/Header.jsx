import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=\"fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/95 backdrop-blur-md border-b border-white/[0.06]\">
      <div className=\"max-w-6xl mx-auto px-6 lg:px-8\">
        <div className=\"flex items-center justify-between h-16 lg:h-20\">
          {/* Logo */}
          <a href=\"/\" className=\"flex items-center gap-2\">
            <img
              src=\"/logo-58.png\"
              alt=\"58\"
              className=\"h-8 w-auto\"
            />
            <span
              className=\"text-xl text-white/90 tracking-wide\"
              style={{ fontFamily: \"'Source Sans 3', sans-serif\", fontWeight: 700 }}
            >
              SYSTEMS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className=\"hidden md:flex items-center gap-8\">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className=\"text-sm font-medium text-white/68 hover:text-white/92 transition-opacity duration-200\"
              >
                {link.label}
              </a>
            ))}
            <a
              href=\"#contact\"
              className=\"btn-premium text-sm font-medium px-5 py-2.5 text-[#0B0F14] rounded\"
            >
              Book a free audit
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className=\"md:hidden p-2 text-white/68 hover:text-white/92\"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label=\"Toggle menu\"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className=\"md:hidden py-4 border-t border-white/[0.06]\">
            <div className=\"flex flex-col gap-4\">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className=\"text-base font-medium text-white/68 hover:text-white/92 transition-opacity duration-200\"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href=\"#contact\"
                className=\"btn-premium text-base font-medium px-5 py-2.5 text-[#0B0F14] rounded text-center\"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a free audit
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;