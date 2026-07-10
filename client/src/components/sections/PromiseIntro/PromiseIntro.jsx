import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Gift,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import "./PromiseIntro.css";

const PromiseIntro = () => {
  const visualRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    if (!visualRef.current) return;

    const bounds = visualRef.current.getBoundingClientRect();

    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    rotateY.set(((mouseX - centerX) / centerX) * 5);
    rotateX.set(((centerY - mouseY) / centerY) * 5);
  };

  const resetRotation = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="promise-intro">
      <div className="promise-intro__background" aria-hidden="true">
        <div className="promise-intro__grid" />
        <div className="promise-intro__glow promise-intro__glow--one" />
        <div className="promise-intro__glow promise-intro__glow--two" />
        <div className="promise-intro__orb promise-intro__orb--one" />
        <div className="promise-intro__orb promise-intro__orb--two" />
      </div>

      <div className="promise-intro__content container">
        <motion.div
          className="promise-intro__message"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="promise-intro__eyebrow"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="promise-intro__eyebrow-icon">
              <Sparkles size={14} />
            </span>

            <span>Customer loyalty, thoughtfully reimagined</span>
          </motion.div>

          <h1 className="promise-intro__title">
            Turn every interaction into{" "}
            <span className="promise-intro__title-gradient">
              lasting loyalty.
            </span>
          </h1>

          <p className="promise-intro__description">
            Bring customer understanding, personalized engagement and
            meaningful rewards together in one connected experience built for
            stronger relationships.
          </p>

          <div className="promise-intro__actions">
            <Link
              to="/contact"
              className="promise-intro__button promise-intro__button--primary"
            >
              <span>Start your loyalty journey</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/platform"
              className="promise-intro__button promise-intro__button--secondary"
            >
              Explore the platform
            </Link>
          </div>

          <div className="promise-intro__principles">
            <div className="promise-intro__principle">
              <span className="promise-intro__principle-dot" />
              Understand better
            </div>

            <div className="promise-intro__principle">
              <span className="promise-intro__principle-dot" />
              Engage smarter
            </div>

            <div className="promise-intro__principle">
              <span className="promise-intro__principle-dot" />
              Reward meaningfully
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={visualRef}
          className="promise-intro__visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetRotation}
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="loyalty-scene"
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
            }}
          >
            <div className="loyalty-scene__halo" />

            <motion.div
              className="floating-insight floating-insight--members"
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="floating-insight__icon">
                <Users size={17} />
              </span>

              <span className="floating-insight__content">
                <small>Customer connection</small>
                <strong>Growing together</strong>
              </span>
            </motion.div>

            <motion.div
              className="floating-insight floating-insight--growth"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="floating-insight__icon">
                <TrendingUp size={17} />
              </span>

              <span className="floating-insight__content">
                <small>Engagement</small>
                <strong>Built to grow</strong>
              </span>
            </motion.div>

            <div className="loyalty-card loyalty-card--back">
              <div className="loyalty-card__shine" />
            </div>

            <div className="loyalty-card loyalty-card--middle">
              <div className="loyalty-card__shine" />
            </div>

            <div className="loyalty-card loyalty-card--front">
              <div className="loyalty-card__shine" />

              <div className="loyalty-card__header">
                <div className="loyalty-card__brand">
                  <span className="loyalty-card__brand-mark">C</span>

                  <span>
                    Crest
                    <strong>Rewards</strong>
                  </span>
                </div>

                <Sparkles size={22} />
              </div>

              <div className="loyalty-card__center">
                <span className="loyalty-card__label">
                  Your loyalty journey
                </span>

                <strong className="loyalty-card__points">
                  Made meaningful
                </strong>

                <span className="loyalty-card__message">
                  Every interaction has value.
                </span>
              </div>

              <div className="loyalty-card__footer">
                <span>MEMBER EXPERIENCE</span>

                <div className="loyalty-card__signal">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <motion.div
              className="reward-token reward-token--gift"
              animate={{
                y: [0, -12, 0],
                rotate: [-6, 3, -6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gift size={24} />
            </motion.div>

            <motion.div
              className="reward-token reward-token--spark"
              animate={{
                y: [0, 10, 0],
                rotate: [8, -4, 8],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={22} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="promise-intro__fade" aria-hidden="true" />
    </section>
  );
};

export default PromiseIntro;