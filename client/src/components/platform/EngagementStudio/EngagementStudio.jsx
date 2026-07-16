import { motion } from "framer-motion";
import {
  Bell,
  MessageSquare,
  Mail,
  Smartphone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./EngagementStudio.css";

const channels = [
  {
    title: "Email Engagement",
    description:
      "Deliver personalized campaigns with dynamic customer journeys.",
    icon: Mail,
  },
  {
    title: "Mobile Experience",
    description:
      "Reach customers instantly with mobile-first personalized interactions.",
    icon: Smartphone,
  },
  {
    title: "In-App Messaging",
    description:
      "Create contextual engagement inside digital experiences.",
    icon: MessageSquare,
  },
  {
    title: "Real-time Notifications",
    description:
      "Keep customers informed through meaningful event-driven updates.",
    icon: Bell,
  },
];

const EngagementStudio = () => {
  return (
    <section className="engagement-studio">

      <div className="container">

        <motion.div
          className="engagement-studio__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="engagement-studio__eyebrow">

            <Sparkles size={14} />

            Engagement Studio

          </span>

          <h2>

            Create conversations
            <span> customers remember.</span>

          </h2>

          <p>

            CrestRewards is designed to help brands build
            meaningful customer engagement across every
            communication channel through intelligent
            orchestration.

          </p>

        </motion.div>

        <div className="engagement-studio__grid">

          {

            channels.map((channel,index)=>{

              const Icon=channel.icon;

              return(

                <motion.article
                  key={channel.title}
                  className="engagement-card"
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
                    delay:index*.08,
                    duration:.6,
                  }}
                >

                  <div className="engagement-card__icon">

                    <Icon size={26}/>

                  </div>

                  <h3>

                    {channel.title}

                  </h3>

                  <p>

                    {channel.description}

                  </p>

                  <button
                    className="engagement-card__button"
                    type="button"
                  >

                    Explore

                    <ArrowUpRight size={17}/>

                  </button>

                </motion.article>

              );

            })

          }

        </div>

      </div>

    </section>
  );
};

export default EngagementStudio;