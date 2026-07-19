import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  BarChart3,
  Workflow,
  Users,
  Headphones,
} from "lucide-react";

import "./WhyChooseSolutions.css";

const benefits = [
  {
    icon: <ShieldCheck size={30} />,
    title: "Secure Platform",
    description:
      "Enterprise-grade security to protect customer data and loyalty transactions.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Personalized Experiences",
    description:
      "Deliver targeted campaigns and rewards based on customer behavior.",
  },
  {
    icon: <BarChart3 size={30} />,
    title: "Real-Time Analytics",
    description:
      "Track campaign performance, engagement, and redemption with live insights.",
  },
  {
    icon: <Workflow size={30} />,
    title: "Easy Automation",
    description:
      "Automate earning rules, reward distribution, and customer journeys.",
  },
  {
    icon: <Users size={30} />,
    title: "Customer Engagement",
    description:
      "Increase repeat purchases through meaningful and rewarding experiences.",
  },
  {
    icon: <Headphones size={30} />,
    title: "Dedicated Support",
    description:
      "Our experts help you launch, manage, and optimize your loyalty programs.",
  },
];

const WhyChooseSolutions = () => {
  return (
    <section className="why-solutions">
      <div className="why-solutions__container">

        <div className="why-solutions__header">

          <span className="why-solutions__badge">
            Why CrestRewards
          </span>

          <h2>
            Everything you need to grow customer loyalty.
          </h2>

          <p>
            Our platform combines automation, analytics, rewards,
            and customer engagement tools to help businesses build
            stronger and longer-lasting relationships.
          </p>

        </div>

        <div className="why-solutions__grid">

          {benefits.map((item, index) => (

            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <div className="benefit-card__icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSolutions;