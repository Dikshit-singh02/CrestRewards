import { motion } from "framer-motion";
import {
  Cloud,
  Globe,
  Server,
  Layers3,
  Cpu,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./ScalabilityArchitecture.css";

const infrastructure = [
  {
    title: "Global Infrastructure",
    description:
      "Deploy customer experiences across multiple regions with low latency.",
    icon: Globe,
    tag: "Worldwide",
  },
  {
    title: "Cloud Native",
    description:
      "Modern cloud architecture designed for reliability and flexibility.",
    icon: Cloud,
    tag: "Cloud",
  },
  {
    title: "Microservices",
    description:
      "Independent platform services that scale without affecting performance.",
    icon: Layers3,
    tag: "Scalable",
  },
  {
    title: "Real-Time Processing",
    description:
      "Handle millions of customer events instantly through distributed systems.",
    icon: Activity,
    tag: "Realtime",
  },
];

const ScalabilityArchitecture = () => {
  return (
    <section className="scalability-architecture">

      <div className="container">

        <motion.div
          className="scalability-architecture__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="scalability-architecture__eyebrow">

            <Sparkles size={14} />

            Scalability Architecture

          </span>

          <h2>

            Built to scale with
            <span> every customer interaction.</span>

          </h2>

          <p>

            CrestRewards is designed using a modern cloud-native
            architecture capable of supporting businesses as they
            grow across customers, markets and digital channels.

          </p>

        </motion.div>

        <div className="scalability-layout">

          <motion.div
            className="scalability-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="architecture-core">

              <div className="architecture-core__icon">

                <Cpu size={46} />

              </div>

              <h3>

                Crest Cloud

              </h3>

              <span>

                Distributed Platform

              </span>

            </div>

            <div className="architecture-node architecture-node--one">

              <Server size={18} />

              Region 01

            </div>

            <div className="architecture-node architecture-node--two">

              <Cloud size={18} />

              Cloud Edge

            </div>

            <div className="architecture-node architecture-node--three">

              <Globe size={18} />

              Global Network

            </div>

            <div className="architecture-node architecture-node--four">

              <Layers3 size={18} />

              Services

            </div>

          </motion.div>

          <motion.div
            className="scalability-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {

              infrastructure.map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.article
                    key={item.title}
                    className="architecture-card"
                    initial={{
                      opacity:0,
                      y:25,
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

                    <div className="architecture-card__icon">

                      <Icon size={22}/>

                    </div>

                    <div className="architecture-card__body">

                      <div className="architecture-card__top">

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

                );

              })

            }

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ScalabilityArchitecture;