import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import "./SolutionsHero.css";

const SolutionsHero = () => {
  return (
    <section className="solutions-hero">

      <div className="solutions-hero__background">

        <div className="solutions-hero__blur solutions-hero__blur--one"></div>

        <div className="solutions-hero__blur solutions-hero__blur--two"></div>

      </div>

      <div className="container">

        <motion.div
          className="solutions-hero__content"
          initial={{
            opacity:0,
            y:40,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            duration:.8,
          }}
        >

          <div className="solutions-hero__badge">

            <Sparkles size={15}/>

            Loyalty Solutions

          </div>

          <h1>

            Modern loyalty solutions
            built for
            <span> business growth.</span>

          </h1>

          <p>

            CrestRewards helps businesses engage customers
            through intelligent loyalty programs, reward
            management, gift vouchers and cashback solutions
            that drive long-term relationships.

          </p>

          <div className="solutions-hero__buttons">

            <Link
              to="/contact"
              className="solutions-button solutions-button--primary"
            >

              Talk to us

              <ArrowRight size={18}/>

            </Link>

            <Link
              to="/platform"
              className="solutions-button solutions-button--secondary"
            >

              <ShieldCheck size={18}/>

              Explore Platform

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SolutionsHero;