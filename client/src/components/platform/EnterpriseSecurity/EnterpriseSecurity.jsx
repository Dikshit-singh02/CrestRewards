import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Fingerprint,
  Server,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./EnterpriseSecurity.css";

const securityFeatures = [
  {
    title: "Zero Trust Security",
    description:
      "Every request is continuously verified before access is granted across the platform.",
    icon: ShieldCheck,
    tag: "Core",
  },
  {
    title: "Advanced Encryption",
    description:
      "Sensitive customer information is protected using modern encryption standards.",
    icon: Lock,
    tag: "AES-256",
  },
  {
    title: "Identity Management",
    description:
      "Secure authentication with role-based access and identity governance.",
    icon: Fingerprint,
    tag: "IAM",
  },
  {
    title: "API Protection",
    description:
      "Every integration endpoint is secured with authentication and monitoring.",
    icon: KeyRound,
    tag: "API",
  },
];

const EnterpriseSecurity = () => {
  return (
    <section className="enterprise-security">

      <div className="container">

        <motion.div
          className="enterprise-security__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="enterprise-security__eyebrow">

            <Sparkles size={14} />

            Enterprise Security

          </span>

          <h2>

            Security built into
            <span> every interaction.</span>

          </h2>

          <p>

            CrestRewards is designed with enterprise-grade security,
            compliance, encryption and governance to protect every
            customer relationship from day one.

          </p>

        </motion.div>

        <div className="enterprise-security__layout">

          <motion.div
            className="security-overview"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="security-core">

              <div className="security-core__icon">

                <ShieldCheck size={50} />

              </div>

              <h3>

                Secure by Design

              </h3>

              <span>

                Enterprise Ready

              </span>

            </div>

            <div className="security-status">

              <div>

                <Server size={18} />

                Infrastructure Protected

              </div>

              <div>

                <CheckCircle2 size={18} />

                Compliance Ready

              </div>

            </div>

          </motion.div>

          <motion.div
            className="security-features"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {

              securityFeatures.map((feature,index)=>{

                const Icon=feature.icon;

                return(

                  <motion.article
                    key={feature.title}
                    className="security-card"
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

                    <div className="security-card__icon">

                      <Icon size={22}/>

                    </div>

                    <div className="security-card__body">

                      <div className="security-card__top">

                        <h3>

                          {feature.title}

                        </h3>

                        <span>

                          {feature.tag}

                        </span>

                      </div>

                      <p>

                        {feature.description}

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

export default EnterpriseSecurity;