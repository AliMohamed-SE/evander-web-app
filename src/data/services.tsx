import {
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconWorldWww,
  IconBrandFigma,
  IconRocket,
  IconUsers,
  IconBrain,
} from "@tabler/icons-react";

export const services = [
  {
    type: "Graphic Design",
    values: [
      "Logo/Brand Identity",
      "UI/UX Design",
      "Animations",
      "Video Montages",
      "Advertisement Material",
      "Motion Graphics",
    ],
  },
  {
    type: "Software Solution",
    values: [
      "Web Development",
      "Mobile Development",
      "API Development",
      "E-commerce Solutions",
      "Maintenance & Support",
      "SEO Optimization",
      "AI Solutions",
    ],
  },
  {
    type: "Full Package",
    values: ["Full Package"],
  },
];

export const serviceDetails = [
  {
    title: "Custom Software Development",
    description:
      "Scalable, full-stack web applications tailored to your business goals — from idea to launch.",
    icon: <IconCode />,
    category: "development",
    details: {
      overview:
        "We build full-stack, scalable web applications tailored to your exact business needs. Whether it's a customer-facing product or internal automation tool, we architect systems that grow with you.",
      includes: [
        "Requirement gathering & technical planning",
        "Frontend & backend development",
        "API development & integration",
        "Authentication and user roles",
        "Testing & deployment",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Docker"],
      timeline: "4–12 weeks (depending on scope)",
      addons: ["Ongoing maintenance", "Admin dashboard", "API documentation"],
    },
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Intelligent systems powered by machine learning and generative AI — from chatbots to automation and personalized experiences.",
    icon: <IconBrain />,
    category: "development",
    details: {
      overview:
        "We integrate AI into your business to enhance automation, personalization, and productivity. Ideal for startups or teams building smart, competitive solutions.",
      includes: [
        "AI-powered chatbots and assistants",
        "Generative AI tools for text or image",
        "Recommendation engines",
        "Custom ML model deployment",
        "Data-driven decision-making features",
      ],
      technologies: [
        "OpenAI API",
        "Python",
        "TensorFlow",
        "Firebase ML",
        "LangChain",
      ],
      timeline: "2–8 weeks (depending on complexity)",
      addons: [
        "Data collection strategy",
        "Prompt engineering",
        "Dashboard integration",
      ],
    },
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS & Android that deliver smooth, intuitive user experiences.",
    icon: <IconDeviceMobile />,
    category: "development",
    details: {
      overview:
        "We design and build responsive mobile apps using modern frameworks like React Native or Flutter. Whether you're launching a product or digitizing a service, we bring it to users’ fingertips.",
      includes: [
        "UI/UX mobile design",
        "Cross-platform or native development",
        "Backend + API integration",
        "App Store & Google Play deployment",
        "Push notifications & analytics",
      ],
      technologies: ["React Native", "Flutter", "Firebase", "Expo", "Supabase"],
      timeline: "4–10 weeks",
      addons: ["App maintenance", "Analytics dashboard", "Admin panel"],
    },
  },
  {
    title: "Web Design & Development",
    description:
      "High-performance websites that are responsive, fast, and built to impress — beautifully designed and technically sound.",
    icon: <IconWorldWww />,
    category: "development",
    details: {
      overview:
        "We design and develop beautiful, responsive websites with strong foundations in SEO and performance. Perfect for businesses, portfolios, and marketing campaigns.",
      includes: [
        "Custom UI/UX design",
        "CMS integration (if needed)",
        "On-page SEO optimization",
        "Performance & accessibility optimization",
        "Contact forms, chat, and integrations",
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Netlify"],
      timeline: "1–4 weeks",
      addons: ["Hosting setup", "Blog section", "SEO reports"],
    },
  },
  {
    title: "Brand Identity Design",
    description:
      "Distinctive logos, color palettes, and branding assets that give your business a powerful visual presence.",
    icon: <IconPalette />,
    category: "design",
    details: {
      overview:
        "We craft unique visual identities that capture your brand's personality and resonate with your audience.",
      includes: [
        "Logo design (primary + variants)",
        "Typography and color palette",
        "Social media and business card mockups",
        "Brand usage guidelines",
      ],
      technologies: ["Figma", "Illustrator", "Photoshop"],
      timeline: "1–3 weeks",
      addons: ["Packaging design", "Slide deck templates", "Print-ready files"],
    },
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive, user-centered interfaces that delight your users and drive better engagement and conversions.",
    icon: <IconBrandFigma />,
    category: "design",
    details: {
      overview:
        "We design user interfaces that are functional, beautiful, and optimized for engagement. Great UX means better retention and conversion.",
      includes: [
        "User flow mapping",
        "Wireframes and interactive prototypes",
        "Responsive layout design",
        "Design handoff to developers",
        "Accessibility best practices",
      ],
      technologies: ["Figma", "Adobe XD", "Lottie", "Framer"],
      timeline: "2–4 weeks",
      addons: ["Design system", "UI kit", "Usability testing"],
    },
  },
  {
    title: "Product Strategy",
    description:
      "Roadmaps, MVP planning, and feature prioritization that turn your ideas into successful digital products.",
    icon: <IconRocket />,
    category: "strategy",
    details: {
      overview:
        "We help you shape your vision into an actionable plan with clear milestones, technical feasibility, and user-first design thinking.",
      includes: [
        "MVP scoping",
        "Feature prioritization matrix",
        "User journey mapping",
        "Competitive analysis",
        "Go-to-market prep",
      ],
      technologies: ["Miro", "Notion", "Figma", "Trello"],
      timeline: "1–2 weeks",
      addons: [
        "Pitch deck design",
        "Investor-ready roadmap",
        "Prototype presentation",
      ],
    },
  },
  {
    title: "Team Collaboration & Agile Support",
    description:
      "Transparent communication, agile delivery, and a collaborative approach that keeps you in the loop at every stage.",
    icon: <IconUsers />,
    category: "strategy",
    details: {
      overview:
        "We work as an extension of your team, providing regular updates, iterations, and retrospectives — so you’re never left in the dark.",
      includes: [
        "Weekly standups and sprint planning",
        "Progress reports and demos",
        "Backlog grooming & scope management",
        "Slack/Email/Notion integration",
      ],
      technologies: ["Slack", "Jira", "Notion", "ClickUp"],
      timeline: "Ongoing / integrated into project",
      addons: [
        "Dedicated project manager",
        "Daily reporting",
        "Client portal access",
      ],
    },
  },
];
