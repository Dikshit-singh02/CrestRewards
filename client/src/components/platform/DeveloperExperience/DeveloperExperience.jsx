import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Webhook,
  Braces,
  FileJson,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./DeveloperExperience.css";

const developerFeatures = [
  {
    title: "REST APIs",
    description:
      "Access every platform capability through modern, secure REST APIs built for developers.",
    icon: Braces,
    tag: "API",
  },
  {
    title: "Webhooks",
    description:
      "Receive real-time customer events instantly and automate external workflows.",
    icon: Webhook,
    tag: "Realtime",
  },
  {
    title: "SDK Libraries",
    description:
      "Integrate faster using lightweight SDKs for modern frontend and backend frameworks.",
    icon: Code2,
    tag: "SDK",
  },
  {
    title: "Developer Portal",
    description:
      "Comprehensive documentation, examples and testing tools for rapid development.",
    icon: FileJson,
    tag: "Docs",
  },
];

const DeveloperExperience = () => {
  return (
    <section className="developer-experience">
      <div className="container">

        <motion.div
          className="developer-experience__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="developer-experience__eyebrow">
            <Sparkles size={14} />
            Developer Experience
          </span>

          <h2>
            Build faster with an
            <span> API-first platform.</span>
          </h2>

          <p>
            CrestRewards provides developers with secure APIs,
            webhooks and modern integration tools to build
            connected customer experiences quickly and reliably.
          </p>
        </motion.div>

        <div className="developer-layout">

          <motion.div
            className="developer-console"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="console-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="console-body">

              <div className="console-line">
                <Terminal size={16} />
                <code>POST /api/v1/loyalty/member</code>
              </div>

              <div className="console-line">
                <Code2 size={16} />
                <code>Status : 200 OK</code>
              </div>

              <div className="console-line">
                <Code2 size={16} />
                <code>{`{ customer: "Connected" }`}</code>
              </div>

            </div>
          </motion.div>

          <motion.div
            className="developer-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {developerFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="developer-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="developer-card__icon">
                    <Icon size={22} />
                  </div>

                  <div className="developer-card__body">
                    <div className="developer-card__top">
                      <h3>{item.title}</h3>
                      <span>{item.tag}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>

                  <ArrowUpRight size={18} />
                </motion.article>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default DeveloperExperience;