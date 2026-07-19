import { motion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

import "./SolutionsCTA.css";

const SolutionsCTA = () => {
  return (
    <section className="solutions-cta">

      <div className="solutions-cta__container">

        <motion.div
          className="solutions-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="solutions-cta__badge">
            Ready to Get Started?
          </span>

          <h2>
            Build stronger customer relationships with CrestRewards.
          </h2>

          <p>
            Launch loyalty programs, reward customers, engage dealers,
            and increase repeat business with one powerful platform.
          </p>

          <div className="solutions-cta__buttons">

            <Link
              to="/contact"
              className="solutions-cta__button solutions-cta__button--primary"
            >
              Talk to Us

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/platform"
              className="solutions-cta__button solutions-cta__button--secondary"
            >
              <Layers3 size={18} />

              Explore Platform
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SolutionsCTA;