import {
    ArrowUpRight,
    Mail,
  } from "lucide-react";
  
  import {
    Link,
  } from "react-router-dom";
  
  import "./Footer.css";
  
  const footerGroups = [
    {
      title: "Explore",
  
      links: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Platform",
          to: "/platform",
        },
        {
          label: "About",
          to: "/about",
        },
        {
          label: "Contact",
          to: "/contact",
        },
      ],
    },
  
    {
      title: "Ideas",
  
      links: [
        {
          label: "Customer understanding",
          to: "/platform",
        },
        {
          label: "Intelligent engagement",
          to: "/platform",
        },
        {
          label: "Reward experiences",
          to: "/platform",
        },
        {
          label: "Growth foundation",
          to: "/platform",
        },
      ],
    },
  ];
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="site-footer">
  
        <div className="container">
  
          <div className="site-footer__main">
  
            <div className="site-footer__brand">
  
              <Link
                to="/"
                className="site-footer__logo"
                aria-label="Go to CrestRewards homepage"
              >
                <span aria-hidden="true">
                  C
                </span>
  
                CrestRewards
              </Link>
  
              <p>
                Exploring a more connected, thoughtful,
                and relationship-first future for
                customer loyalty.
              </p>
  
              <a
                href="mailto:hello@crestrewards.com"
                className="site-footer__email"
              >
                <Mail
                  size={15}
                  aria-hidden="true"
                />
  
                hello@crestrewards.com
              </a>
  
            </div>
  
  
            <nav
              className="site-footer__navigation"
              aria-label="Footer navigation"
            >
  
              {footerGroups.map((group) => (
  
                <div
                  className="site-footer__group"
                  key={group.title}
                >
  
                  <strong>
                    {group.title}
                  </strong>
  
                  <div>
  
                    {group.links.map((link) => (
  
                      <Link
                        to={link.to}
                        key={link.label}
                      >
                        {link.label}
                      </Link>
  
                    ))}
  
                  </div>
  
                </div>
  
              ))}
  
  
              <div className="site-footer__group">
  
                <strong>
                  Connect
                </strong>
  
                <div>
  
                  <Link to="/contact">
                    Start a conversation
  
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                    />
                  </Link>
  
                  <Link to="/contact">
                    Partnership ideas
  
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                    />
                  </Link>
  
                  <Link to="/contact">
                    Join the journey
  
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                    />
                  </Link>
  
                </div>
  
              </div>
  
            </nav>
  
          </div>
  
  
          <div className="site-footer__bottom">
  
            <span>
              © {currentYear} CrestRewards.
              Building the journey.
            </span>
  
            <div className="site-footer__bottom-links">
  
              <Link to="/privacy">
                Privacy
              </Link>
  
              <Link to="/terms">
                Terms
              </Link>
  
            </div>
  
          </div>
  
        </div>
  
      </footer>
    );
  };
  
  export default Footer;