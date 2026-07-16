import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
  Globe,
  Boxes,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./IntegrationHub.css";

const integrations = [
  {
    title: "CRM Platforms",
    description:
      "Connect customer relationship platforms into one unified ecosystem.",
    icon: Database,
    tag: "Connected",
  },
  {
    title: "Marketing Tools",
    description:
      "Synchronize campaigns and engagement across every marketing channel.",
    icon: Workflow,
    tag: "Live",
  },
  {
    title: "Cloud Services",
    description:
      "Secure cloud-native architecture designed for enterprise scalability.",
    icon: Cloud,
    tag: "Cloud",
  },
  {
    title: "Business Applications",
    description:
      "Integrate ERP, commerce and operational platforms effortlessly.",
    icon: Boxes,
    tag: "Enterprise",
  },
];

const IntegrationHub = () => {
  return (
    <section className="integration-hub">

      <div className="container">

        <motion.div
          className="integration-hub__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="integration-hub__eyebrow">

            <Sparkles size={14} />

            Integration Hub

          </span>

          <h2>

            Everything connected through
            <span> one intelligent platform.</span>

          </h2>

          <p>

            CrestRewards is designed with an open integration
            architecture that allows customer data, marketing
            systems and business applications to work together
            seamlessly.

          </p>

        </motion.div>

        <div className="integration-layout">

          <motion.div
            className="integration-network"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="integration-core">

              <div className="integration-core__icon">

                <Globe size={48} />

              </div>

              <h3>

                CrestRewards API

              </h3>

              <span>

                Connected Ecosystem

              </span>

            </div>

            <div className="integration-node integration-node--one">

              <Database size={20} />

              CRM

            </div>

            <div className="integration-node integration-node--two">

              <Cloud size={20} />

              Cloud

            </div>

            <div className="integration-node integration-node--three">

              <Workflow size={20} />

              Marketing

            </div>

            <div className="integration-node integration-node--four">

              <ShieldCheck size={20} />

              Security

            </div>

          </motion.div>

          <motion.div
            className="integration-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {

              integrations.map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.article
                    key={item.title}
                    className="integration-card"
                    initial={{
                      opacity:0,
                      y:30,
                    }}
                    whileInView={{
                      opacity:1,
                      y:0,
                    }}
                    viewport={{
                      once:true,
                    }}
                    transition={{
                      delay:index*.08,
                    }}
                  >

                    <div className="integration-card__icon">

                      <Icon size={22}/>

                    </div>

                    <div className="integration-card__body">

                      <div className="integration-card__top">

                        <h3>

                          {item.title}

                        </h3>

                        <span>

                          {item.tag}

                        </span>

                      </div>

                      <p>

                        {item.description}

                      </p>

                    </div>

                    <ArrowUpRight size={18}/>

                  </motion.article>

                )

              })

            }

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default IntegrationHub;