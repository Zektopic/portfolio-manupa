export const experienceData = [
  {
    id: 1,
    slug: "sitecore",
    company: "Sitecore",
    logo: "/logos/sitecore.svg",
    position: "Cloud Infrastructure Engineer",
    type: "Full-time",
    duration: "Feb 2025 - Present · 1 yr 3 mos",
    location: "Sri Lanka · Remote",
    summary: "Managing and scaling cloud infrastructure on Microsoft Azure using Terraform, Kubernetes, and modern IaC practices for a global digital experience platform.",
    domains: ["cloud"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform" },
      { name: "Microsoft Azure", logo: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
    ],
    projectImages: [
      "/images/experience/sitecore-1.svg",
      "/images/experience/sitecore-2.svg",
      "/images/experience/sitecore-3.svg",
    ],
    skills: ["Terraform", "Microsoft Azure", "+12 skills"]
  },
  {
    id: 2,
    slug: "igt1-lanka",
    company: "IGT1 Lanka",
    logo: "/logos/igt1.svg",
    position: "Cloud Infrastructure Engineer",
    type: "Full-time",
    duration: "Feb 2025 - Present · 1 yr 3 mos",
    location: "Colombo, Western Province, Sri Lanka · Hybrid",
    summary: "Building and maintaining hybrid cloud infrastructure, managing deployments, and ensuring high availability for enterprise systems.",
    domains: ["cloud"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Microsoft Azure", logo: "https://cdn.simpleicons.org/microsoftazure" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux" },
    ],
    projectImages: [
      "/images/experience/igt1-lanka-1.svg",
      "/images/experience/igt1-lanka-2.svg",
      "/images/experience/igt1-lanka-3.svg",
    ],
    skills: ["Microsoft Azure", "Kubernetes", "+10 skills"]
  },
  {
    id: 3,
    slug: "mirai-lk",
    company: "Mirai.lk",
    logo: "/logos/mirai.svg",
    position: "Co-Founder",
    type: "Self-employed",
    duration: "Nov 2025 - Present · 6 mos",
    location: "Western Province, Sri Lanka",
    summary: "Co-founded an electronics store serving makers, students, and engineers in Sri Lanka, with an online web store for sales and order management.",
    domains: ["business"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
    ],
    projectImages: [
      "/images/experience/mirai-lk-1.svg",
      "/images/experience/mirai-lk-2.svg",
      "/images/experience/mirai-lk-3.svg",
    ],
    description: [
      "Co-founded Mirai.lk, an electronics store offering components and modules for makers, students, and engineers in Sri Lanka.",
      "Built and maintained the online web store for sales and order management."
    ],
    skills: ["Entrepreneurship", "E-Commerce", "Electronics"]
  },
  {
    id: 4,
    slug: "renewaa-energy",
    company: "Renewaa Energy",
    logo: "/logos/renewaa.svg",
    position: "Electronic Engineer",
    type: "Part-time",
    duration: "Dec 2024 - Jan 2026 · 1 yr 2 mos",
    location: "Ja-ela, Western Province, Sri Lanka · On-site",
    summary: "Dual-role spanning embedded hardware engineering (BMS, CAN, EVs) and cloud DevOps (AWS, GitOps, CI/CD pipelines), cutting deployment times from hours to minutes.",
    domains: ["cloud", "embedded"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      { name: "Espressif", logo: "https://cdn.simpleicons.org/espressif" },
      { name: "STM32", logo: "https://cdn.simpleicons.org/stmicroelectronics" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
      { name: "KiCAD", logo: "https://cdn.simpleicons.org/kicad" },
    ],
    projectImages: [
      "/images/experience/renewaa-energy-1.svg",
      "/images/experience/renewaa-energy-2.svg",
      "/images/experience/renewaa-energy-3.svg",
    ],
    description: [
      "Engineered robust firmware for Battery Management System (BMS) dataloggers and automotive CAN bridges for Electric Vehicles (EVs).",
      "Programmed ESP32 and STM32 microcontrollers for diverse automotive applications, and contributed to hardware/software integration of an AI-powered autonomous vehicle project.",
      "Designed and integrated a custom Uninterruptible Power Supply (UPS), featuring in-house developed inverters and BMS PCBs.",
      "Built dedicated automated CI/CD pipelines for compiling and releasing firmware binaries.",
      "Architected fully autonomous deployment pipelines for production-grade inventory systems and corporate websites, slashing deployment time from 3 hours to under 10 minutes.",
      "Spearheaded a modern GitOps infrastructure approach, implementing advanced AI-assisted GitOps pipelines using Jules.",
      "Designed and provisioned scalable, highly available cloud architecture on AWS using EC2.",
      "Developed backend code for internal inventory management and secured third-party integrations by building custom APIs and implementing self-signed SSL certificates."
    ],
    skills: ["Artificial Intelligence (AI)", "C++", "+11 skills"]
  },
  {
    id: 5,
    slug: "kdu-instructor",
    company: "General Sir John Kotelawala Defence University",
    logo: "/logos/kdu.svg",
    position: "Instructor",
    type: "Part-time",
    duration: "Mar 2025 - May 2025 · 3 mos",
    summary: "Taught practical PCB design using KiCAD and conducted mock technical interviews for junior Electronics & Telecom Engineering undergraduates.",
    domains: ["embedded", "business"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "KiCAD", logo: "https://cdn.simpleicons.org/kicad" },
    ],
    projectImages: [
      "/images/experience/kdu-instructor-1.svg",
      "/images/experience/kdu-instructor-2.svg",
      "/images/experience/kdu-instructor-3.svg",
    ],
    description: [
      "Conducted practical PCB design sessions for junior undergraduate students using KiCAD.",
      "Facilitated mock technical interviews for Intake 39 Electronics and Telecommunication Engineering students."
    ],
    skills: ["KiCAD", "Electronics", "Teaching"]
  },
  {
    id: 6,
    slug: "azend-technologies",
    company: "Azend Technologies",
    logo: "/logos/azend.svg",
    position: "Embedded → DevOps Engineer",
    type: "Full-time",
    duration: "Feb 2024 - Feb 2025 · 1 yr 1 mo",
    location: "Colombo, Western Province, Sri Lanka · Hybrid",
    summary: "Progressed from embedded systems intern to associate DevOps engineer — building IoT sensors, CI/CD pipelines, and containerized deployments on AWS.",
    domains: ["cloud", "embedded", "business"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform" },
      { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions" },
      { name: "Espressif", logo: "https://cdn.simpleicons.org/espressif" },
    ],
    projectImages: [
      "/images/experience/azend-technologies-1.svg",
      "/images/experience/azend-technologies-2.svg",
      "/images/experience/azend-technologies-3.svg",
    ],
    positions: [
      {
        id: 61,
        title: "[Associate] DevOps Engineer",
        type: "Full-time",
        duration: "Jan 2025 - Feb 2025 · 2 mos",
        location: "Colombo, Western Province, Sri Lanka · Hybrid",
        description: [
          "Developed Jenkins pipelines to deploy EC2 instances using Terraform and created application pipelines for govi.ai using Jenkins, GitHub, Node.js, Linux, and AWS.",
          "Managed containerized instances in GitHub Registry and AWS ECR, testing product deployment feasibility on EKS and clusters.",
          "Automated Docker Build Processes using GitHub Actions.",
          "Implemented SecOps practices, increasing security and reducing attack areas.",
          "Reduced user interactions by 80% and cut deployment times to 20–30 minutes through pipeline automation."
        ],
        skills: ["Terraform", "DevOps", "+13 skills"]
      },
      {
        id: 62,
        title: "[Associate] Embedded System Engineer / Associate DevOps Engineer",
        type: "Contract",
        duration: "Jul 2024 - Jan 2025 · 7 mos",
        location: "Narahenpita, Colombo · Hybrid",
        description: [
          "Developed and maintained embedded firmware and DevOps pipelines concurrently.",
          "Contributed to containerization, AWS deployments, and firmware development for IoT sensors."
        ],
        skills: ["DevOps", "C++", "+10 skills"]
      },
      {
        id: 63,
        title: "[Intern] Embedded Systems Engineer",
        type: "Internship",
        duration: "Feb 2024 - Jul 2024 · 6 mos",
        location: "Colombo, Western Province, Sri Lanka · On-site",
        description: [
          "Research and Develop Agritech sensors, equipment and Machinery.",
          "Developed firmware for 32-bit Espressif MCUs using native C and custom C libraries.",
          "Prototyped ATMEGA-based sensors using ATMEGA SDK.",
          "Built Linux on MIPS32-based microprocessors using OpenWRT and implemented packages/services to run microservices.",
          "Designed and tested PCBs using KiCad.",
          "Created 3D mockups for sensors using Fusion 360.",
          "Developed firmware for ESP8266 using RTOS.",
          "Implemented communication protocols such as UART, I2C, ADC, and RS485.",
          "Developed device drivers for various peripherals.",
          "Involved in PCB prototyping, designing, manufacturing, and testing."
        ],
        businessDevelopment: [
          "Contributed to business development efforts by identifying and pursuing sales leads.",
          "Participated in marketing activities and brand promotion.",
          "Developed and delivered presentations to potential investors.",
          "Participated in events such as the BMICH Exhibition and SLASSCOM Video Promotion."
        ],
        skills: ["Communication", "ATMega", "+9 skills"]
      }
    ]
  },
  {
    id: 7,
    slug: "vega-innovations",
    company: "Vega Innovations",
    logo: "/logos/vega.svg",
    position: "[Intern] Embedded Systems Engineer",
    type: "Internship",
    duration: "Oct 2022 - May 2023 · 8 mos",
    location: "Colombo, Western Province, Sri Lanka · On-site",
    summary: "Developed ESP32-based IoT dataloggers with MQTT, OTA, RS485, and CAN for BMS data transmission. Reverse-engineered RS485 communication protocols.",
    domains: ["embedded"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Espressif", logo: "https://cdn.simpleicons.org/espressif" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      { name: "MQTT", logo: "https://cdn.simpleicons.org/mqtt" },
    ],
    projectImages: [
      "/images/experience/vega-innovations-1.svg",
      "/images/experience/vega-innovations-2.svg",
      "/images/experience/vega-innovations-3.svg",
    ],
    description: [
      "Developed an ESP32-based IoT datalogger using ESP-IDF 4.4 with MQTT, OTA, RTC, SPIFFS, RS485, and CAN for BMS data transmission.",
      "Decrypted RS485 communication for a specific BMS brand.",
      "Designed and 3D-printed enclosures for various dataloggers."
    ],
    skills: ["C++", "STM32", "+13 skills"]
  },
  {
    id: 8,
    slug: "sasip-institute",
    company: "SASIP Institute",
    logo: "/logos/sasip.svg",
    position: "SAP Leader | Head of IT and Videography",
    type: "Full-time",
    duration: "Sep 2019 - Feb 2020 · 6 mos",
    location: "Nugegoda, Western Province, Sri Lanka",
    summary: "Led IT operations and videography for an educational institute, managing 1000+ students daily, teaching physics practicals, and digitizing class recordings.",
    domains: ["business"] as ("cloud" | "embedded" | "business")[],
    techStack: [
      { name: "Microsoft Excel", logo: "https://cdn.simpleicons.org/microsoftexcel" },
    ],
    projectImages: [
      "/images/experience/sasip-institute-1.svg",
      "/images/experience/sasip-institute-2.svg",
      "/images/experience/sasip-institute-3.svg",
    ],
    description: [
      "Organized recordings of each class session and digitally archived them.",
      "Proofread papers and designed all diagrams to Advanced Level standards.",
      "Translated question papers from Sinhala to English for weekly A/L model papers.",
      "Maintained the computers and hardware in the office.",
      "Taught required physics practicals for students.",
      "Maintained discipline of 1000+ students on a daily basis."
    ],
    skills: ["Communication", "Microsoft Excel", "+3 skills"]
  }
];
