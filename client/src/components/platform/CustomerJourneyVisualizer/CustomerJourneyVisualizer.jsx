import { motion } from "framer-motion";
import {
  Search,
  UserRound,
  Sparkles,
  Gift,
  HeartHandshake,
} from "lucide-react";

import "./CustomerJourneyVisualizer.css";

const journeySteps = [
  {
    title: "Discover",
    description:
      "Customers discover your brand through personalized experiences.",
    icon: Search,
  },
  {
    title: "Understand",
    description:
      "Collect meaningful customer insights across every interaction.",
    icon: UserRound,
  },
  {
    title: "Engage",
    description:
      "Deliver contextual communication at the perfect moment.",
    icon: Sparkles,
  },
  {
    title: "Reward",
    description:
      "Recognize loyalty through intelligent rewards and experiences.",
    icon: Gift,
  },
  {
    title: "Build Relationships",
    description:
      "Create long-term customer connections powered by trust.",
    icon: HeartHandshake,
  },
];

const CustomerJourneyVisualizer = () => {
  return (
    <section className="customer-journey">

      <div className="container">

        <motion.div
          className="customer-journey__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="customer-journey__eyebrow">

            Customer Journey Visualizer

          </span>

          <h2>

            Every interaction shapes
            <span> lasting relationships.</span>

          </h2>

          <p>

            CrestRewards connects every customer touchpoint into
            one continuous journey—from discovery to loyalty—
            helping brands create memorable experiences.

          </p>

        </motion.div>

        <div className="journey-timeline">

          {journeySteps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                className="journey-step"
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
                  delay: index * 0.12,
                  duration: 0.6,
                }}
              >

                <div className="journey-step__icon">

                  <Icon size={28} />

                </div>

                <h3>

                  {step.title}

                </h3>

                <p>

                  {step.description}

                </p>

                {index !== journeySteps.length - 1 && (

                  <div className="journey-step__line" />

                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default CustomerJourneyVisualizer;