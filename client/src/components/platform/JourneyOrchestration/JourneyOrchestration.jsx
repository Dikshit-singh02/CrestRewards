import { motion } from "framer-motion";
import {
  Search,
  BrainCircuit,
  Sparkles,
  Gift,
  HeartHandshake,
} from "lucide-react";

import "./JourneyOrchestration.css";

const journeySteps = [
  {
    id: "01",
    title: "Discover",
    description:
      "Capture meaningful customer interactions across every touchpoint.",
    icon: Search,
  },
  {
    id: "02",
    title: "Understand",
    description:
      "Connect customer behavior into a unified relationship profile.",
    icon: BrainCircuit,
  },
  {
    id: "03",
    title: "Engage",
    description:
      "Deliver relevant experiences based on evolving customer context.",
    icon: Sparkles,
  },
  {
    id: "04",
    title: "Reward",
    description:
      "Recognize loyalty with flexible and meaningful reward experiences.",
    icon: Gift,
  },
  {
    id: "05",
    title: "Grow",
    description:
      "Build lasting relationships through continuous engagement.",
    icon: HeartHandshake,
  },
];

const JourneyOrchestration = () => {
  return (
    <section className="journey">
      <div className="container">

        <motion.div
          className="journey__heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="journey__eyebrow">
            Customer Journey
          </span>

          <h2>
            Every relationship
            <span> evolves step by step.</span>
          </h2>

          <p>
            CrestRewards is being designed to help brands understand,
            engage, reward and grow customer relationships through one
            connected journey.
          </p>
        </motion.div>

        <div className="journey__timeline">

          {journeySteps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                className="journey-card"
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >

                <div className="journey-card__number">
                  {step.id}
                </div>

                <div className="journey-card__icon">
                  <Icon size={24} />
                </div>

                <div className="journey-card__content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default JourneyOrchestration;