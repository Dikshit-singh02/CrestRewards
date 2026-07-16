import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Database,
  Activity,
  ArrowUpRight,
  Cpu,
} from "lucide-react";

import "./IntelligenceEngine.css";

const intelligenceCards = [
  {
    title: "Unified Intelligence",
    description:
      "Collect customer interactions from every touchpoint and transform them into connected customer understanding.",
    icon: Database,
  },
  {
    title: "Behavior Analysis",
    description:
      "Analyze customer activities continuously to identify meaningful engagement opportunities.",
    icon: Activity,
  },
  {
    title: "Decision Engine",
    description:
      "Use intelligent rules to determine the next best action across customer journeys.",
    icon: BrainCircuit,
  },
  {
    title: "Personalized Experiences",
    description:
      "Deliver highly relevant experiences based on evolving customer context.",
    icon: Sparkles,
  },
];

const IntelligenceEngine = () => {
  return (
    <section className="intelligence-engine">

      <div className="container">

        <motion.div
          className="intelligence-engine__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="intelligence-engine__eyebrow">
            Intelligence Engine
          </span>

          <h2>
            Intelligence powering
            <span> every customer decision.</span>
          </h2>

          <p>
            CrestRewards is exploring an intelligent platform capable of
            understanding customer context and recommending meaningful
            engagement opportunities in real time.
          </p>

        </motion.div>

        <div className="intelligence-engine__layout">

          <motion.div
            className="engine-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="engine-core">

              <div className="engine-core__icon">
                <Cpu size={46} />
              </div>

              <h3>Crest AI</h3>

              <span>Decision Engine</span>

            </div>

            <div className="engine-node engine-node--one">
              <Database size={20} />
              Customer Data
            </div>

            <div className="engine-node engine-node--two">
              <Activity size={20} />
              Live Events
            </div>

            <div className="engine-node engine-node--three">
              <BrainCircuit size={20} />
              AI Logic
            </div>

            <div className="engine-node engine-node--four">
              <Sparkles size={20} />
              Personalized Output
            </div>

          </motion.div>

          <motion.div
            className="engine-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {intelligenceCards.map((card) => {

              const Icon = card.icon;

              return (

                <article
                  className="engine-card"
                  key={card.title}
                >

                  <div className="engine-card__icon">
                    <Icon size={22} />
                  </div>

                  <div className="engine-card__body">

                    <h3>{card.title}</h3>

                    <p>{card.description}</p>

                  </div>

                  <ArrowUpRight size={18} />

                </article>

              );

            })}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default IntelligenceEngine;