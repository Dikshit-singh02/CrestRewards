import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";

import "./FutureInvitation.css";

const FutureInvitation = () => {
  return (
    <section
      className="future-invitation"
      aria-labelledby="future-invitation-title"
    >
      <div className="container">
        <motion.div
          className="future-invitation__card"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="future-invitation__background"
            aria-hidden="true"
          >
            <div className="future-invitation__orb future-invitation__orb--one" />

            <div className="future-invitation__orb future-invitation__orb--two" />

            <div className="future-invitation__mesh" />
          </div>

          <div className="future-invitation__content">
            <div className="future-invitation__eyebrow">
              <Sparkles
                size={15}
                aria-hidden="true"
              />

              <span>
                The journey starts here
              </span>
            </div>

            <h2 id="future-invitation-title">
              We are building for
              <span>
                {" "}relationships that last.
              </span>
            </h2>

            <p>
              CrestRewards is at the beginning of its journey.
              We are shaping ideas around connected customer
              understanding, meaningful engagement, and loyalty
              experiences designed for the future.
            </p>

            <div className="future-invitation__actions">
              <Link
                to="/contact"
                className="future-invitation__primary"
              >
                Start a conversation

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/about"
                className="future-invitation__secondary"
              >
                <MessageCircleMore
                  size={17}
                  aria-hidden="true"
                />

                Discover our thinking
              </Link>
            </div>
          </div>

          <div
            className="future-invitation__visual"
            aria-hidden="true"
          >
            <div className="future-sphere">
              <div className="future-sphere__ring future-sphere__ring--one" />

              <div className="future-sphere__ring future-sphere__ring--two" />

              <div className="future-sphere__ring future-sphere__ring--three" />

              <div className="future-sphere__core">
                <span>C</span>
              </div>

              <span className="future-sphere__point future-sphere__point--one" />

              <span className="future-sphere__point future-sphere__point--two" />

              <span className="future-sphere__point future-sphere__point--three" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureInvitation;