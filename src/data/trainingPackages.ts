import { BookOpen, Rocket, Brain, Users2, Video, Laptop } from "lucide-react";

export const trainingPackages = [
  {
    id: "essentials",
    name: "DATA ESSENTIALS",
    tagline: "Gain Confidence with Data: Create Reports & Dashboards",
    icon: BookOpen,
    formats: [
      { type: "In-person", icon: Users2 },
      { type: "Virtual", icon: Video },
      { type: "Blended", icon: Laptop }
    ],
    includes: [
      "Skills assessment & mapping",
      "3-day intensive workshop",
      "Hands-on exercises with your data",
      "Post-training support"
    ],
    perfectFor: [
      "Teams who are new to data analytics",
      "Organizations starting their data-driven journey",
      "Departments needing foundational data skills"
    ],
    learningOutcomes: [
      "Master data analysis fundamentals",
      "Connect and prepare organizational data",
      "Create impactful visualizations",
      "Build interactive dashboards",
      "Apply best practices"
    ],
    deliverables: [
      "Custom templates and exercises using your data",
      "Quick reference guides",
      "Completed business-relevant dashboard",
      "Practical workflow documentation"
    ]
  },
  {
    id: "mastery",
    name: "DATA MASTERY",
    tagline: "Unlock Data's Power: Advanced Analysis & Automation",
    icon: Brain,
    formats: [
      { type: "In-person", icon: Users2 },
      { type: "Virtual", icon: Video },
      { type: "Blended", icon: Laptop }
    ],
    includes: [
      "Comprehensive skills assessment",
      "5-day advanced workshop",
      "Real-world project implementation",
      "15-day post-training support"
    ],
    perfectFor: [
      "Teams ready to advance their data capabilities",
      "Organizations seeking process automation",
      "Departments handling complex data analysis"
    ],
    learningOutcomes: [
      "Advanced data manipulation",
      "Multi-source data integration",
      "Automated workflows",
      "Data governance implementation",
      "Advanced visualization techniques"
    ],
    deliverables: [
      "Complete analytics project using your data",
      "Automation templates and frameworks",
      "Data governance toolkit",
      "Best practices documentation"
    ]
  },
  {
    id: "innovation",
    name: "DATA INNOVATION",
    tagline: "Lead with Insights: Explore AI & Predictive Analytics",
    icon: Rocket,
    formats: [
      { type: "In-person", icon: Users2 },
      { type: "Virtual", icon: Video },
      { type: "Blended", icon: Laptop }
    ],
    includes: [
      "Advanced capability assessment",
      "5-day innovation workshop",
      "AI/ML implementation planning",
      "3-month expert consultation"
    ],
    perfectFor: [
      "Teams ready for AI/ML implementation",
      "Organizations seeking predictive capabilities",
      "Departments driving innovation initiatives"
    ],
    learningOutcomes: [
      "AI/ML fundamentals",
      "Industry-specific applications",
      "Predictive modeling basics",
      "Strategic roadmapping",
      "Leveraging GenAI capabilities"
    ],
    deliverables: [
      "Customized AI/ML project plan",
      "Strategic implementation roadmap",
      "3-month expert consultation",
      "Priority support access",
      "Advanced resource library"
    ]
  }
];