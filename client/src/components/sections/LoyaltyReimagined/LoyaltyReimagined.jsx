import { motion } from "framer-motion";
import {
  DatabaseZap,
  MessagesSquare,
  Gift,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./LoyaltyReimagined.css";

const challenges = [
  {
    number: "01",
    icon: DatabaseZap,
    title: "Disconnected Understanding",
    description:
      "Customer activity often lives across separate channels and systems, making it difficult to understand the complete relationship.",
    insight:
      "Connect interactions into a clearer customer story.",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "Generic Engagement",
    description:
      "Customers receive the same messages and offers even when their preferences, behaviour, and relationship with a brand are different.",
    insight:
      "Create experiences shaped around real customer context.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Rewards Without Meaning",
    description:
      "Traditional programs can become transactional when rewards focus only on points instead of recognition, relevance, and real value.",
    insight:
      "Reward relationships, not only transactions.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const LoyaltyReimagined = () => {
  return (
    <section className="loyalty-reimagined">
      <div
        className="loyalty-reimagined__background"
        aria-hidden="true"
      >
        <div className="loyalty-reimagined__glow" />
        <div className="loyalty-reimagined__line" />
      </div>

      <div className="container">
        <motion.div
          className="loyalty-reimagined__heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-identity">
            <span className="section-identity__icon">
              <Sparkles size={14} />
            </span>

            <span>Why CrestRewards</span>
          </div>

          <div className="loyalty-reimagined__heading-grid">
            <h2 className="loyalty-reimagined__title">
              Loyalty should feel like a{" "}
              <span>relationship.</span>
            </h2>

            <div className="loyalty-reimagined__introduction">
              <p>
                Customer loyalty is changing. People expect brands to
                understand their preferences, recognise their engagement,
                and offer value that feels relevant.
              </p>

              <div className="loyalty-reimagined__statement">
                <span className="statement-line" />

                <p>
                  CrestRewards is being built to make those relationships
                  more connected, personal, and meaningful.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="challenge-grid">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;

            return (
              <motion.article
                key={challenge.title}
                className="challenge-card"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
              >
                <div className="challenge-card__glow" />

                <div className="challenge-card__top">
                  <span className="challenge-card__number">
                    {challenge.number}
                  </span>

                  <span className="challenge-card__icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>
                </div>

                <div className="challenge-card__content">
                  <h3>{challenge.title}</h3>

                  <p>{challenge.description}</p>
                </div>

                <div className="challenge-card__insight">
                  <span>{challenge.insight}</span>

                  <ArrowRight size={17} />
                </div>

                <div
                  className="challenge-card__depth"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="connected-approach"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="connected-approach__visual">
            <div className="connection-orbit connection-orbit--outer" />
            <div className="connection-orbit connection-orbit--inner" />

            <div className="connection-node connection-node--understand">
              <DatabaseZap size={20} />
              <span>Understand</span>
            </div>

            <div className="connection-node connection-node--engage">
              <MessagesSquare size={20} />
              <span>Engage</span>
            </div>

            <div className="connection-node connection-node--reward">
              <Gift size={20} />
              <span>Reward</span>
            </div>

            <div className="connection-core">
              <span className="connection-core__symbol">C</span>

              <span className="connection-core__pulse" />
            </div>
          </div>

          <div className="connected-approach__content">
            <span className="connected-approach__label">
              The connected approach
            </span>

            <h3>
              One relationship.
              <br />
              <span>One connected experience.</span>
            </h3>

            <p>
              CrestRewards brings customer understanding, engagement, and
              rewards into one connected journey—helping businesses create
              experiences that become more relevant as relationships grow.
            </p>

            <div className="connected-approach__flow">
              <span>Understand</span>
              <ArrowRight size={15} />
              <span>Engage</span>
              <ArrowRight size={15} />
              <span>Reward</span>
              <ArrowRight size={15} />
              <span>Grow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltyReimagined;