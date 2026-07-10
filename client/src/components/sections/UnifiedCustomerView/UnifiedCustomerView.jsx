import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  Globe2,
  Mail,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  UserRound,
  WalletCards,
} from "lucide-react";

import "./UnifiedCustomerView.css";

const customerSignals = [
  {
    className: "customer-signal--web",
    label: "Web",
    detail: "Browsing intent",
    icon: Globe2,
  },
  {
    className: "customer-signal--mobile",
    label: "Mobile",
    detail: "App activity",
    icon: Smartphone,
  },
  {
    className: "customer-signal--store",
    label: "Store",
    detail: "Visit behaviour",
    icon: Store,
  },
  {
    className: "customer-signal--purchase",
    label: "Purchases",
    detail: "Transaction history",
    icon: ShoppingBag,
  },
  {
    className: "customer-signal--campaign",
    label: "Campaigns",
    detail: "Engagement signals",
    icon: Mail,
  },
  {
    className: "customer-signal--rewards",
    label: "Rewards",
    detail: "Reward preferences",
    icon: Gift,
  },
];

const capabilities = [
  {
    icon: MousePointerClick,
    title: "Capture meaningful signals",
    description:
      "Bring together relevant customer activity from digital and physical interactions.",
  },
  {
    icon: UserRound,
    title: "Build richer customer context",
    description:
      "Turn fragmented interactions into a clearer understanding of preferences and behaviour.",
  },
  {
    icon: Target,
    title: "Create more relevant journeys",
    description:
      "Use connected customer context to shape engagement that feels timely and useful.",
  },
];

const UnifiedCustomerView = () => {
  return (
    <section className="unified-customer-view">
      <div
        className="unified-customer-view__background"
        aria-hidden="true"
      >
        <div className="unified-customer-view__glow unified-customer-view__glow--left" />
        <div className="unified-customer-view__glow unified-customer-view__glow--right" />
        <div className="unified-customer-view__grid" />
      </div>

      <div className="container">
        <motion.div
          className="unified-customer-view__heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-identity">
            <span className="section-identity__icon">
              <MonitorSmartphone size={14} />
            </span>

            <span>Connected customer understanding</span>
          </div>

          <h2 className="unified-customer-view__title">
            One customer.
            <br />
            <span>One connected view.</span>
          </h2>

          <p className="unified-customer-view__description">
            Customer relationships happen across many touchpoints. CrestRewards
            is designed to connect meaningful signals into a clearer customer
            story that teams can understand and act on.
          </p>
        </motion.div>

        <div className="unified-customer-view__experience">
          <motion.div
            className="customer-universe"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="customer-universe__orbit customer-universe__orbit--outer"
              aria-hidden="true"
            />

            <div
              className="customer-universe__orbit customer-universe__orbit--middle"
              aria-hidden="true"
            />

            <div
              className="customer-universe__orbit customer-universe__orbit--inner"
              aria-hidden="true"
            />

            <div
              className="customer-universe__beam customer-universe__beam--one"
              aria-hidden="true"
            />

            <div
              className="customer-universe__beam customer-universe__beam--two"
              aria-hidden="true"
            />

            <div
              className="customer-universe__beam customer-universe__beam--three"
              aria-hidden="true"
            />

            {customerSignals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <motion.div
                  key={signal.label}
                  className={`customer-signal ${signal.className}`}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                    duration: 0.5,
                  }}
                >
                  <span className="customer-signal__icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span className="customer-signal__content">
                    <strong>{signal.label}</strong>
                    <small>{signal.detail}</small>
                  </span>
                </motion.div>
              );
            })}

            <motion.article
              className="customer-profile-card"
              initial={{
                opacity: 0,
                y: 25,
                rotateX: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="customer-profile-card__shine" />

              <div className="customer-profile-card__header">
                <div className="customer-profile-card__identity">
                  <span className="customer-profile-card__avatar">
                    <UserRound size={23} />
                  </span>

                  <span>
                    <small>Unified profile</small>
                    <strong>Customer 360°</strong>
                  </span>
                </div>

                <span className="customer-profile-card__verified">
                  <BadgeCheck size={16} />
                  Connected
                </span>
              </div>

              <div className="customer-profile-card__journey">
                <div>
                  <small>Relationship stage</small>
                  <strong>Growing</strong>
                </div>

                <span className="customer-profile-card__journey-line">
                  <span />
                </span>
              </div>

              <div className="customer-profile-card__metrics">
                <div>
                  <span className="profile-metric-icon">
                    <WalletCards size={16} />
                  </span>

                  <span>
                    <small>Preference</small>
                    <strong>Experiences</strong>
                  </span>
                </div>

                <div>
                  <span className="profile-metric-icon">
                    <MapPin size={16} />
                  </span>

                  <span>
                    <small>Channel</small>
                    <strong>Omnichannel</strong>
                  </span>
                </div>

                <div>
                  <span className="profile-metric-icon">
                    <Sparkles size={16} />
                  </span>

                  <span>
                    <small>Opportunity</small>
                    <strong>Personalize</strong>
                  </span>
                </div>
              </div>

              <div className="customer-profile-card__footer">
                <span className="customer-profile-card__pulse" />
                Customer context updating
              </div>
            </motion.article>
          </motion.div>

          <motion.div
            className="customer-capabilities"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="customer-capabilities__label">
              From signals to understanding
            </span>

            <h3>
              See the relationship,
              <span> not just the transaction.</span>
            </h3>

            <p className="customer-capabilities__introduction">
              CrestRewards is designed to help businesses move from fragmented
              activity toward customer context that can support better
              decisions and more relevant engagement.
            </p>

            <div className="customer-capabilities__list">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    className="customer-capability"
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <span className="customer-capability__icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className="customer-capability__content">
                      <strong>{capability.title}</strong>
                      <small>{capability.description}</small>
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="customer-capabilities__outcome">
              <span>Connected context</span>
              <ArrowRight size={15} />
              <span>Relevant engagement</span>
              <ArrowRight size={15} />
              <span>Stronger relationships</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedCustomerView;