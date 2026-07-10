import { motion } from "framer-motion";
import {
  ArrowRight,
  Blocks,
  Braces,
  ChartNoAxesCombined,
  Check,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import "./BuiltForGrowth.css";

const growthPillars = [
  {
    number: "01",
    eyebrow: "Flexible architecture",
    title: "Composable Foundation",
    description:
      "A platform direction designed around modular capabilities, connected experiences, and room for businesses to shape loyalty around their own model.",
    icon: Blocks,
    visual: "architecture",
    points: [
      "Modular platform thinking",
      "Connected experience layers",
      "Integration-ready direction",
    ],
  },
  {
    number: "02",
    eyebrow: "Responsible foundation",
    title: "Secure by Design",
    description:
      "Security and responsible customer-data practices should be considered from the foundation, not added as an afterthought.",
    icon: ShieldCheck,
    visual: "security",
    points: [
      "Thoughtful access patterns",
      "Responsible data handling",
      "Security-first architecture",
    ],
  },
  {
    number: "03",
    eyebrow: "Clearer understanding",
    title: "Insight-Ready",
    description:
      "Transform connected customer activity into clearer signals that can help teams understand relationships and make more informed decisions.",
    icon: ChartNoAxesCombined,
    visual: "insights",
    points: [
      "Connected behavioural context",
      "Relationship-level thinking",
      "Decision-support direction",
    ],
  },
  {
    number: "04",
    eyebrow: "Long-term thinking",
    title: "Built to Evolve",
    description:
      "Customer expectations, channels, and business models change. CrestRewards is being imagined with adaptability at its core.",
    icon: GitBranch,
    visual: "evolution",
    points: [
      "Adaptable journey concepts",
      "Room for new channels",
      "Designed for continuous evolution",
    ],
  },
];

const ArchitectureVisual = () => {
  return (
    <div className="growth-visual growth-visual--architecture">
      <div className="architecture-core">
        <span>
          <Layers3 size={22} />
        </span>

        <strong>CrestRewards</strong>
        <small>Platform core</small>
      </div>

      <div className="architecture-node architecture-node--one">
        <Braces size={16} />
        <span>Experience</span>
      </div>

      <div className="architecture-node architecture-node--two">
        <Database size={16} />
        <span>Customer context</span>
      </div>

      <div className="architecture-node architecture-node--three">
        <Workflow size={16} />
        <span>Journeys</span>
      </div>

      <div className="architecture-node architecture-node--four">
        <Network size={16} />
        <span>Connections</span>
      </div>
    </div>
  );
};

const SecurityVisual = () => {
  return (
    <div className="growth-visual growth-visual--security">
      <div className="security-orbit security-orbit--outer" />
      <div className="security-orbit security-orbit--inner" />

      <div className="security-core">
        <span>
          <LockKeyhole size={29} />
        </span>

        <strong>Protected by design</strong>
        <small>Thoughtful foundations</small>
      </div>

      <span className="security-status security-status--one">
        <Check size={12} />
        Access
      </span>

      <span className="security-status security-status--two">
        <Check size={12} />
        Data
      </span>

      <span className="security-status security-status--three">
        <Check size={12} />
        Trust
      </span>
    </div>
  );
};

const InsightVisual = () => {
  return (
    <div className="growth-visual growth-visual--insights">
      <div className="insight-header">
        <span>
          <ChartNoAxesCombined size={17} />
          Relationship signals
        </span>

        <span className="insight-header__live">
          <span />
          Connected
        </span>
      </div>

      <div className="insight-chart">
        <span style={{ height: "32%" }} />
        <span style={{ height: "47%" }} />
        <span style={{ height: "41%" }} />
        <span style={{ height: "65%" }} />
        <span style={{ height: "58%" }} />
        <span style={{ height: "76%" }} />
        <span style={{ height: "70%" }} />
        <span style={{ height: "88%" }} />
      </div>

      <div className="insight-signals">
        <span>Engagement</span>
        <span>Preference</span>
        <span>Relationship</span>
      </div>
    </div>
  );
};

const EvolutionVisual = () => {
  return (
    <div className="growth-visual growth-visual--evolution">
      <div className="evolution-path">
        <div className="evolution-stage">
          <span>01</span>
          <strong>Understand</strong>
        </div>

        <div className="evolution-line">
          <span />
        </div>

        <div className="evolution-stage">
          <span>02</span>
          <strong>Connect</strong>
        </div>

        <div className="evolution-line">
          <span />
        </div>

        <div className="evolution-stage evolution-stage--active">
          <span>03</span>
          <strong>Evolve</strong>
        </div>
      </div>

      <div className="evolution-message">
        <Sparkles size={16} />

        <span>
          Designed for what comes next
        </span>
      </div>
    </div>
  );
};

const renderVisual = (visual) => {
  switch (visual) {
    case "architecture":
      return <ArchitectureVisual />;

    case "security":
      return <SecurityVisual />;

    case "insights":
      return <InsightVisual />;

    case "evolution":
      return <EvolutionVisual />;

    default:
      return null;
  }
};

const BuiltForGrowth = () => {
  return (
    <section className="built-for-growth">
      <div
        className="built-for-growth__background"
        aria-hidden="true"
      >
        <div className="built-for-growth__glow built-for-growth__glow--left" />
        <div className="built-for-growth__glow built-for-growth__glow--right" />
        <div className="built-for-growth__grid" />
      </div>

      <div className="container">
        <motion.div
          className="built-for-growth__heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="section-identity">
            <span className="section-identity__icon">
              <Layers3 size={14} />
            </span>

            <span>Built for growth</span>
          </div>

          <div className="built-for-growth__heading-layout">
            <h2 className="built-for-growth__title">
              Start with purpose.
              <span> Grow without losing it.</span>
            </h2>

            <div className="built-for-growth__heading-copy">
              <p>
                CrestRewards is being shaped as more than a collection of
                loyalty features. The goal is a thoughtful foundation for
                customer relationships that can adapt as businesses,
                expectations, and channels evolve.
              </p>

              <div className="built-for-growth__heading-path">
                <span>Connect</span>
                <ArrowRight size={14} />
                <span>Understand</span>
                <ArrowRight size={14} />
                <span>Engage</span>
                <ArrowRight size={14} />
                <span>Evolve</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="growth-pillars">
          {growthPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                className="growth-pillar"
                key={pillar.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="growth-pillar__content">
                  <div className="growth-pillar__top">
                    <span className="growth-pillar__number">
                      {pillar.number}
                    </span>

                    <span className="growth-pillar__icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                  </div>

                  <span className="growth-pillar__eyebrow">
                    {pillar.eyebrow}
                  </span>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>

                  <div className="growth-pillar__points">
                    {pillar.points.map((point) => (
                      <span key={point}>
                        <span className="growth-pillar__check">
                          <Check size={11} />
                        </span>

                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="growth-pillar__visual">
                  {renderVisual(pillar.visual)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuiltForGrowth;