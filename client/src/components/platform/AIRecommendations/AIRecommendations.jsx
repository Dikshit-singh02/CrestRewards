import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Target,
  TrendingUp,
  Lightbulb,
  ArrowUpRight,
  ScanSearch,
} from "lucide-react";

import "./AIRecommendations.css";

const recommendations = [
  {
    title: "Next Best Offer",
    description:
      "Recommend the most relevant reward based on customer interests and engagement history.",
    icon: Target,
    confidence: "96%",
  },
  {
    title: "Retention Opportunity",
    description:
      "Identify customers likely to disengage and trigger proactive loyalty campaigns.",
    icon: TrendingUp,
    confidence: "91%",
  },
  {
    title: "Behavior Insights",
    description:
      "Recognize purchasing patterns and customer preferences automatically.",
    icon: ScanSearch,
    confidence: "94%",
  },
  {
    title: "Smart Recommendations",
    description:
      "Generate personalized experiences using evolving customer intelligence.",
    icon: Lightbulb,
    confidence: "98%",
  },
];

const AIRecommendations = () => {
  return (
    <section className="ai-recommendations">

      <div className="container">

        <motion.div
          className="ai-recommendations__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="ai-recommendations__eyebrow">

            <Sparkles size={14} />

            AI Recommendations

          </span>

          <h2>

            Every recommendation becomes
            <span> a meaningful experience.</span>

          </h2>

          <p>

            CrestRewards is exploring intelligent recommendation
            capabilities that help brands deliver personalized
            engagement based on customer behavior, preferences,
            and real-time insights.

          </p>

        </motion.div>

        <div className="ai-engine">

          <motion.div
            className="ai-engine__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="ai-core">

              <div className="ai-core__icon">

                <BrainCircuit size={48} />

              </div>

              <h3>

                Crest AI Engine

              </h3>

              <span>

                Real-Time Intelligence

              </span>

            </div>

            <span className="ai-orbit ai-orbit--one"></span>
            <span className="ai-orbit ai-orbit--two"></span>
            <span className="ai-orbit ai-orbit--three"></span>

          </motion.div>

          <motion.div
            className="ai-engine__content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {

              recommendations.map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.article
                    key={item.title}
                    className="ai-card"
                    initial={{
                      opacity:0,
                      y:25
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

                    <div className="ai-card__icon">

                      <Icon size={22}/>

                    </div>

                    <div className="ai-card__body">

                      <h3>

                        {item.title}

                      </h3>

                      <p>

                        {item.description}

                      </p>

                    </div>

                    <div className="ai-card__score">

                      <strong>

                        {item.confidence}

                      </strong>

                      <span>

                        Match

                      </span>

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

export default AIRecommendations;