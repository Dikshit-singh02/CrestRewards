import { motion } from "framer-motion";
import {
  Car,
  ShoppingBag,
  Pill,
  Landmark,
  Factory,
  MonitorSmartphone,
} from "lucide-react";

import "./IndustryGrid.css";

const industries = [
  {
    icon: <Car size={34} />,
    title: "Automotive",
    description:
      "Strengthen dealer and customer relationships with loyalty programs, service rewards, and promotional campaigns.",
  },
  {
    icon: <ShoppingBag size={34} />,
    title: "Retail & FMCG",
    description:
      "Increase customer retention using personalized rewards, cashback offers, and digital vouchers.",
  },
  {
    icon: <Pill size={34} />,
    title: "Healthcare & Pharma",
    description:
      "Engage healthcare professionals, distributors, and partners through secure incentive programs.",
  },
  {
    icon: <Landmark size={34} />,
    title: "Banking & Financial Services",
    description:
      "Reward customer loyalty with cashback, referral programs, and personalized financial benefits.",
  },
  {
    icon: <Factory size={34} />,
    title: "Manufacturing",
    description:
      "Motivate distributors and channel partners with scalable dealer engagement and reward solutions.",
  },
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Consumer Electronics",
    description:
      "Drive repeat purchases through warranty rewards, cashback campaigns, and customer engagement.",
  },
];

const IndustryGrid = () => {
  return (
    <section className="industry-grid">

      <div className="industry-grid__container">

        <div className="industry-grid__header">

          <span className="industry-grid__badge">
            Industries
          </span>

          <h2>
            Solutions designed for every business sector.
          </h2>

          <p>
            CrestRewards delivers flexible loyalty solutions that
            adapt to different industries, helping businesses
            engage customers, partners, and employees.
          </p>

        </div>

        <div className="industry-grid__cards">

          {industries.map((industry, index) => (

            <motion.article
              key={index}
              className="industry-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <div className="industry-card__icon">
                {industry.icon}
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default IndustryGrid;