import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CircleDot,
  Gift,
  Network,
  Orbit,
  Sparkles,
  Workflow,
} from "lucide-react";

import "./PlatformPromise.css";

const platformDirections = [
  {
    label: "Understand",
    description: "Connected customer context",
    icon: BrainCircuit,
  },
  {
    label: "Orchestrate",
    description: "Thoughtful journey direction",
    icon: Workflow,
  },
  {
    label: "Reward",
    description: "Meaningful value exchange",
    icon: Gift,
  },
];

const PlatformPromise = () => {
  return (
    <section
      className="platform-promise"
      aria-labelledby="platform-promise-title"
    >
      <div
        className="platform-promise__atmosphere"
        aria-hidden="true"
      >
        <div className="platform-promise__grid" />

        <div className="platform-promise__glow platform-promise__glow--one" />

        <div className="platform-promise__glow platform-promise__glow--two" />

        <div className="platform-promise__noise" />
      </div>

      <div className="container platform-promise__container">
        <motion.div
          className="platform-promise__content"
          initial={{
            opacity: 0,
            y: 32,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="platform-promise__eyebrow">
            <Sparkles
              size={14}
              aria-hidden="true"
            />

            <span>
              The CrestRewards platform vision
            </span>
          </div>

          <h1 id="platform-promise-title">
            One foundation for
            <span> lasting customer relationships.</span>
          </h1>

          <p className="platform-promise__description">
            CrestRewards is being designed as a connected loyalty
            platform where customer understanding, engagement
            journeys, and reward experiences can work together
            instead of living in isolated systems.
          </p>

          <div className="platform-promise__actions">
            <a
              href="#platform-directions"
              className="platform-promise__primary-action"
            >
              Explore the platform direction

              <ArrowDown
                size={17}
                aria-hidden="true"
              />
            </a>

            <Link
              to="/contact"
              className="platform-promise__secondary-action"
            >
              Talk about your vision

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="platform-promise__principles">
            <span>
              Connected thinking
            </span>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Responsible foundations
            </span>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Adaptable experiences
            </span>
          </div>
        </motion.div>

        <motion.div
          className="platform-promise__visual"
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-hidden="true"
        >
          <div className="platform-system">
            <div className="platform-system__orbit platform-system__orbit--outer">
              <span className="platform-system__signal platform-system__signal--one" />
              <span className="platform-system__signal platform-system__signal--two" />
            </div>

            <div className="platform-system__orbit platform-system__orbit--middle" />

            <div className="platform-system__orbit platform-system__orbit--inner" />

            <div className="platform-system__core">
              <div className="platform-system__core-icon">
                <Orbit size={28} />
              </div>

              <strong>
                CrestRewards
              </strong>

              <span>
                Relationship core
              </span>
            </div>

            <div className="platform-system__node platform-system__node--customer">
              <span className="platform-system__node-icon">
                <BrainCircuit size={18} />
              </span>

              <span>
                <small>Understand</small>
                Customer context
              </span>
            </div>

            <div className="platform-system__node platform-system__node--journey">
              <span className="platform-system__node-icon">
                <Workflow size={18} />
              </span>

              <span>
                <small>Connect</small>
                Journey direction
              </span>
            </div>

            <div className="platform-system__node platform-system__node--reward">
              <span className="platform-system__node-icon">
                <Gift size={18} />
              </span>

              <span>
                <small>Recognize</small>
                Reward experiences
              </span>
            </div>

            <div className="platform-system__node platform-system__node--network">
              <span className="platform-system__node-icon">
                <Network size={18} />
              </span>

              <span>
                <small>Evolve</small>
                Connected ecosystem
              </span>
            </div>

            <div className="platform-system__status">
              <CircleDot size={13} />

              <span>
                Platform vision in development
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        id="platform-directions"
        className="platform-directions container"
      >
        {platformDirections.map((direction, index) => {
          const Icon = direction.icon;

          return (
            <motion.article
              className="platform-direction"
              key={direction.label}
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <span className="platform-direction__number">
                0{index + 1}
              </span>

              <span className="platform-direction__icon">
                <Icon
                  size={20}
                  aria-hidden="true"
                />
              </span>

              <div>
                <h2>
                  {direction.label}
                </h2>

                <p>
                  {direction.description}
                </p>
              </div>

              <ArrowRight
                className="platform-direction__arrow"
                size={18}
                aria-hidden="true"
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default PlatformPromise;