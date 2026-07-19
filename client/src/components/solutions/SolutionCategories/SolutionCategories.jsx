import { motion } from "framer-motion";
import {
  Gift,
  TicketPercent,
  QrCode,
  Handshake,
} from "lucide-react";

import "./SolutionCategories.css";

const solutions = [
  {
    icon: <Gift size={34} />,
    title: "Merchandise Rewards",
    description:
      "Offer premium products and curated rewards that motivate customers, dealers, and channel partners.",
  },
  {
    icon: <TicketPercent size={34} />,
    title: "Gift Vouchers",
    description:
      "Reward customers with digital gift vouchers from leading brands for faster and more flexible redemption.",
  },
  {
    icon: <QrCode size={34} />,
    title: "QR Cashback",
    description:
      "Launch QR code-based cashback campaigns that increase product engagement and repeat purchases.",
  },
  {
    icon: <Handshake size={34} />,
    title: "Dealer Loyalty",
    description:
      "Build long-term relationships with dealers and distributors through personalized loyalty programs.",
  },
];

const SolutionCategories = () => {
  return (
    <section className="solution-categories">

      <div className="solution-categories__container">

        <div className="solution-categories__header">

          <span className="solution-categories__eyebrow">
            Our Solutions
          </span>

          <h2>
            Everything you need to build customer loyalty.
          </h2>

          <p>
            CrestRewards provides flexible loyalty solutions designed
            to increase engagement, encourage repeat business, and
            strengthen customer relationships.
          </p>

        </div>

        <div className="solution-categories__grid">

          {solutions.map((solution, index) => (

            <motion.article
              key={index}
              className="solution-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <div className="solution-card__icon">
                {solution.icon}
              </div>

              <h3>
                {solution.title}
              </h3>

              <p>
                {solution.description}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SolutionCategories;