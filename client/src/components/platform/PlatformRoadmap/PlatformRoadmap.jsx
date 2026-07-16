import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  BrainCircuit,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import "./PlatformRoadmap.css";

const roadmap = [
  {
    quarter: "Q3 2026",
    title: "AI Personalization",
    description:
      "Launch intelligent recommendation engine for every customer interaction.",
    icon: BrainCircuit,
    completed: true,
  },
  {
    quarter: "Q4 2026",
    title: "Global Expansion",
    description:
      "Deploy platform across multiple global cloud regions.",
    icon: Globe,
    completed: false,
  },
  {
    quarter: "Q1 2027",
    title: "Enterprise Security",
    description:
      "Advanced governance, compliance and Zero Trust architecture.",
    icon: ShieldCheck,
    completed: false,
  },
  {
    quarter: "Future",
    title: "Autonomous Loyalty",
    description:
      "AI-driven loyalty journeys that continuously optimize themselves.",
    icon: Rocket,
    completed: false,
  },
];

const PlatformRoadmap = () => {
  return (
    <section className="platform-roadmap">

      <div className="container">

        <motion.div
          className="platform-roadmap__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="platform-roadmap__eyebrow">

            <Sparkles size={15} />

            Platform Roadmap

          </span>

          <h2>

            Building the future of
            <span> customer loyalty.</span>

          </h2>

          <p>

            CrestRewards is continuously evolving with AI,
            enterprise security and intelligent engagement
            capabilities designed for tomorrow.

          </p>

        </motion.div>

        <div className="roadmap-timeline">

          {roadmap.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.article
                key={item.title}
                className="roadmap-card"
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
                }}
              >

                <div className="roadmap-card__icon">

                  <Icon size={28} />

                </div>

                <span className="roadmap-card__quarter">

                  {item.quarter}

                </span>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

                <div className="roadmap-card__status">

                  {item.completed ? (

                    <>
                      <CheckCircle2 size={18} />
                      Completed
                    </>

                  ) : (

                    <>
                      <Rocket size={18} />
                      Upcoming
                    </>

                  )}

                </div>

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default PlatformRoadmap;