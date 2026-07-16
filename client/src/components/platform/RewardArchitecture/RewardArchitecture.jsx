import { motion } from "framer-motion";
import {
  Gift,
  BadgePercent,
  Crown,
  Plane,
  Ticket,
  Wallet,
  ArrowRight,
} from "lucide-react";

import "./RewardArchitecture.css";

const rewards = [
  {
    title: "Reward Points",
    description:
      "Flexible points that customers can collect and redeem across experiences.",
    icon: Gift,
  },
  {
    title: "Cashback",
    description:
      "Reward loyal customers with instant cashback and personalized incentives.",
    icon: Wallet,
  },
  {
    title: "Travel Benefits",
    description:
      "Air miles, hotel stays and premium travel experiences for valuable members.",
    icon: Plane,
  },
  {
    title: "Exclusive Vouchers",
    description:
      "Deliver curated coupons and promotional vouchers at the right moment.",
    icon: Ticket,
  },
  {
    title: "VIP Membership",
    description:
      "Unlock premium tiers with exclusive benefits and priority experiences.",
    icon: Crown,
  },
  {
    title: "Personal Offers",
    description:
      "Create intelligent offers based on customer behavior and engagement.",
    icon: BadgePercent,
  },
];

const RewardArchitecture = () => {
  return (
    <section className="reward-architecture">
      <div className="container">

        <motion.div
          className="reward-architecture__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="reward-architecture__eyebrow">
            Reward Architecture
          </span>

          <h2>
            Rewards designed to
            <span> strengthen every relationship.</span>
          </h2>

          <p>
            CrestRewards is exploring a flexible reward architecture
            where every interaction can become an opportunity to
            recognize loyalty with meaningful experiences.
          </p>
        </motion.div>

        <div className="reward-architecture__grid">

          {rewards.map((reward, index) => {
            const Icon = reward.icon;

            return (
              <motion.article
                key={reward.title}
                className="reward-card"
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
                  delay: index * 0.08,
                  duration: 0.6,
                }}
              >
                <div className="reward-card__icon">
                  <Icon size={28} />
                </div>

                <h3>{reward.title}</h3>

                <p>{reward.description}</p>

                <button
                  type="button"
                  className="reward-card__link"
                >
                  Learn more
                  <ArrowRight size={16} />
                </button>
              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default RewardArchitecture;