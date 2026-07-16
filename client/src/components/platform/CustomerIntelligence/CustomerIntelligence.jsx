import { motion } from "framer-motion";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CircleCheck,
  Database,
  Layers3,
  MousePointerClick,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UserRound,
} from "lucide-react";

import "./CustomerIntelligence.css";

const intelligencePrinciples = [
  {
    icon: Database,
    title: "Connected context",
    description:
      "Bring useful customer signals into a clearer, more connected view.",
  },
  {
    icon: BrainCircuit,
    title: "Meaningful interpretation",
    description:
      "Turn fragmented activity into context that can support better decisions.",
  },
  {
    icon: Layers3,
    title: "Progressive understanding",
    description:
      "Allow customer understanding to evolve as relationships and interactions grow.",
  },
];

const signalSources = [
  {
    icon: ShoppingBag,
    label: "Purchase",
    className: "customer-orbit__source--purchase",
  },
  {
    icon: Smartphone,
    label: "Digital",
    className: "customer-orbit__source--digital",
  },
  {
    icon: MousePointerClick,
    label: "Engagement",
    className: "customer-orbit__source--engagement",
  },
  {
    icon: Activity,
    label: "Activity",
    className: "customer-orbit__source--activity",
  },
];

const CustomerIntelligence = () => {
  return (
    <section
      className="customer-intelligence"
      aria-labelledby="customer-intelligence-title"
    >
      <div
        className="customer-intelligence__background"
        aria-hidden="true"
      >
        <div className="customer-intelligence__glow" />
        <div className="customer-intelligence__line customer-intelligence__line--one" />
        <div className="customer-intelligence__line customer-intelligence__line--two" />
      </div>

      <div className="container">
        <div className="customer-intelligence__heading">
          <motion.div
            className="customer-intelligence__heading-copy"
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="customer-intelligence__eyebrow">
              <Sparkles
                size={14}
                aria-hidden="true"
              />

              <span>
                Customer understanding
              </span>
            </div>

            <h2 id="customer-intelligence-title">
              See the relationship,
              <span> not just the transaction.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.6,
              delay: 0.1,
            }}
          >
            The CrestRewards vision begins with connected context.
            The platform direction is focused on helping brands
            understand customer relationships across useful signals,
            interactions, and moments over time.
          </motion.p>
        </div>

        <div className="customer-intelligence__experience">
          <motion.div
            className="customer-intelligence__visual"
            initial={{
              opacity: 0,
              x: -35,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="customer-orbit"
              aria-hidden="true"
            >
              <div className="customer-orbit__grid" />

              <div className="customer-orbit__ring customer-orbit__ring--outer" />

              <div className="customer-orbit__ring customer-orbit__ring--middle" />

              <div className="customer-orbit__ring customer-orbit__ring--inner" />

              <div className="customer-orbit__profile">
                <div className="customer-orbit__profile-icon">
                  <UserRound size={25} />
                </div>

                <strong>
                  Customer context
                </strong>

                <span>
                  Evolving relationship view
                </span>

                <div className="customer-orbit__profile-status">
                  <span />
                  Context building
                </div>
              </div>

              {signalSources.map((source) => {
                const Icon = source.icon;

                return (
                  <div
                    className={`customer-orbit__source ${source.className}`}
                    key={source.label}
                  >
                    <span>
                      <Icon size={17} />
                    </span>

                    {source.label}
                  </div>
                );
              })}

              <div className="customer-orbit__insight customer-orbit__insight--one">
                <CircleCheck size={14} />
                Preference signal
              </div>

              <div className="customer-orbit__insight customer-orbit__insight--two">
                <CircleCheck size={14} />
                Journey context
              </div>
            </div>
          </motion.div>

          <div className="customer-intelligence__principles">
            <div className="customer-intelligence__principles-intro">
              <span>
                A connected direction
              </span>

              <h3>
                Understanding designed to become more useful over time.
              </h3>

              <p>
                Rather than treating every interaction as an isolated
                event, CrestRewards is exploring a foundation where
                relevant signals can contribute to a more useful
                relationship context.
              </p>
            </div>

            <div className="intelligence-principle-list">
              {intelligencePrinciples.map(
                (principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <motion.article
                      className="intelligence-principle"
                      key={principle.title}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                    >
                      <span className="intelligence-principle__icon">
                        <Icon
                          size={19}
                          aria-hidden="true"
                        />
                      </span>

                      <div>
                        <h4>
                          {principle.title}
                        </h4>

                        <p>
                          {principle.description}
                        </p>
                      </div>

                      <ArrowRight
                        className="intelligence-principle__arrow"
                        size={17}
                        aria-hidden="true"
                      />
                    </motion.article>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerIntelligence;