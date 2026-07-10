import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import "./NavigationBar.css";

const navigationLinks = [
  {
    label: "Platform",
    path: "/platform",
  },
  {
    label: "Solutions",
    path: "/solutions",
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Resources",
    path: "/resources",
  },
  {
    label: "About",
    path: "/about",
  },
];

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`navigation-wrapper ${
        scrolled ? "navigation-wrapper--scrolled" : ""
      }`}
    >
      <nav className="navigation-bar container">
        <Link
          to="/"
          className="brand-identity"
          aria-label="CrestRewards home"
        >
          <span className="brand-symbol" aria-hidden="true">
            <span className="brand-symbol__core">C</span>
          </span>

          <span className="brand-name">
            Crest<span>Rewards</span>
          </span>
        </Link>

        <div className="desktop-navigation">
          <div className="navigation-links">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `navigation-link ${
                    isActive ? "navigation-link--active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="navigation-action">
            <span>Talk to us</span>
            <ArrowUpRight size={17} strokeWidth={2} />
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((currentState) => !currentState)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              className="mobile-navigation-backdrop"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="mobile-navigation-panel"
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <div className="mobile-navigation-links">
                {navigationLinks.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `mobile-navigation-link ${
                          isActive ? "mobile-navigation-link--active" : ""
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={18} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="mobile-navigation-action">
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>

              <div className="mobile-navigation-message">
                <span className="availability-dot" />
                Building the future of customer loyalty
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;