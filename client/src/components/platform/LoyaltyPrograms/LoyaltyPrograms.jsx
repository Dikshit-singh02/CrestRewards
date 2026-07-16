import { motion } from "framer-motion";
import {
  Crown,
  Gem,
  Gift,
  Star,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

import "./LoyaltyPrograms.css";

const loyaltyPrograms = [
  {
    title: "Silver Membership",
    description:
      "A welcoming loyalty experience with exclusive offers and personalized rewards.",
    icon: Star,
  },
  {
    title: "Gold Membership",
    description:
      "Unlock premium campaigns, faster rewards and higher engagement opportunities.",
    icon: Trophy,
  },
  {
    title: "Platinum Membership",
    description:
      "Deliver VIP experiences through intelligent recognition and exclusive benefits.",
    icon: Crown,
  },
  {
    title: "Custom Programs",
    description:
      "Design loyalty experiences that match your business objectives and customer needs.",
    icon: Gem,
  },
];

const LoyaltyPrograms = () => {
  return (
    <section className="loyalty-programs">

      <div className="container">

        <motion.div
          className="loyalty-programs__header"
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
            duration: 0.7,
          }}
        >

          <span className="loyalty-programs__eyebrow">

            <Gift size={14} />

            Loyalty Programs

          </span>

          <h2>

            Build loyalty programs
            <span> customers genuinely value.</span>

          </h2>

          <p>

            CrestRewards enables organizations to design
            flexible loyalty programs that evolve with
            customer behavior while encouraging long-term
            engagement and retention.

          </p>

        </motion.div>

        <div className="loyalty-programs__grid">

          {loyaltyPrograms.map((program, index) => {

            const Icon = program.icon;

            return (

              <motion.article
                key={program.title}
                className="loyalty-card"
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
              >

                <div className="loyalty-card__icon">

                  <Icon size={28} />

                </div>

                <h3>

                  {program.title}

                </h3>

                <p>

                  {program.description}

                </p>

                <div className="loyalty-card__footer">

                  <span>Future Ready</span>

                  <ArrowUpRight size={18} />

                </div>

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default LoyaltyPrograms;