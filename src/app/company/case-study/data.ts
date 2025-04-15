import img01 from "../../../../public/case-study-imgs/img01.png"
import img02 from "../../../../public/case-study-imgs/img02.png"
import img03 from "../../../../public/case-study-imgs/img03.png"
import img04 from "../../../../public/case-study-imgs/img04.png"
import img05 from "../../../../public/case-study-imgs/img05.png"
import img06 from "../../../../public/case-study-imgs/img06.png"
import img07 from "../../../../public/case-study-imgs/img07.png"

export interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: any;
    bgColor: string;
    tag1: string
    tag2: string
    tag3: string
    challenges: {
        title: string;
        description: string;
    }[];
    solution: {
        phases: {
        title: string;
        points: string[];
        }[];
    };
    outcomes: {
        value: string;
        title: string;
        description: string;
    }[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "global-tech-firm",
        title:
        "How a global tech firm cut manual processes by 40% through workflow automation",
        subtitle: "Transforming Workflow Automation For A Global Tech Firm",
        description:
        "A multinational technology company with over 5,000 employees and operations in 15 countries faced significant challenges with disjointed workflow automation across dozens of teams, impacting operational costs and employee burnout.",
        image: img01,
        bgColor: "bg-yellow-500",
        tag1: "Automation",
        tag2: "UI Path",
        tag3: "Power Bi",
        challenges: [
        {
            title: "Repetitive Manual Tasks",
            description:
            "Employees spent an average of 12 hours per week on manual, data entry and reporting.",
        },
        {
            title: "Disconnected Systems",
            description:
            "Lack of integration between tools like CRM, HR/payroll, project management software (Asana), and custom data silos.",
        },
        {
            title: "Low Resource Utilization",
            description:
            "Resources were poorly allocated due to limited visibility into workloads, resulting in overutilization in some teams and underutilization in others.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Discovery and Analysis",
            points: [
                "Conducted a 3-week deep-dive audit of the company's workflows, interviewing team leaders, analyzing process bottlenecks, and mapping inefficiencies using Process Process Mapping.",
                "Identified key areas for automation, including invoice processing, project tracking, resource allocation, and report generation.",
            ],
            },
            {
            title: "Phase 2: Strategic Automation",
            points: [
                "Deployed UiPath to automate repetitive tasks like data entry, report generation, and payroll reconciliation.",
                "Implemented Zapier APIs to connect CRM, Asana, and HR/ERP, enabling seamless data flow between tools.",
                "Built real-time monitoring dashboards in Power BI, allowing managers to track workloads and resource utilization.",
            ],
            },
            {
            title: "Phase 3: Implementation and Training",
            points: [
                "Rolled out automation solutions to 140+ employees, scaling them to adapt to department variations.",
                "Provided a dedicated support team for 3 months post-implementation to troubleshoot, optimize, and refine automation workflows.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "40%",
            title: "Efficiency Gains",
            description:
            "Reduced Manual Task Completion Time By 40%, Saving 10,000+ Hours Annually Across Teams",
        },
        {
            value: "$750,000",
            title: "Cost Savings",
            description:
            "Saved $750,000 Annually By Eliminating Inefficiencies And Redistributing Resources Effectively",
        },
        {
            value: "25%",
            title: "Resource Optimization",
            description:
            "Improved Resource Utilization Rates By 25%, Enabling More Balanced Workloads Across Departments",
        },
        {
            value: "30%",
            title: "Efficiency Gains",
            description:
            "Reduced Burnout Indicators by 30%, As Teams Moved From Repetitive Tasks To Higher-Value Work",
        },
        ],
    },
    {
        id: "startup-feature",
        title: "How a SaaS startup feature tripled revenue by 285% in 6 months",
        subtitle: "Scaling Revenue Through Product Innovation",
        description:
        "A growing SaaS company with 50+ employees needed to accelerate growth and increase market share in a competitive landscape. Their existing feature set was solid but not driving the conversion rates needed for sustainable growth.",
        image: img02,
        bgColor: "bg-blue-500",
        tag1: "E-Commerce",
        tag2: "Dynamic Yield",
        tag3: "Klaviyo",
        challenges: [
        {
            title: "Stagnant Conversion Rates",
            description:
            "Despite strong traffic, the platform was experiencing a plateau in conversion rates at 2.3%.",
        },
        {
            title: "Feature Parity with Competitors",
            description:
            "The product had reached feature parity with competitors, making differentiation increasingly difficult.",
        },
        {
            title: "Limited Development Resources",
            description:
            "With only 12 developers, the company needed to prioritize high-impact features that could be built efficiently.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Market Research & Opportunity Analysis",
            points: [
                "Conducted in-depth user interviews with 50+ customers and 25+ prospects who didn't convert.",
                "Analyzed competitor offerings and identified key gaps in the market that aligned with customer needs.",
                "Prioritized feature opportunities based on potential impact, development effort, and strategic alignment.",
            ],
            },
            {
            title: "Phase 2: Feature Development & Testing",
            points: [
                "Developed an AI-powered analytics dashboard that provided actionable insights from customer data.",
                "Created a unique collaborative workflow tool that integrated with popular platforms like Slack and Microsoft Teams.",
                "Implemented a rapid prototyping and testing cycle with beta customers to refine the features.",
            ],
            },
            {
            title: "Phase 3: Go-to-Market Strategy",
            points: [
                "Designed a tiered pricing strategy that positioned the new features as premium offerings.",
                "Created targeted marketing campaigns highlighting the ROI of the new features for different customer segments.",
                "Implemented an account-based marketing approach for enterprise prospects.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "285%",
            title: "Revenue Growth",
            description:
            "Increased monthly recurring revenue by 285% within 6 months of launch",
        },
        {
            value: "4.8%",
            title: "Conversion Rate",
            description:
            "More than doubled conversion rate from 2.3% to 4.8% for prospects exposed to new features",
        },
        {
            value: "68%",
            title: "Upgrade Rate",
            description:
            "Achieved 68% upgrade rate from existing customers to plans including new features",
        },
        {
            value: "42%",
            title: "Competitive Wins",
            description:
            "Increased competitive win rate by 42% against primary market competitors",
        },
        ],
    },
    {
        id: "french-startup",
        title:
        "How a French startup achieved 30% cost savings with cloud infrastructure",
        subtitle: "Optimizing Cloud Infrastructure for Scalable Growth",
        description:
        "A rapidly growing French tech startup with 75 employees was experiencing skyrocketing cloud costs as they scaled. Their inefficient infrastructure was limiting growth and eating into profitability.",
        image: img03,
        bgColor: "bg-orange-500",
        tag1: "FinTech",
        tag2: "AWS",
        tag3: "Palo Alto Prisma",
        challenges: [
        {
            title: "Escalating Cloud Costs",
            description:
            "Monthly AWS bills had increased by 300% in 12 months without proportional growth in revenue.",
        },
        {
            title: "Performance Bottlenecks",
            description:
            "Application performance was degrading during peak usage, affecting user experience.",
        },
        {
            title: "Limited DevOps Expertise",
            description:
            "The team lacked specialized cloud architecture expertise to optimize their infrastructure.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Infrastructure Audit",
            points: [
                "Conducted comprehensive audit of existing AWS infrastructure and resource utilization.",
                "Identified over-provisioned resources, inefficient database queries, and suboptimal architecture patterns.",
                "Created detailed cost allocation analysis by feature and customer segment.",
            ],
            },
            {
            title: "Phase 2: Architecture Optimization",
            points: [
                "Implemented serverless architecture for appropriate workloads using AWS Lambda.",
                "Optimized database performance through query optimization and appropriate instance sizing.",
                "Introduced auto-scaling policies based on actual usage patterns rather than static provisioning.",
            ],
            },
            {
            title: "Phase 3: Implementation & Knowledge Transfer",
            points: [
                "Executed changes with zero downtime through careful migration planning.",
                "Implemented comprehensive monitoring and alerting for cost anomalies.",
                "Trained internal team on cloud cost optimization best practices and created documentation.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "30%",
            title: "Cost Reduction",
            description:
            "Reduced monthly cloud infrastructure costs by 30% while supporting 40% more users",
        },
        {
            value: "65%",
            title: "Performance Improvement",
            description:
            "Decreased average API response time by 65% during peak usage periods",
        },
        {
            value: "99.99%",
            title: "Uptime",
            description: "Improved system reliability from 99.9% to 99.99% uptime",
        },
        {
            value: "5x",
            title: "Scalability",
            description:
            "New architecture can handle 5x current load without proportional cost increases",
        },
        ],
    },
    {
        id: "digital-engagement",
        title:
        "Driving digital engagement and operational excellence for a tech leader",
        subtitle: "Transforming Customer Engagement Through Digital Innovation",
        description:
        "A leading technology company with global operations needed to revitalize their customer engagement strategy to combat increasing churn and declining satisfaction scores.",
        image: img04,
        bgColor: "bg-purple-500",
        tag1: "Technology",
        tag2: "Social Media",
        tag3: "Website",
        challenges: [
        {
            title: "Fragmented Customer Experience",
            description:
            "Customers were navigating multiple disconnected platforms for different services.",
        },
        {
            title: "Low Digital Adoption",
            description:
            "Only 34% of customers were regularly using digital self-service tools.",
        },
        {
            title: "Increasing Support Costs",
            description:
            "Customer support costs were rising at 15% annually due to inefficient processes.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Customer Journey Mapping",
            points: [
                "Mapped end-to-end customer journeys across all touchpoints and identified key pain points.",
                "Conducted usability testing with diverse customer segments to understand barriers to digital adoption.",
                "Benchmarked digital experience against industry leaders and identified opportunity areas.",
            ],
            },
            {
            title: "Phase 2: Digital Experience Transformation",
            points: [
                "Developed unified customer portal with single sign-on across all services.",
                "Implemented AI-powered chatbot for tier-1 support issues with 85% resolution rate.",
                "Created personalized in-app guidance based on customer behavior and preferences.",
            ],
            },
            {
            title: "Phase 3: Operational Excellence",
            points: [
                "Streamlined internal processes to reduce customer wait times by 60%.",
                "Implemented predictive analytics to identify at-risk customers before churn.",
                "Created closed-loop feedback system to continuously improve digital experience.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "45%",
            title: "Engagement Increase",
            description:
            "Increased digital platform engagement by 45% across all customer segments",
        },
        {
            value: "28%",
            title: "Cost Reduction",
            description:
            "Reduced customer support costs by 28% through increased self-service adoption",
        },
        {
            value: "18pt",
            title: "NPS Improvement",
            description: "Improved Net Promoter Score by 18 points from 32 to 50",
        },
        {
            value: "22%",
            title: "Churn Reduction",
            description:
            "Decreased customer churn by 22% through improved experience and proactive intervention",
        },
        ],
    },
    {
        id: "digital-transformation",
        title: "Retail's digital transformation: scaling a billion-point offering",
        subtitle: "Revolutionizing Retail Through Digital Transformation",
        description:
        "A major retail chain with 500+ locations needed to transform their digital capabilities to compete with e-commerce giants while leveraging their physical store presence as a competitive advantage.",
        image: img05,
        bgColor: "bg-indigo-500",
        tag1: "FinTech",
        tag2: "AI & ML",
        tag3: "Cloud Infrastructure",
        challenges: [
        {
            title: "Disconnected Channels",
            description:
            "Online and in-store experiences were completely separate with no integration.",
        },
        {
            title: "Legacy Technology",
            description:
            "Outdated systems were limiting innovation and creating data silos.",
        },
        {
            title: "E-commerce Competition",
            description:
            "Pure-play online retailers were capturing increasing market share.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Omnichannel Foundation",
            points: [
                "Implemented unified customer data platform connecting online and in-store interactions.",
                "Developed mobile app with in-store navigation, product scanning, and personalized recommendations.",
                "Created seamless inventory visibility across all channels.",
            ],
            },
            {
            title: "Phase 2: Experience Innovation",
            points: [
                "Launched buy-online-pickup-in-store (BOPIS) with dedicated parking and mobile notification.",
                "Implemented augmented reality product visualization for home goods category.",
                "Created in-store digital kiosks for endless aisle shopping and product customization.",
            ],
            },
            {
            title: "Phase 3: Data-Driven Optimization",
            points: [
                "Deployed AI-powered demand forecasting to optimize inventory across channels.",
                "Implemented personalized marketing automation based on unified customer profiles.",
                "Created real-time analytics dashboard for store managers to optimize operations.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "1B+",
            title: "Digital Touchpoints",
            description:
            "Created over 1 billion personalized digital customer interactions annually",
        },
        {
            value: "32%",
            title: "Digital Revenue Growth",
            description:
            "Increased digital-influenced revenue by 32% year-over-year",
        },
        {
            value: "24%",
            title: "Store Traffic Increase",
            description:
            "Boosted physical store traffic by 24% through digital engagement",
        },
        {
            value: "3.2x",
            title: "Customer Lifetime Value",
            description:
            "Omnichannel customers show 3.2x higher lifetime value than single-channel shoppers",
        },
        ],
    },
    {
        id: "dtc-brand",
        title: "Scaling a DTC brand's revenue 4X with AI-driven paid advertising",
        subtitle: "Accelerating Growth Through AI-Powered Marketing",
        description:
        "A direct-to-consumer (DTC) brand in the health and wellness space was struggling to scale beyond $2M in annual revenue with traditional marketing approaches.",
        image: img06,
        bgColor: "bg-gray-500",
        tag1: "DTC Marketing",
        tag2: "Paid Advertising",
        tag3: "Customer Acquisition",
        challenges: [
        {
            title: "Rising Acquisition Costs",
            description:
            "Customer acquisition costs had increased by 40% in 12 months on major platforms.",
        },
        {
            title: "Manual Campaign Management",
            description:
            "Marketing team was spending 30+ hours weekly on manual campaign adjustments.",
        },
        {
            title: "Limited Customer Insights",
            description:
            "Lack of clear understanding of highest-value customer segments and behaviors.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Data Foundation",
            points: [
                "Implemented comprehensive tracking across all customer touchpoints.",
                "Developed customer segmentation model based on purchase behavior and lifetime value.",
                "Created attribution model accounting for multi-touch customer journeys.",
            ],
            },
            {
            title: "Phase 2: AI-Powered Advertising",
            points: [
                "Deployed machine learning algorithms to optimize ad spend across platforms.",
                "Created dynamic creative testing framework with automated performance analysis.",
                "Implemented predictive bidding based on conversion probability and customer value.",
            ],
            },
            {
            title: "Phase 3: Scaling & Optimization",
            points: [
                "Expanded to new advertising channels with automated budget allocation.",
                "Implemented automated audience creation based on high-performing customer segments.",
                "Developed custom reporting dashboard for real-time performance monitoring.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "400%",
            title: "Revenue Growth",
            description: "Scaled annual revenue from $2M to $8M within 9 months",
        },
        {
            value: "32%",
            title: "CAC Reduction",
            description:
            "Reduced customer acquisition costs by 32% while scaling spend by 250%",
        },
        {
            value: "85%",
            title: "Time Savings",
            description:
            "Reduced campaign management time by 85% through automation",
        },
        {
            value: "3.8x",
            title: "ROAS Improvement",
            description:
            "Increased return on ad spend from 2.1x to 3.8x across all channels",
        },
        ],
    },
    {
        id: "fitness-platforms",
        title: "Transforming fitness platforms with data-powered nutrition",
        subtitle: "Revolutionizing Digital Fitness Through Personalized Nutrition",
        description:
        "A leading fitness technology company needed to expand beyond workout content to compete with holistic wellness platforms and reduce subscriber churn.",
        image: img07,
        bgColor: "bg-pink-500",
        tag1: "Cloud Storage",
        tag2: "AWS S3 Solution",
        tag3: "Security & Compliance",
        challenges: [
        {
            title: "High Subscriber Churn",
            description:
            "Monthly churn rate of 8.5% was threatening sustainable growth.",
        },
        {
            title: "Limited Offering",
            description:
            "Platform focused solely on workouts while competitors offered comprehensive wellness solutions.",
        },
        {
            title: "Engagement Plateau",
            description:
            "User engagement metrics had plateaued with average weekly sessions declining.",
        },
        ],
        solution: {
        phases: [
            {
            title: "Phase 1: Nutrition Intelligence Platform",
            points: [
                "Developed AI-powered nutrition recommendation engine based on user goals and preferences.",
                "Created personalized meal planning functionality integrated with grocery delivery services.",
                "Implemented visual food logging with automatic nutritional analysis.",
            ],
            },
            {
            title: "Phase 2: Integrated Wellness Experience",
            points: [
                "Connected nutrition and fitness data to provide holistic progress tracking.",
                "Developed smart workout recommendations based on nutritional intake and recovery metrics.",
                "Created community features for recipe sharing and nutrition challenges.",
            ],
            },
            {
            title: "Phase 3: Engagement Optimization",
            points: [
                "Implemented behavioral science-based notification system to drive consistent usage.",
                "Created gamification elements to reward healthy nutrition and exercise habits.",
                "Developed premium coaching tier with personalized nutrition consultation.",
            ],
            },
        ],
        },
        outcomes: [
        {
            value: "75%",
            title: "Retention Improvement",
            description:
            "Reduced monthly churn from 8.5% to 2.1%, increasing user retention by 75%",
        },
        {
            value: "3.2x",
            title: "Engagement Increase",
            description:
            "Increased average weekly platform sessions from 2.3 to 7.4 per user",
        },
        {
            value: "42%",
            title: "Revenue Growth",
            description:
            "Grew monthly recurring revenue by 42% through reduced churn and premium tier adoption",
        },
        {
            value: "68%",
            title: "User Satisfaction",
            description:
            "Improved user satisfaction scores by 68% based on in-app feedback",
        },
        ],
    },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.id === id);
}

export function getValidCaseStudyIds(): string[] {
    return caseStudies.map((study) => study.id);
}
