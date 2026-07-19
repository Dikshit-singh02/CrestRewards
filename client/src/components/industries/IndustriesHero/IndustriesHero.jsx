import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

import "./IndustriesHero.css";

const IndustriesHero = () => {
  return (
    <section className="industries-hero">
      <div className="industries-hero__background">
        <div className="industries-hero__blur industries-hero__blur--one"></div>
        <div className="industries-hero__blur industries-hero__blur--two"></div>
      </div>

      <div className="industries-hero__container">

        <motion.div
          className="industries-hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="industries-hero__badge">
            <Building2 size={16} />
            Industries
          </div>

          <h1>
            Loyalty solutions built for every industry.
          </h1>

          <p>
            From automotive to FMCG, CrestRewards helps businesses
            create engaging loyalty programs that increase customer
            retention, dealer engagement, and business growth.
          </p>

          <div className="industries-hero__buttons">

            <Link
              to="/contact"
              className="industries-button industries-button--primary"
            >
              Talk to Us
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/solutions"
              className="industries-button industries-button--secondary"
            >
              <BriefcaseBusiness size={18} />
              Explore Solutions
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesHero;