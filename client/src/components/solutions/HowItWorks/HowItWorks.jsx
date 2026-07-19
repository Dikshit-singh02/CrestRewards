import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Users,
  BarChart3,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    icon: <Target size={32} />,
    title: "Define Your Goals",
    description:
      "Identify your business objectives, audience, and the loyalty strategy that best fits your organization.",
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch Your Program",
    description:
      "Configure rewards, campaigns, earning rules, and customer journeys with a flexible platform.",
  },
  {
    icon: <Users size={32} />,
    title: "Engage Customers",
    description:
      "Deliver personalized experiences through rewards, vouchers, cashback, and milestone campaigns.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Measure & Improve",
    description:
      "Track customer engagement, redemption, and campaign performance to continuously optimize results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">

        <div className="how-it-works__header">
          <span className="how-it-works__badge">
            How It Works
          </span>

          <h2>
            Launch your loyalty program in four simple steps.
          </h2>

          <p>
            From planning to performance tracking, CrestRewards
            simplifies every stage of your loyalty journey.
          </p>
        </div>

        <div className="how-it-works__grid">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              className="how-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <div className="how-step__number">
                {index + 1}
              </div>

              <div className="how-step__icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;