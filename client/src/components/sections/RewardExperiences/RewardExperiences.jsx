import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Star,
  Ticket,
  Trophy,
  UsersRound,
  WandSparkles,
} from "lucide-react";

import "./RewardExperiences.css";

const rewardTypes = [
  {
    id: "experiences",
    shortNumber: "01",
    title: "Experiences",
    label: "Memorable moments",
    description:
      "Create reward possibilities that go beyond discounts and give customers access to experiences worth remembering.",
    icon: Compass,
    cardTitle: "A moment worth remembering",
    cardCopy:
      "Turn loyalty into access, discovery, and experiences customers can genuinely value.",
    cardTag: "Experience reward",
  },
  {
    id: "benefits",
    shortNumber: "02",
    title: "Member Benefits",
    label: "Everyday recognition",
    description:
      "Design ongoing benefits that make membership feel valuable throughout the customer relationship.",
    icon: Crown,
    cardTitle: "Recognition that feels continuous",
    cardCopy:
      "Create benefits that make customers feel recognised beyond individual transactions.",
    cardTag: "Member benefit",
  },
  {
    id: "milestones",
    shortNumber: "03",
    title: "Milestones",
    label: "Celebrate progress",
    description:
      "Recognise meaningful relationship moments and make customer progress feel visible and appreciated.",
    icon: Trophy,
    cardTitle: "Celebrate the relationship",
    cardCopy:
      "Acknowledge progress, anniversaries, achievements, and moments that deserve recognition.",
    cardTag: "Milestone moment",
  },
  {
    id: "partners",
    shortNumber: "04",
    title: "Partner Value",
    label: "Broader possibilities",
    description:
      "Imagine connected reward ecosystems where relevant partnerships can expand the value available to members.",
    icon: UsersRound,
    cardTitle: "Value beyond one brand",
    cardCopy:
      "Create opportunities for complementary experiences and broader member value.",
    cardTag: "Partner possibility",
  },
  {
    id: "personalized",
    shortNumber: "05",
    title: "Personalized Offers",
    label: "Relevant by design",
    description:
      "Shape offers around customer context so value can feel more relevant to the individual relationship.",
    icon: WandSparkles,
    cardTitle: "Value shaped around context",
    cardCopy:
      "Move from the same offer for everyone toward more thoughtful reward possibilities.",
    cardTag: "Personalized value",
  },
];

const RewardExperiences = () => {
  const [activeReward, setActiveReward] = useState(rewardTypes[0]);

  return (
    <section className="reward-experiences">
      <div
        className="reward-experiences__background"
        aria-hidden="true"
      >
        <div className="reward-experiences__glow reward-experiences__glow--one" />
        <div className="reward-experiences__glow reward-experiences__glow--two" />
        <div className="reward-experiences__ring" />
      </div>

      <div className="container">
        <motion.div
          className="reward-experiences__heading"
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-identity">
            <span className="section-identity__icon">
              <Gift size={14} />
            </span>

            <span>Reward experiences</span>
          </div>

          <div className="reward-experiences__heading-layout">
            <h2 className="reward-experiences__title">
              Reward the relationship,
              <span> not only the purchase.</span>
            </h2>

            <div className="reward-experiences__heading-copy">
              <p>
                Loyalty can become more meaningful when value reflects the
                relationship itself. CrestRewards is being imagined around
                flexible reward possibilities that recognise people in
                different ways.
              </p>

              <div className="reward-experiences__principle">
                <Sparkles size={16} />

                <span>
                  From transactional incentives toward memorable value.
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="reward-experiences__showcase">
          <motion.div
            className="reward-selector"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="reward-selector__label">
              Explore reward possibilities
            </span>

            <div className="reward-selector__list">
              {rewardTypes.map((reward) => {
                const Icon = reward.icon;
                const isActive = activeReward.id === reward.id;

                return (
                  <button
                    type="button"
                    key={reward.id}
                    className={`reward-option ${
                      isActive ? "reward-option--active" : ""
                    }`}
                    onClick={() => setActiveReward(reward)}
                  >
                    <span className="reward-option__number">
                      {reward.shortNumber}
                    </span>

                    <span className="reward-option__icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className="reward-option__content">
                      <strong>{reward.title}</strong>
                      <small>{reward.label}</small>
                    </span>

                    <ArrowRight
                      className="reward-option__arrow"
                      size={17}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="reward-stage"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="reward-stage__ambient" />

            <div className="reward-card-stack" aria-hidden="true">
              <div className="reward-card-shadow reward-card-shadow--back" />
              <div className="reward-card-shadow reward-card-shadow--middle" />
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeReward.id}
                className="featured-reward-card"
                initial={{
                  opacity: 0,
                  y: 25,
                  rotateY: -7,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  rotateY: 6,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="featured-reward-card__shine" />

                <div className="featured-reward-card__header">
                  <div className="featured-reward-card__brand">
                    <span>C</span>

                    <div>
                      <strong>CrestRewards</strong>
                      <small>Meaningful value</small>
                    </div>
                  </div>

                  <span className="featured-reward-card__category">
                    {activeReward.cardTag}
                  </span>
                </div>

                <div className="featured-reward-card__symbol">
                  {(() => {
                    const Icon = activeReward.icon;
                    return <Icon size={38} strokeWidth={1.5} />;
                  })()}
                </div>

                <div className="featured-reward-card__content">
                  <small>{activeReward.label}</small>

                  <h3>{activeReward.cardTitle}</h3>

                  <p>{activeReward.cardCopy}</p>
                </div>

                <div className="featured-reward-card__footer">
                  <span>
                    <BadgeCheck size={15} />
                    Relationship-first value
                  </span>

                  <span className="featured-reward-card__mark">
                    CR
                  </span>
                </div>
              </motion.article>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeReward.id}-detail`}
                className="reward-detail-panel"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <span className="reward-detail-panel__icon">
                  <Heart size={18} />
                </span>

                <div>
                  <small>Reward philosophy</small>
                  <strong>{activeReward.description}</strong>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="reward-floating-ticket"
              animate={{
                y: [0, -8, 0],
                rotate: [-3, 2, -3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Ticket size={20} />

              <span>
                <small>Value</small>
                <strong>Made personal</strong>
              </span>
            </motion.div>

            <motion.div
              className="reward-floating-star"
              animate={{
                y: [0, 7, 0],
                rotate: [5, -4, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star size={21} />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="reward-philosophy"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="reward-philosophy__eyebrow">
            A broader view of value
          </span>

          <h3>
            Points can be part of loyalty.
            <span> They do not have to be the whole story.</span>
          </h3>

          <p>
            CrestRewards is being shaped around the belief that recognition,
            access, relevance, benefits, and memorable moments can all
            contribute to stronger customer relationships.
          </p>

          <div className="reward-philosophy__path">
            <span>Recognition</span>
            <ArrowRight size={15} />
            <span>Relevance</span>
            <ArrowRight size={15} />
            <span>Value</span>
            <ArrowRight size={15} />
            <span>Loyalty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RewardExperiences;
