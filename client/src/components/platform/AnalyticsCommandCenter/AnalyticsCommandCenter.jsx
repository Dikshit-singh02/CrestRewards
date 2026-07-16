import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Users,
  Wallet,
  Activity,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./AnalyticsCommandCenter.css";

const metrics = [
  {
    title: "Customer Growth",
    value: "+38%",
    description: "Compared to previous quarter",
    icon: TrendingUp,
  },
  {
    title: "Active Members",
    value: "248K",
    description: "Across connected programs",
    icon: Users,
  },
  {
    title: "Rewards Redeemed",
    value: "91K",
    description: "Successful reward transactions",
    icon: Wallet,
  },
  {
    title: "Engagement Rate",
    value: "94%",
    description: "Average campaign interaction",
    icon: Activity,
  },
];

const chartBars = [35, 65, 50, 82, 72, 95, 68];

const AnalyticsCommandCenter = () => {
  return (
    <section className="analytics-command-center">

      <div className="container">

        <motion.div
          className="analytics-command-center__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="analytics-command-center__eyebrow">

            <Sparkles size={14} />

            Analytics Command Center

          </span>

          <h2>

            Make every decision
            <span> backed by intelligence.</span>

          </h2>

          <p>

            CrestRewards transforms customer activity into
            actionable business insights through one connected
            analytics workspace.

          </p>

        </motion.div>

        <div className="analytics-dashboard">

          <motion.div
            className="analytics-dashboard__overview"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="analytics-dashboard__title">

              <div>

                <h3>

                  Platform Performance

                </h3>

                <span>

                  Live Business Overview

                </span>

              </div>

              <BarChart3 size={24} />

            </div>

            <div className="analytics-chart">

              {chartBars.map((height,index)=>(
                <motion.span
                  key={index}
                  style={{
                    height:`${height}%`
                  }}
                  initial={{
                    height:0
                  }}
                  whileInView={{
                    height:`${height}%`
                  }}
                  viewport={{
                    once:true
                  }}
                  transition={{
                    delay:index*.08,
                    duration:.7
                  }}
                />
              ))}

            </div>

            <div className="analytics-progress">

              <div>

                <span>Loyalty Health</span>

                <strong>92%</strong>

              </div>

              <div className="analytics-progress__bar">

                <span />

              </div>

            </div>

          </motion.div>

          <motion.div
            className="analytics-dashboard__metrics"
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            {

              metrics.map((metric,index)=>{

                const Icon=metric.icon;

                return(

                  <motion.article
                    key={metric.title}
                    className="analytics-card"
                    initial={{
                      opacity:0,
                      y:30
                    }}
                    whileInView={{
                      opacity:1,
                      y:0
                    }}
                    viewport={{
                      once:true
                    }}
                    transition={{
                      delay:index*.08
                    }}
                  >

                    <div className="analytics-card__icon">

                      <Icon size={24}/>

                    </div>

                    <div className="analytics-card__body">

                      <span>

                        {metric.title}

                      </span>

                      <strong>

                        {metric.value}

                      </strong>

                      <p>

                        {metric.description}

                      </p>

                    </div>

                    <ArrowUpRight size={18}/>

                  </motion.article>

                )

              })

            }

          </motion.div>

        </div>

        <motion.div
          className="analytics-map"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
        >

          <div className="analytics-map__icon">

            <Globe size={28}/>

          </div>

          <div>

            <h3>

              Connected Customer Network

            </h3>

            <p>

              Unified customer intelligence across retail,
              banking, travel, hospitality and digital commerce.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AnalyticsCommandCenter;