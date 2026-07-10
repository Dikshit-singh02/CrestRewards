import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Check,
  CircleDot,
  Gift,
  HeartHandshake,
  Mail,
  MousePointerClick,
  ShoppingBag,
  Sparkles,
  Target,
  Trophy,
  UserPlus,
  UsersRound,
  Zap,
} from "lucide-react";

import "./IntelligentEngagement.css";

const journeySteps = [
  {
    id: "01",
    title: "New Customer",
    description: "A new relationship begins.",
    icon: UserPlus,
    className: "journey-step--customer",
  },
  {
    id: "02",
    title: "First Purchase",
    description: "Recognise the first meaningful action.",
    icon: ShoppingBag,
    className: "journey-step--purchase",
  },
  {
    id: "03",
    title: "Milestone",
    description: "Celebrate relationship progress.",
    icon: Trophy,
    className: "journey-step--milestone",
  },
  {
    id: "04",
    title: "Personalized Reward",
    description: "Offer value shaped by context.",
    icon: Gift,
    className: "journey-step--reward",
  },
  {
    id: "05",
    title: "Re-engagement",
    description: "Reconnect at the right moment.",
    icon: HeartHandshake,
    className: "journey-step--engagement",
  },
];

const engagementFeatures = [
  {
    icon: Target,
    title: "Context-aware journeys",
    description:
      "Design customer journeys around meaningful actions, preferences, and relationship moments.",
  },
  {
    icon: Zap,
    title: "Responsive engagement",
    description:
      "Create experiences designed to respond when relevant customer signals appear.",
  },
  {
    icon: UsersRound,
    title: "Flexible audience thinking",
    description:
      "Shape communication for different customer groups without treating every relationship the same.",
  },
];

const IntelligentEngagement = () => {
  return (
    <section className="intelligent-engagement">
      <div
        className="intelligent-engagement__background"
        aria-hidden="true"
      >
        <div className="intelligent-engagement__gradient intelligent-engagement__gradient--one" />
        <div className="intelligent-engagement__gradient intelligent-engagement__gradient--two" />
      </div>

      <div className="container">
        <motion.div
          className="intelligent-engagement__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.35,
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

            <span>Intelligent engagement</span>
          </div>

          <div className="intelligent-engagement__heading-layout">
            <h2 className="intelligent-engagement__title">
              Every relationship has
              <span> moments that matter.</span>
            </h2>

            <div className="intelligent-engagement__heading-copy">
              <p>
                Great loyalty experiences are not built from endless generic
                campaigns. They are shaped around customer moments, context,
                and meaningful opportunities to connect.
              </p>

              <div className="intelligent-engagement__heading-note">
                <CircleDot size={15} />

                <span>
                  Designed for journeys that evolve as customer relationships
                  grow.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="journey-workspace"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="journey-workspace__toolbar">
            <div className="journey-workspace__identity">
              <span className="journey-workspace__logo">
                <Zap size={17} />
              </span>

              <span>
                <strong>Relationship Journey</strong>
                <small>Experience workflow</small>
              </span>
            </div>

            <div className="journey-workspace__status">
              <span className="journey-workspace__status-dot" />
              Journey concept
            </div>
          </div>

          <div className="journey-workspace__canvas">
            <div className="journey-workspace__canvas-grid" />

            <div className="journey-flow">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div className="journey-flow__item" key={step.title}>
                    <motion.article
                      className={`journey-step ${step.className}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                    >
                      <div className="journey-step__top">
                        <span className="journey-step__number">
                          {step.id}
                        </span>

                        <span className="journey-step__check">
                          <Check size={12} />
                        </span>
                      </div>

                      <span className="journey-step__icon">
                        <Icon size={22} strokeWidth={1.8} />
                      </span>

                      <div className="journey-step__content">
                        <strong>{step.title}</strong>
                        <small>{step.description}</small>
                      </div>
                    </motion.article>

                    {index < journeySteps.length - 1 && (
                      <div
                        className="journey-connector"
                        aria-hidden="true"
                      >
                        <span className="journey-connector__line">
                          <span className="journey-connector__pulse" />
                        </span>

                        <ArrowRight size={15} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <motion.div
              className="journey-trigger-card"
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
            >
              <span className="journey-trigger-card__icon">
                <MousePointerClick size={18} />
              </span>

              <span>
                <small>Journey signal</small>
                <strong>Meaningful customer action</strong>
              </span>
            </motion.div>

            <motion.div
              className="journey-channel-card"
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
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
            >
              <div className="journey-channel-card__header">
                <span>Engagement possibilities</span>
                <BellRing size={15} />
              </div>

              <div className="journey-channel-card__channels">
                <span>
                  <Mail size={14} />
                  Email
                </span>

                <span>
                  <BellRing size={14} />
                  Notification
                </span>

                <span>
                  <Gift size={14} />
                  Reward
                </span>
              </div>
            </motion.div>
          </div>

          <div className="journey-workspace__footer">
            <span>
              <span className="journey-workspace__footer-dot" />
              Customer context connected
            </span>

            <span>
              Understand
              <ArrowRight size={13} />
              Decide
              <ArrowRight size={13} />
              Engage
            </span>
          </div>
        </motion.div>

        <div className="intelligent-engagement__lower">
          <motion.div
            className="intelligent-engagement__message"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="intelligent-engagement__message-label">
              Beyond one-size-fits-all
            </span>

            <h3>
              Move from sending messages to
              <span> creating moments.</span>
            </h3>

            <p>
              CrestRewards is being designed around a simple idea: engagement
              becomes more valuable when it reflects where a customer is in
              their relationship with a brand.
            </p>

            <div className="intelligent-engagement__message-path">
              <span>Signal</span>
              <ArrowRight size={15} />
              <span>Context</span>
              <ArrowRight size={15} />
              <span>Experience</span>
              <ArrowRight size={15} />
              <span>Relationship</span>
            </div>
          </motion.div>

          <div className="engagement-feature-list">
            {engagementFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="engagement-feature"
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                >
                  <span className="engagement-feature__icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <div>
                    <strong>{feature.title}</strong>
                    <p>{feature.description}</p>
                  </div>

                  <ArrowRight
                    className="engagement-feature__arrow"
                    size={18}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentEngagement;