import { 
  Brain, 
  Target, 
  TrendingUp, 
  Award,
  BarChart3,
  Laptop,
  LineChart,
  Database,
} from "lucide-react";

export const benefits = [
  {
    title: "Leverage Existing Knowledge",
    description: "Transform your current workforce into data analytics experts while capitalizing on their deep understanding of your business.",
    icon: Brain,
  },
  {
    title: "Custom-Tailored Learning",
    description: "Training programs specifically designed around your organization's tools, data, and business challenges.",
    icon: Target,
  },
  {
    title: "Immediate Application",
    description: "Employees learn using your actual business data, ensuring skills can be applied immediately to real challenges.",
    icon: TrendingUp,
  },
  {
    title: "Cost-Effective Solution",
    description: "Save on recruitment and onboarding costs while increasing employee retention through valuable upskilling.",
    icon: Award,
  },
];

export const trainingAreas = [
  {
    title: "Data Analysis Fundamentals",
    description: "Master the basics of data analysis, statistics, and analytical thinking.",
    icon: BarChart3,
    topics: [
      "Statistical analysis basics",
      "Data cleaning and preparation",
      "Analytical problem-solving",
      "Data visualization principles"
    ]
  },
  {
    title: "Tool-Specific Training",
    description: "Get hands-on experience with your organization's preferred analytics tools - we adapt to your tech stack.",
    icon: Laptop,
    topics: [
      "Training for any BI tool (Power BI, Tableau, etc.)",
      "Database-specific SQL training",
      "Cloud platform expertise (AWS, Azure, GCP)",
      "Custom tool & technology training"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Dive deep into advanced analytical methods tailored to your industry.",
    icon: LineChart,
    topics: [
      "Predictive modeling",
      "Machine learning basics",
      "Industry-specific analytics",
      "Advanced visualization"
    ]
  },
  {
    title: "Data Management",
    description: "Learn best practices for handling and managing organizational data.",
    icon: Database,
    topics: [
      "Data governance",
      "Quality assurance",
      "Security best practices",
      "Process automation"
    ]
  },
];