import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Gift,
  Sparkles,
  Users,
} from "lucide-react";

import "./JourneyOrchestration.css";

const metrics = [
  {
    value: "92%",
    label: "Customer Context",
    icon: BrainCircuit,
  },
  {
    value: "84%",
    label: "Engagement",
    icon: Activity,
  },
  {
    value: "120K",
    label: "Reward Events",
    icon: Gift,
  },
];

const JourneyOrchestration = () => {
  return (
    <section className="journey-engine">

      <div className="container">

        <div className="journey-engine__wrapper">

          <motion.div
            className="journey-engine__content"
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
              duration: 0.8,
            }}
          >

            <span className="journey-engine__eyebrow">

              <Sparkles size={15} />

              Journey Orchestration

            </span>

            <h2>

              Every interaction builds
              <span> a stronger relationship.</span>

            </h2>

            <p>

              CrestRewards is being designed to connect
              customer understanding,
              personalized engagement,
              and meaningful rewards
              inside one intelligent journey engine.

            </p>

            <div className="journey-engine__features">

              <div>

                <Users size={20} />

                Connected Customer View

              </div>

              <div>

                <BrainCircuit size={20} />

                Intelligent Decisions

              </div>

              <div>

                <Gift size={20} />

                Reward Experiences

              </div>

            </div>

          </motion.div>

          <motion.div

            className="journey-dashboard"

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
              duration: 0.8,
            }}

          >

            <div className="journey-dashboard__header">

              <span>

                Customer Journey

              </span>

              <ArrowUpRight size={18} />

            </div>

            <div className="journey-dashboard__score">

              <h3>

                Loyalty Score

              </h3>

              <strong>

                84%

              </strong>

            </div>

            <div className="journey-dashboard__graph">

              <span />
              <span />
              <span />
              <span />
              <span />
              <span />

            </div>

            <div className="journey-dashboard__metrics">

              {metrics.map((metric) => {

                const Icon = metric.icon;

                return (

                  <div
                    className="metric-card"
                    key={metric.label}
                  >

                    <Icon size={18} />

                    <div>

                      <strong>

                        {metric.value}

                      </strong>

                      <span>

                        {metric.label}

                      </span>

                    </div>

                  </div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default JourneyOrchestration;