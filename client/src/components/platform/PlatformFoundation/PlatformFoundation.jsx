import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  ShieldCheck,
  Cloud,
  Cpu,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import "./PlatformFoundation.css";

const foundationLayers = [
  {
    title: "Unified Data",
    description:
      "Bring customer information together from multiple touchpoints into one connected foundation.",
    icon: Database,
  },
  {
    title: "Intelligence",
    description:
      "Transform customer activity into actionable understanding that improves every engagement.",
    icon: BrainCircuit,
  },
  {
    title: "Automation",
    description:
      "Create journeys and loyalty experiences that adapt automatically over time.",
    icon: Workflow,
  },
  {
    title: "Enterprise Security",
    description:
      "Privacy-first architecture designed with governance and secure customer data management.",
    icon: ShieldCheck,
  },
];

const PlatformFoundation = () => {
  return (
    <section className="platform-foundation">

      <div className="container">

        <motion.div
          className="platform-foundation__header"
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
            duration: .7,
          }}
        >

          <span className="platform-foundation__eyebrow">

            Platform Foundation

          </span>

          <h2>

            One intelligent foundation for
            <span> modern customer loyalty.</span>

          </h2>

          <p>

            CrestRewards is being designed around a connected
            platform foundation where customer understanding,
            automation, personalization and security work
            together instead of existing in separate systems.

          </p>

        </motion.div>

        <div className="platform-foundation__wrapper">

          <motion.div
            className="foundation-visual"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
          >

            <div className="foundation-core">

              <div className="foundation-core__circle">

                <Cpu
                  size={42}
                />

              </div>

              <h3>

                CrestRewards Core

              </h3>

              <span>

                Connected Platform

              </span>

            </div>

            <div className="foundation-node foundation-node--one">

              <Cloud size={22} />

              Cloud

            </div>

            <div className="foundation-node foundation-node--two">

              <Database size={22} />

              Data

            </div>

            <div className="foundation-node foundation-node--three">

              <BrainCircuit size={22} />

              AI

            </div>

            <div className="foundation-node foundation-node--four">

              <ShieldCheck size={22} />

              Security

            </div>

          </motion.div>

          <motion.div
            className="foundation-content"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
          >

            {

              foundationLayers.map((item) => {

                const Icon = item.icon;

                return (

                  <article
                    className="foundation-card"
                    key={item.title}
                  >

                    <div
                      className="foundation-card__icon"
                    >

                      <Icon
                        size={22}
                      />

                    </div>

                    <div
                      className="foundation-card__body"
                    >

                      <h3>

                        {item.title}

                      </h3>

                      <p>

                        {item.description}

                      </p>

                    </div>

                    <ArrowUpRight
                      size={18}
                    />

                  </article>

                );

              })

            }

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default PlatformFoundation;