import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

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

  const menuButtonRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);

        requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navigation-wrapper ${
        scrolled
          ? "navigation-wrapper--scrolled"
          : ""
      }`}
    >
      <nav
        className="navigation-bar container"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="brand-identity"
          aria-label="CrestRewards homepage"
          onClick={closeMenu}
        >
          <span
            className="brand-symbol"
            aria-hidden="true"
          >
            <span className="brand-symbol__core">
              C
            </span>
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
                    isActive
                      ? "navigation-link--active"
                      : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="navigation-action"
          >
            <span>Talk to us</span>

            <ArrowUpRight
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          onClick={() => {
            setMenuOpen((current) => !current);
          }}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {menuOpen ? (
            <X
              size={24}
              aria-hidden="true"
            />
          ) : (
            <Menu
              size={24}
              aria-hidden="true"
            />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <div className="mobile-navigation-layer">
            <motion.button
              className="mobile-navigation-backdrop"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            />

            <motion.div
              id="mobile-navigation-menu"
              className="mobile-navigation-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
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
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mobile-navigation-links">
                {navigationLinks.map(
                  (item, index) => (
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
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `mobile-navigation-link ${
                            isActive
                              ? "mobile-navigation-link--active"
                              : ""
                          }`
                        }
                      >
                        <span>
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                        />
                      </NavLink>
                    </motion.div>
                  )
                )}
              </div>

              <Link
                to="/contact"
                className="mobile-navigation-action"
                onClick={closeMenu}
              >
                Start a conversation

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </Link>

              <div className="mobile-navigation-message">
                <span
                  className="availability-dot"
                  aria-hidden="true"
                />

                <span>
                  Building the future of customer
                  loyalty
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationBar;