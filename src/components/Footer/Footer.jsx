import React from 'react';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({
  logoText = "ms-ui-kit",
  description = "A quiet foundation for loud ideas — a hand-built React component system.",
  socials = [],
  companyInfo = {
    name: "MS Studio",
    year: new Date().getFullYear(),
  },
  links = [],
  className = ""
}) => {
  return (
    <footer className={`border-t border-line bg-paper ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6">
                <Layers size={16} strokeWidth={2} />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                {logoText}
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {description}
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 sm:grid-cols-3">
            {links.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  {column.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {column.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.href.startsWith('/') ? (
                        <Link
                          to={item.href}
                          className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {companyInfo.year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-ink-soft">
            <a href="#" className="transition-colors hover:text-ink">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
