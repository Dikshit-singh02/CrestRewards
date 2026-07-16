import { motion } from "framer-motion";
import {
  Gift,
  Plane,
  ShoppingBag,
  Coffee,
  Ticket,
  Hotel,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./RewardsMarketplace.css";

const rewardCategories = [
  {
    title: "Travel Rewards",
    description:
      "Redeem loyalty points for flights, vacations, and premium travel experiences.",
    icon: Plane,
    tag: "Popular",
  },
  {
    title: "Shopping",
    description:
      "Use rewards across retail partners with personalized redemption options.",
    icon: ShoppingBag,
    tag: "Featured",
  },
  {
    title: "Dining",
    description:
      "Unlock dining experiences, cafés, and exclusive food partner offers.",
    icon: Coffee,
    tag: "Trending",
  },
  {
    title: "Gift Cards",
    description:
      "Redeem points instantly for digital and physical gift cards.",
    icon: Gift,
    tag: "Flexible",
  },
  {
    title: "Experiences",
    description:
      "Concerts, events, workshops and memorable experiences for loyal customers.",
    icon: Ticket,
    tag: "Exclusive",
  },
  {
    title: "Hotel Stays",
    description:
      "Convert loyalty into premium hotel nights and luxury accommodations.",
    icon: Hotel,
    tag: "Premium",
  },
];

const RewardsMarketplace = () => {
  return (
    <section className="rewards-marketplace">

      <div className="container">

        <motion.div
          className="rewards-marketplace__header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="rewards-marketplace__eyebrow">

            <Sparkles size={14} />

            Rewards Marketplace

          </span>

          <h2>

            A marketplace full of
            <span> meaningful rewards.</span>

          </h2>

          <p>

            CrestRewards is building a flexible marketplace where
            businesses can offer personalized rewards, experiences,
            and redemption opportunities that customers genuinely value.

          </p>

        </motion.div>

        <div className="rewards-marketplace__grid">

          {rewardCategories.map((reward, index) => {

            const Icon = reward.icon;

            return (

              <motion.article
                key={reward.title}
                className="reward-market-card"
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

                <div className="reward-market-card__top">

                  <div className="reward-market-card__icon">

                    <Icon size={28} />

                  </div>

                  <span className="reward-market-card__tag">

                    {reward.tag}

                  </span>

                </div>

                <h3>

                  {reward.title}

                </h3>

                <p>

                  {reward.description}

                </p>

                <button
                  type="button"
                  className="reward-market-card__button"
                >

                  Explore Rewards

                  <ArrowUpRight size={17} />

                </button>

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default RewardsMarketplace;