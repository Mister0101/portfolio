// ============================================================
// CENTRAL PORTFOLIO DATA — edit this file to update the site.
// Every section reads from here. To add a project/certification/
// role, add an object to the relevant array. No other code changes
// needed.
//
// Placeholders: fields set to `null` render a visible "to be added"
// state on the site instead of inventing information.
// ============================================================

export const profile = {
  name: "Ilya Daniliuk",
  fullName: "Ilya (Eli) Daniliuk",
  headline: "Business Development × Technology × Cloud",
  valueProposition:
    "Software Development & Data Analysis graduate (AUT) who pairs hands-on cloud and full-stack engineering with 3+ years of frontline operations and team leadership. Equally comfortable in a sprint review and a customer conversation.",
  location: "Glen Innes, Auckland, New Zealand",
  email: "Ilyadaniliuknz@gmail.com",
  linkedin: "https://www.linkedin.com/in/ilyadaniliuk",
  github: "https://github.com/Mister0101",
  cvPath: "/Ilya-Daniliuk-CV.pdf",
  targetRoles: [
    "Business Development Manager — Technology",
    "IT / Cloud / Cybersecurity Sales",
    "Technology Account Manager",
    "SaaS Business Development",
    "Technology Partnerships",
    "Business-facing Cloud & AI roles",
  ],
  stats: [
    { value: "10+", label: "Team members led per shift" },
    { value: "3+", label: "Years in operations leadership" },
    { value: "5", label: "Certifications & course completions" },
    { value: "3", label: "Cloud & software builds delivered" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a Software Development & Data Analysis graduate from AUT who has spent the last three-plus years leading teams and running operations in one of the fastest-paced customer environments there is — a busy restaurant in Auckland. Managing shifts of 10+ people, daily financial entries, inventory audits and customer escalations taught me how businesses actually run: targets, systems, people and pressure.",
    "Alongside that, I've built real technology — leading an Agile team delivering a cloud-integrated IoT automation platform on AWS, shipping a live stock management system, and certifying across GitHub, AWS cloud fundamentals, Python and data science. That combination of commercial instinct and hands-on technical credibility is exactly what business development, technology sales and account management roles in cloud and SaaS demand.",
  ],
};

export const expertise = [
  {
    id: "commercial",
    icon: "Briefcase",
    title: "Commercial & Customer-Facing",
    points: [
      "Team leadership & coaching — shifts of up to 10+ staff",
      "Customer escalation handling, retention & satisfaction",
      "Daily financial entries & store management systems",
      "Service quality and sales-floor operations",
      "Clear stakeholder communication under pressure",
    ],
  },
  {
    id: "technology",
    icon: "Cloud",
    title: "Technology & Cloud",
    points: [
      "React, Next.js, JavaScript & TypeScript",
      "AWS — Cognito, Amplify, DynamoDB",
      "Python, SQL & relational databases",
      "REST APIs & system architecture",
      "Git, Vercel, Supabase, Agile/Kanban delivery",
      "Data analysis & visualisation (R, Python)",
    ],
  },
  {
    id: "delivery",
    icon: "TrendingUp",
    title: "Delivery & Problem Solving",
    points: [
      "Agile team leadership & sprint planning",
      "Cloud-automated workflow design (IoT)",
      "Inventory, compliance & operational controls",
      "Calm, structured problem-solving under pressure",
      "Statistical analysis & hypothesis testing",
    ],
  },
];

export const projects = [
  {
    id: "iot-automation-platform",
    name: "Industry IoT Automation Platform",
    context: "AUT Industry Project",
    role: "Team Lead & Frontend Developer",
    summary:
      "Cloud-integrated platform that automates IoT workflows for a business application.",
    problem:
      "Businesses needed a way to design and automate IoT workflows without manual, error-prone intervention across connected devices.",
    built:
      "Led a full-stack engineering team in a Kanban environment to design and deliver the platform. Architected the user-facing interfaces in React and integrated cloud infrastructure using AWS Cognito, Amplify and DynamoDB. Directed feature development, sprint planning and collaborative problem-solving through to a fully functional, cloud-automated prototype.",
    keyFunctionality: [
      "IoT workflow design and automation",
      "User authentication via AWS Cognito",
      "Cloud data persistence with DynamoDB",
      "React front-end deployed through AWS Amplify",
      "Kanban-driven sprint delivery",
    ],
    demonstrates:
      "Technical leadership of an engineering team, cloud architecture on AWS, and end-to-end delivery of a working business product.",
    tech: ["React", "AWS Cognito", "AWS Amplify", "DynamoDB", "Agile / Kanban"],
    accent: "#3B82F6",
    // TODO: drop a project screenshot into /public/projects/ and set the path here
    screenshot: null,
    // TODO: add the GitHub repository URL for this project
    repo: null,
    // TODO: add the live demo URL when ready
    demo: null,
  },
  {
    id: "stock-management-system",
    name: "Stock Management System",
    context: "Live Application",
    role: "Developer",
    summary:
      "Deployed web system for real-time inventory tracking, used in a live environment.",
    problem:
      "Manual stock tracking is slow and error-prone — the operation needed live, reliable inventory data with safe, validated inputs.",
    built:
      "Built and deployed a dynamic web system handling real-time inventory tracking, user inputs, form validation and database operations end to end.",
    keyFunctionality: [
      "Real-time inventory tracking",
      "Validated user input forms",
      "Full database CRUD operations",
      "Deployed live on Vercel with a Supabase-backed SQL database",
    ],
    demonstrates:
      "Shipping and operating a real product — deployment, data integrity and maintainable full-stack development.",
    tech: ["React", "SQL Database", "Supabase", "Vercel"],
    accent: "#10B981",
    // TODO: drop a project screenshot into /public/projects/ and set the path here
    screenshot: null,
    // TODO: add the GitHub repository URL for this project
    repo: null,
    // TODO: add the live demo URL when ready
    demo: null,
  },
  {
    id: "data-analysis-visualisation",
    name: "Data Analysis & Visualisation Projects",
    context: "AUT — Data Analysis Major",
    role: "Data Analyst",
    summary:
      "Statistical analysis and insight visualisation across real datasets in R and Python.",
    problem:
      "Dataset outcomes needed rigorous validation and clear visual communication of the insights they contained.",
    built:
      "Executed statistical analysis and hypothesis testing using R and Python to validate dataset outcomes and render insight visualisations. Implemented non-parametric analysis and Maximum Likelihood Estimation (MLE) models for computational problem-solving.",
    keyFunctionality: [
      "Hypothesis testing and statistical validation",
      "Non-parametric analysis",
      "Maximum Likelihood Estimation (MLE) models",
      "Insight visualisations in R and Python",
    ],
    demonstrates:
      "Analytical rigour and data storytelling — turning raw datasets into defensible, decision-ready insight.",
    tech: ["R", "Python", "Statistics", "Data Visualisation"],
    accent: "#F59E0B",
    // TODO: drop a project screenshot into /public/projects/ and set the path here
    screenshot: null,
    // TODO: add the GitHub repository URL for this project
    repo: null,
    demo: null,
  },
];

export const certifications = [
  {
    group: "Professional Certification",
    note: null,
    items: [
      {
        name: "GitHub Foundations",
        issuer: "GitHub (via Microsoft)",
        issued: "Aug 2026",
        expires: "Aug 2028",
        credentialId: "43A71C9820BC3247",
        certificationNumber: "A598B9-D01CEW",
        skills: ["Git & GitHub", "Collaboration", "CI/CD fundamentals", "Repository management"],
        // TODO: add the public credential verification URL
        verifyUrl: null,
      },
    ],
  },
  {
    group: "Course Completions — Udemy",
    note: "Course completion certificates — structured exam preparation and skills training, distinct from the proctored certification above.",
    items: [
      {
        name: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
        issuer: "Udemy",
        issued: "2026",
        detail: "Exam preparation for the AWS Certified Cloud Practitioner (CLF-C02)",
        skills: ["AWS cloud fundamentals", "Cloud economics", "Security & compliance"],
        verifyUrl: null,
      },
      {
        name: "GH-900: GitHub Foundations Exam Preparation",
        issuer: "Udemy",
        issued: "Aug 2026",
        detail: "5 hours — instructors Ankit Mistry, Ajay Gadhave, Pooja Gadhave",
        skills: ["GitHub platform", "Exam preparation"],
        verifyUrl: null,
      },
      {
        name: "Python for Data Science and Machine Learning Bootcamp",
        issuer: "Udemy",
        issued: "Aug 2026",
        detail: "25 hours — instructors Jose Portilla, Pierian Training",
        skills: ["Python", "Data science", "Machine learning"],
        verifyUrl: null,
      },
      {
        name: "Introduction to Python Programming",
        issuer: "Udemy",
        issued: "2026",
        detail: null,
        skills: ["Python fundamentals"],
        verifyUrl: null,
      },
    ],
  },
];

export const experience = [
  {
    type: "Work",
    company: "KFC Restaurant",
    location: "Auckland",
    position: "Shift Supervisor",
    dates: "Oct 2022 — Present",
    points: [
      "Lead, train and motivate shift teams of up to 10+ staff, maintaining high productivity and service quality in a fast-paced environment.",
      "Execute daily financial entries into store management systems, audit inventory controls, and ensure strict compliance with health, safety and operational standards.",
      "Handle customer escalations and operational bottlenecks calmly, protecting customer retention and satisfaction.",
    ],
  },
  {
    type: "Education",
    company: "Auckland University of Technology (AUT)",
    location: "Auckland",
    position: "Bachelor of Computer and Information Sciences",
    dates: "Graduated 30 June 2026",
    points: [
      "Major: Software Development & Data Analysis.",
      "Led full-stack Agile project teams building real-world cloud solutions with React and AWS.",
      "Completed while working as a shift supervisor to fund the degree.",
    ],
  },
  {
    type: "Volunteer",
    company: "Youth Camp",
    location: null,
    position: "Youth Camp Instructor",
    dates: "2021",
    points: [
      "Supervised groups of children, coordinated daily events and activities, and managed health & safety emergency protocols.",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
