import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Rocket,
} from "lucide-react";

import "./PlatformInvitation.css";

const PlatformInvitation = () => {
  return (
    <section className="platform-invitation">

      <div className="container">

        <motion.div
          className="platform-invitation__card"
          initial={{
            opacity: 0,
            y: 60,
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
          }}
        >

          <div className="platform-invitation__background">

            <span className="platform-orb platform-orb--one"></span>
            <span className="platform-orb platform-orb--two"></span>
            <span className="platform-orb platform-orb--three"></span>

          </div>

          <div className="platform-invitation__content">

            <span className="platform-invitation__eyebrow">

              <Sparkles size={15} />

              Start Building Today

            </span>

            <h2>

              Ready to build the future of
              <span> customer loyalty?</span>

            </h2>

            <p>

              CrestRewards brings together customer intelligence,
              engagement, rewards and enterprise scalability into
              one modern platform designed for meaningful
              relationships.

            </p>

            <div className="platform-invitation__actions">

              <Link
                to="/contact"
                className="platform-primary-button"
              >

                Start a Conversation

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/about"
                className="platform-secondary-button"
              >

                <Rocket size={18} />

                Learn More

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default PlatformInvitation;