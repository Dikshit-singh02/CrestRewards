import { motion } from "framer-motion";
import {
  Zap,
  Play,
  Bell,
  Mail,
  Gift,
  BrainCircuit,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import "./AutomationEngine.css";

const workflows = [
  {
    title: "Customer Joins",
    description:
      "Automatically welcome new members with onboarding journeys.",
    icon: Play,
  },
  {
    title: "Behavior Trigger",
    description:
      "Detect meaningful customer activity in real time.",
    icon: BrainCircuit,
  },
  {
    title: "Personalized Campaign",
    description:
      "Launch relevant communication automatically.",
    icon: Mail,
  },
  {
    title: "Reward Delivered",
    description:
      "Send rewards instantly after customer milestones.",
    icon: Gift,
  },
];

const AutomationEngine = () => {
  return (
    <section className="automation-engine">

      <div className="container">

        <motion.div
          className="automation-engine__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="automation-engine__eyebrow">

            <Sparkles size={14} />

            Automation Engine

          </span>

          <h2>

            Intelligent automation for
            <span> every customer journey.</span>

          </h2>

          <p>

            CrestRewards helps brands automate engagement,
            communication and rewards using intelligent,
            event-driven workflows.

          </p>

        </motion.div>

        <div className="automation-workflow">

          {

            workflows.map((workflow,index)=>{

              const Icon=workflow.icon;

              return(

                <motion.article
                  key={workflow.title}
                  className="workflow-card"
                  initial={{
                    opacity:0,
                    y:40,
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                  }}
                  viewport={{
                    once:true,
                  }}
                  transition={{
                    delay:index*.12,
                    duration:.6,
                  }}
                >

                  <div className="workflow-card__icon">

                    <Icon size={26}/>

                  </div>

                  <h3>

                    {workflow.title}

                  </h3>

                  <p>

                    {workflow.description}

                  </p>

                  {

                    index!==workflows.length-1 && (

                      <div className="workflow-card__arrow">

                        <ArrowRight size={24}/>

                      </div>

                    )

                  }

                </motion.article>

              );

            })

          }

        </div>

        <motion.div
          className="automation-dashboard"
          initial={{
            opacity:0,
            y:50,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:.8,
          }}
        >

          <div className="automation-dashboard__left">

            <div className="automation-status">

              <Zap size={20}/>

              Automation Active

            </div>

            <h3>

              Intelligent Workflow Engine

            </h3>

            <p>

              Every customer event can trigger
              personalized communication,
              engagement and rewards
              without manual intervention.

            </p>

          </div>

          <div className="automation-dashboard__right">

            <div className="automation-metric">

              <Bell size={18}/>

              <strong>

                248K

              </strong>

              <span>

                Events Today

              </span>

            </div>

            <div className="automation-metric">

              <Zap size={18}/>

              <strong>

                97%

              </strong>

              <span>

                Success Rate

              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AutomationEngine;