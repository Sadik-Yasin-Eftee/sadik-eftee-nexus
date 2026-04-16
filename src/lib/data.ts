export const profile = {
  name: "Sadik Yasin Eftee",
  title: "Researcher & Product Engineer",
  tagline: "MS in CSE · NLP · HCI · AI",
  bio: "MS student in Computer Science at Islamic University of Technology (IUT), with research focus on Natural Language Processing and Human-Computer Interaction. Bridging academic research with real-world product impact as Junior Product Manager at ShopUp.",
  location: "Dhaka-1229, Bangladesh",
  email: "sadikyasineftee@gmail.com",
  phone: "+880 1913-718717",
  github: "https://github.com/Sadik-Yasin-Eftee",
  linkedin: "https://linkedin.com/in/sadik-yasin",
  scholar: "https://scholar.google.com/citations?user=oZahYhMAAAAJ",
  portfolio: "https://sadikyasineftee.vercel.app",
  photo: "/lovable-uploads/profile-hero.png",
  photoAlt: "/lovable-uploads/3dad034d-aea3-42eb-b907-76a133a18fb1.png",
  interests: ["Natural Language Processing", "Human-Computer Interaction", "Artificial Intelligence", "Machine Learning", "Robotics", "Software Engineering"],
  stats: [
    { label: "Publications", value: "3" },
    { label: "BS GPA", value: "3.63" },
    { label: "Years Industry", value: "2+" },
  ],
};

export const education = [
  {
    degree: "Master of Science in Computer Science Engineering",
    institution: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    period: "Nov 2025 – Present",
    gpa: null,
    status: "ongoing",
    description: "Focusing on Human-Centered AI systems and NLP.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Islamic University of Technology (IUT)",
    location: "Gazipur, Bangladesh",
    period: "Jan 2020 – Jun 2024",
    gpa: "3.63 / 4.00",
    status: "completed",
    description: "Undergraduate thesis on Few-Shot Learning for App Review Analysis.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Rajuk Uttara Model College",
    location: "Dhaka, Bangladesh",
    period: "Jun 2017 – Jul 2019",
    gpa: "5.00 / 5.00",
    status: "completed",
    description: null,
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Rajuk Uttara Model College",
    location: "Dhaka, Bangladesh",
    period: "Jan 2015 – May 2017",
    gpa: "5.00 / 5.00",
    status: "completed",
    description: null,
  },
];

export const publications = [
  {
    title: "AI Tools in Education: Investigating University Students' Motivations, Institutional Policies, and Ethical Considerations in Bangladesh",
    venue: "37th Australian Conference on Human-Computer Interaction (OzCHI 2025)",
    year: "2025",
    type: "Conference Paper",
    status: "Published",
    doi: "https://doi.org/10.1145/3764687.3769951",
  },
  {
    title: "Evaluating the Effectiveness of Large Language Models in Multi-Document Summarization of Bangla News Articles",
    venue: "International Conference on Data Science, AI and Applications",
    year: "2025",
    type: "Conference Paper",
    status: "Published",
    doi: "https://doi.org/10.1007/978-3-032-11352-8_21",
  },
  {
    title: "Extraction of App Problems & Its Corresponding User Actions from App Reviews Using Few-Shot Learning",
    venue: "SSRN Preprint",
    year: "2025",
    type: "Preprint",
    status: "Preprint",
    doi: "https://doi.org/10.2139/ssrn.5093717",
  },
];

export const research = [
  {
    title: "Human-Centered AI for Driver Drowsiness Detection: Design and Prototype Development",
    type: "Masters Project",
    status: "Ongoing",
    period: "2025 – Present",
    supervisors: ["Prof. Hasan Mahmud"],
    description: "Designing a Human-Centered AI-based driver drowsiness detection system using facial landmark analysis for real-time fatigue monitoring and alerts. Developing a persona-driven, multi-interface prototype with bilingual support and on-device processing to enhance usability, safety, and user trust.",
    keywords: ["HCI", "AI", "Drowsiness Detection", "Facial Landmarks", "Prototype"],
  },
  {
    title: "Extraction of App Problems & Its Corresponding User Actions from App Reviews Using Few-Shot Learning",
    type: "Undergraduate Thesis",
    status: "Completed",
    period: "May 2023 – Jun 2024",
    supervisors: ["Prof. Hasan Mahmud", "Prof. Md. Kamrul Hasan"],
    description: "Utilized GPT-3.5 Turbo to extract app issues from curated reviews using filtering and few-shot learning. Developed a custom dataset to evaluate fine-tuned LLM performance on app review analysis.",
    keywords: ["NLP", "Few-Shot Learning", "LLM", "GPT-3.5", "App Reviews"],
  },
  {
    title: "Exploring Open-Source JavaScript Libraries: A Longitudinal Study On Repository Health & Code Quality",
    type: "Undergraduate Project",
    status: "Completed",
    period: "Oct – Dec 2023",
    supervisors: ["Md. Jubair Ibna Mostafa"],
    description: "Analyzed JavaScript libraries (React, Svelte, Vue) for repository health, code quality, and technical debt. Provided insights to enhance project efficiency and longevity.",
    keywords: ["Software Engineering", "Code Quality", "Open Source", "Technical Debt"],
  },
];

export const experience = [
  {
    role: "Junior Product Manager",
    company: "ShopUp",
    period: "Aug 2025 – Present",
    type: "Full-time",
    bullets: [
      "Built an operations dashboard for the 4PL business, enabling real-time SLA, delivery status, exception, and partner performance tracking.",
      "Owned end-to-end design and rollout of a 4PL product, improving SLA performance by 5–7% through standardized workflows.",
      "Launched new logistics flows for sensitive document delivery (banking & insurance) with Proof of Delivery (POD) verification.",
      "Decentralized 3PL network via Regional Mother Hubs (RMH), achieving ~BDT 10 Lakhs in monthly cost savings.",
      "Introduced SOPs for Lost & Damage management, improving accountability and operational traceability.",
    ],
  },
  {
    role: "Product Intern",
    company: "ShopUp",
    period: "May – Aug 2025",
    type: "Internship",
    bullets: [
      "Launched automated SIM & scratch card fulfillment flow, improving delivery efficiency by 15% and generating BDT 1.5–2 Lakh/month in additional revenue.",
      "Automated the reverse pickup flow, reducing TAT by 40% and improving merchant experience.",
      "Designed a weight-based rider commission system for 2,000+ riders, improving pay fairness.",
      "Built Metabase dashboards monitoring 15,000+ daily parcel KPIs; reduced payroll processing TAT by ~80%.",
    ],
  },
  {
    role: "Machine Learning Engineering Intern",
    company: "Grameen Communications",
    period: "Jun – Sep 2023",
    type: "Internship",
    bullets: [
      "Developed and deployed chatbots for real-time user interaction, improving customer query response time by 30%.",
      "Contributed to a boosting-based credit scoring model, improving credit approval accuracy by 20%.",
      "Optimized chatbot performance through data collection and analysis, increasing user engagement by 25%.",
      "Prepared demographic data for 5,000+ clients, supporting microfinance loan decisions for 2,000+ borrowers.",
    ],
  },
];

export const projects = [
  {
    title: "Fake News Detection",
    category: "Machine Learning",
    description: "ML model classifying news articles as real or fake using TF-IDF and frequency analysis with data preprocessing and feature extraction.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "NLP"],
    github: "https://github.com/Sadik-Yasin-Eftee",
  },
  {
    title: "CourSohelic: OBE System",
    category: "Web Application",
    description: "Web app automating Program Outcome (PO) and Course Outcome (CO) calculations for educational institutions under the OBE framework, with multi-panel interfaces.",
    tech: ["Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Sadik-Yasin-Eftee",
  },
  {
    title: "Andromeda: Astronomy Club",
    category: "Web Application",
    description: "Comprehensive website for IUT Astronomy Club with real-time news sharing, community marketplace for accessories, and a knowledge quizzing system.",
    tech: ["Django", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Sadik-Yasin-Eftee",
  },
  {
    title: "Tic Tac Toe with AI",
    category: "Game Application",
    description: "Tic Tac Toe game with AI modes (Random & Defensive) and three visual themes: Classic, Forest, and High Contrast.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/Sadik-Yasin-Eftee",
  },
];

export const skills = [
  { category: "Programming", items: ["Python", "C/C++", "Java", "JavaScript", "SQL"] },
  { category: "ML / Data", items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"] },
  { category: "Web", items: ["Django", "Node.js", "Express", "HTML", "CSS"] },
  { category: "Databases", items: ["MongoDB", "SQLite"] },
  { category: "Tools", items: ["Git", "GitHub", "Jira", "Metabase", "JMeter", "Selenium", "LaTeX"] },
];

export const activities = [
  { org: "IUT Computer Society (IUTCS)", role: "Junior Web Developer", period: "2020 – 2021" },
  { org: "IUT Debating Society (IUTDS)", role: "Junior Member", period: "2020" },
];

export const achievements = [
  { title: "Robi Datathon 3.0", result: "193rd / 3,500+ teams", year: "2024" },
  { title: "Orange Corners Ideation Challenge", result: "Stage 2", year: "2023" },
  { title: "IUT Novice Debate Competition", result: "Semifinalist", year: "2020" },
  { title: "Rajuk College Cricket — Senior Level", result: "Runner-Up", year: "2018" },
  { title: "Rajuk College Cricket — Junior Level", result: "Champion", year: "2014" },
];
