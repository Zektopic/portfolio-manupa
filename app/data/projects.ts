export const projectsData: {
  title: string;
  duration?: string;
  associatedWith?: string;
  description: string;
  skills: string[];
  images?: string[];
  link?: string;
}[] = [
  {
    title: "K8s Network DaemonSet Scanner & Spidermap",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Designed a DaemonSet to continuously scan the network quality of every service and pod across a Kubernetes cluster. Generates a real-time spidermap for visualizing service topology and debugging connectivity, latency, and health of services from the internet.",
    skills: ["Kubernetes", "DaemonSet", "Network Observability", "Azure AKS", "Go", "Prometheus"],
    images: ["/images/projects/k8s-network-daemonset-scanner.svg"]
  },
  {
    title: "K8s Network Optimization DaemonSet",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Optimized a DaemonSet for network performance in large-scale production-grade Kubernetes clusters. Tuned kernel networking parameters, reduced inter-pod latency, and improved throughput across hundreds of nodes in Sitecore's production AKS environment.",
    skills: ["Kubernetes", "DaemonSet", "Network Optimization", "Azure AKS", "Linux Kernel", "Performance Tuning"],
    images: ["/images/projects/k8s-network-optimization-daemonset.svg"]
  },
  {
    title: "AKS & Flux Upgrades — 65+ Production Clusters",
    duration: "2025 - 2026",
    associatedWith: "Sitecore",
    description: "Orchestrated rolling upgrades of 65+ production Kubernetes clusters from AKS 1.31 → 1.33 with Flux 2.6.x in 2025, and from AKS 1.33 → 1.34 with Flux 2.7.x in 2026. Maintained zero-downtime delivery across Sitecore's global multi-cluster estate.",
    skills: ["Azure AKS", "Flux CD", "Kubernetes", "GitOps", "Azure", "Cluster Management"],
    images: ["/images/projects/aks-cluster-upgrades.svg"]
  },
  {
    title: "K8s Cluster Provisioning — Sitecore Contenthub, XM Cloud & Shared Services",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Provisioned and configured dedicated Kubernetes clusters on Azure AKS for Sitecore Contenthub, XM Cloud, and shared services platforms. Handled namespace design, RBAC, networking policies, ingress, and GitOps bootstrapping with Flux.",
    skills: ["Azure AKS", "Kubernetes", "Flux CD", "Sitecore", "Helm", "GitOps", "RBAC"],
    images: ["/images/projects/k8s-cluster-provisioning-sitecore.svg"]
  },
  {
    title: "Azure Resource Provisioning for Clusters & Automations",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Created and managed Azure resources supporting Kubernetes clusters and various automation workloads, including Virtual Networks, Managed Identities, Azure Automation Accounts, DNS zones, and monitoring infrastructure across multiple subscriptions.",
    skills: ["Microsoft Azure", "Azure AKS", "Azure Networking", "Azure Automation", "Terraform", "IaC"],
    images: ["/images/projects/azure-resource-provisioning.svg"]
  },
  {
    title: "Quota Prediction AI Agent",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Built a hybrid AI agent that combines mathematical time-series forecasting (statistical models, trend analysis) with LLM-based reasoning to predict Azure quota consumption. Provides proactive alerts and recommendations before quota limits are breached in production clusters.",
    skills: ["Azure OpenAI", "Python", "LLM", "Agentic AI", "Time-Series", "Azure Quota API", "Mathematical Modelling"],
    images: ["/images/projects/quota-prediction-ai-agent.svg"]
  },
  {
    title: "JIRA Automation — Orphaned Azure Resource Detection",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Developed an automation pipeline that scans Azure subscriptions for orphaned or unattached resources (unlinked disks, unused IPs, detached NICs, stale resource groups). Automatically creates structured JIRA tickets with resource metadata and cost impact for engineering teams to act on.",
    skills: ["Python", "Azure Resource Graph", "JIRA API", "Azure Automation", "Cloud Cost Optimization", "Azure"],
    images: ["/images/projects/jira-orphaned-azure-automation.svg"]
  },
  {
    title: "Unified Prometheus Exporters Repository",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Consolidated cloud platform-specific Prometheus exporters (AKS node metrics, Azure service metrics, Flux health, custom SLI exporters) into a single unified repository. Standardized exporter configuration, Helm chart deployment, and Grafana dashboard integration across all Sitecore clusters.",
    skills: ["Prometheus", "Grafana", "Kubernetes", "Helm", "Azure Monitor", "Go", "Observability"],
    images: ["/images/projects/unified-prometheus-exporters.svg"]
  },
  {
    title: "IaC with Terraform — Azure Infrastructure & Migration",
    duration: "2025 - Present",
    associatedWith: "Sitecore",
    description: "Adopted Infrastructure-as-Code using Terraform and Terraform Cloud (TFC) to provision and manage Azure resources including Subscriptions, Service Principals, Key Vaults, VNets, and RBAC. Led migration of manually created legacy resources into Terraform state with import workflows and drift detection.",
    skills: ["Terraform", "Terraform Cloud", "Microsoft Azure", "HCL", "IaC", "Azure Key Vault", "RBAC", "GitOps"],
    images: ["/images/projects/iac-terraform-azure.svg"]
  },
  {
    title: "Android CCTV App",
    duration: "Jan 2026 - Feb 2026",
    description: "Designed an Android application in Kotlin that transforms an Android device into an IP-based CCTV camera by exposing an RTSP stream. Supports background service execution, configurable video codec selection (H.264, H.265/HEVC, AV1, VP9), and an embedded web server for secure remote access.",
    skills: ["Kotlin", "Android", "RTSP", "Networking"],
    images: ["/images/projects/android-cctv-app.svg"],
    link: "https://github.com/Zektopic/RSTP-CCTV-App"
  },
  {
    title: "Solar + SuperCap IOT sensors",
    duration: "May 2025 - Sep 2025",
    description: "Design and implement Agrisensors/Industrial sensors that work in intense environment conditions with Solar power. Uses deep sleep for ultra-low power operation. Open-source project sponsored by VolfPack Energy.",
    skills: ["C (Programming Language)", "ESP32 Microcontrollers", "KiCAD", "Solar Power", "IoT"],
    images: ["/images/projects/solar-supercap-iot-sensors.svg"]
  },
  {
    title: "Li-Ion BMS",
    duration: "Jan 2025 - Aug 2025",
    associatedWith: "Renewaa Energy",
    description: "Design and develop the hardware and firmware for a microcontroller-based Battery Management System (BMS) for lithium-ion battery packs used in electric vehicles.",
    skills: ["STM32", "Electronic Engineering", "KiCAD", "Firmware"],
    images: ["/images/projects/li-ion-bms.svg"]
  },
  {
    title: "STM32 CAN Bridge",
    duration: "Mar 2025 - May 2025",
    associatedWith: "Renewaa Energy",
    description: "Designed a CAN bridge to mask and translate CAN messages from automotive components (BMS, Headunit, Odometer). Includes JTAG-based firmware flashing and dumping using OPENOCD and STlink.",
    skills: ["STM32", "KiCAD", "OpenOCD", "CAN Bus", "Automotive"],
    images: ["/images/projects/stm32-can-bridge.svg"],
    link: "https://github.com/Zektopic"
  },
  {
    title: "DevOps Architecture",
    duration: "Dec 2024 - Jan 2026",
    associatedWith: "Renewaa Energy",
    description: "Creating and developing highly automated CI/CD pipelines and tests for all software and embedded programmes within our GitHub organisation. Deploy web apps and services using pipelines to GoDaddy, EC2 instances, building Docker images for K8s expansion, and automated testing pipelines. Cut development and deployment times from days to minutes.",
    skills: ["DevOps", "Amazon Web Services (AWS)", "Docker", "GitHub Actions", "Terraform", "Vercel"],
    images: ["/images/projects/devops-architecture.svg"]
  },
  {
    title: "Wifi Roller Gate Controller",
    duration: "Mar 2025",
    description: "Designed and built a WiFi-enabled roller gate controller using ESP32, enabling remote operation via a web UI. Includes prototype hardware and custom firmware.",
    skills: ["Arduino", "ESP32 Microcontrollers", "WiFi", "Embedded C", "KiCAD"],
    images: ["/images/projects/wifi-roller-gate-controller.svg"]
  },
  {
    title: "Variable Power Supply",
    duration: "Oct 2024 - Jan 2025",
    description: "Designed a variable power supply with a 0–48V range at up to 6A, plus fixed power terminals at 12V, 5V and 3.3V (up to 3A) using off-the-shelf components.",
    skills: ["Electronic Engineering", "KiCAD", "PCB Design"],
    images: ["/images/projects/variable-power-supply.svg"]
  },
  {
    title: "Govi.Ai Containerization and Clustering",
    duration: "Oct 2024 - Dec 2024",
    associatedWith: "Azend Technologies",
    description: "Deploying the Govi.ai application on AWS EKS. Managed containerized instances in GitHub Registry and AWS ECR, testing product deployment feasibility on EKS and Kubernetes clusters.",
    skills: ["Containerization", "DevOps", "Amazon Web Services (AWS)", "Kubernetes", "EKS"],
    images: ["/images/projects/govi-ai-containerization.svg"]
  },
  {
    title: "Govi.ai Web App Deployment Pipeline",
    duration: "Aug 2024 - Nov 2024",
    associatedWith: "Azend Technologies",
    description: "Pipeline handling the deployment of the Govi.ai Admin and Auth Web Apps on EC2 instances. Automates environment setup, application deployment, and health monitoring on EC2.",
    skills: ["DevOps", "Amazon Web Services (AWS)", "Jenkins", "Node.js"],
    images: ["/images/projects/govi-ai-web-app-pipeline.svg"],
    link: "https://github.com/Zektopic"
  },
  {
    title: "Terraform EC2 Deployment Pipeline",
    duration: "Aug 2024 - Nov 2024",
    associatedWith: "Azend Technologies",
    description: "Automates deployment of EC2 instances using Terraform. Includes configuration of Elastic IPs, boot volumes, and URL setup on Route 53.",
    skills: ["Jenkins", "DevOps", "Terraform", "Amazon Web Services (AWS)"],
    images: ["/images/projects/terraform-ec2-pipeline.svg"],
    link: "https://github.com/Zektopic"
  },
  {
    title: "IOT Sensors - Govi.ai",
    duration: "Feb 2024 - Jul 2024",
    associatedWith: "Azend Technologies",
    description: "Designed and developed IoT sensors for detecting Methane, CO2 levels, and power monitoring. Custom PCB design and firmware for field deployment.",
    skills: ["Electronics", "C (Programming Language)", "KiCAD", "ESP32", "IoT"],
    images: ["/images/projects/iot-sensors-govi-ai.svg"]
  },
  {
    title: "IOT Power Monitor",
    duration: "May 2024 - Jul 2024",
    description: "ESP8266-based IoT energy meter using HLW8012 for real-time power monitoring. Custom PCB designed in KiCAD.",
    skills: ["KiCAD", "Electronics", "ESP8266", "IoT", "Energy Monitoring"],
    images: ["/images/projects/iot-power-monitor.svg"],
    link: "https://github.com/ManupaKDU/ESP8266-HLW8012-Simple-Switch-"
  },
  {
    title: "Modbus Shield - ESP8266",
    duration: "May 2024 - Jun 2024",
    description: "Open-source RS485/Modbus shield for NodeMCU Amica. Designed for capturing RS485 data from BMS, inverters, and other industrial applications.",
    skills: ["KiCAD", "Electronics", "RS485", "Modbus", "ESP8266"],
    images: ["/images/projects/modbus-shield-esp8266.svg"],
    link: "https://github.com/ManupaKDU/ESP8266-RS485-Shield"
  },
  {
    title: "Universal Datalogger",
    duration: "Jul 2023 - Dec 2025",
    description: "Ongoing project to develop a universal datalogger that receives data over RS485, RS232, and CAN, safely uploads to the cloud, and stores locally on SD card. ESP32-S3 based with OLED display.",
    skills: ["KiCAD", "Electronics", "ESP32", "RS485", "CAN Bus"],
    images: ["/images/projects/universal-datalogger.svg"],
    link: "https://github.com/manupawickramasinghe/ESP32S3-mini-DATALOGGER"
  },
  {
    title: "Edge Computing using FPGA with Neural Networks",
    duration: "Feb 2023 - Feb 2024",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "Implemented an edge computing device using Kria KV260 FPGAs with deployed neural networks for general-purpose applications (object recognition, speech recognition, NLP). Optimized for low power, high performance, and low latency.",
    skills: ["C++", "Field-Programmable Gate Arrays (FPGA)", "Machine Learning", "Vitis AI", "Computer Vision"],
    images: ["/images/projects/edge-computing-fpga.svg"]
  },
  {
    title: "KDU TRANSMISSION",
    duration: "Jul 2022 - Apr 2024",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "Official e-magazine and blog for IEEE ComSoc KDU. Maintained and modified the website using HTML, CSS, and JavaScript.",
    skills: ["Web Development", "HTML", "CSS", "JavaScript"],
    images: ["/images/projects/kdu-transmission.svg"]
  },
  {
    title: "ESP32S3 Devkit",
    duration: "Jul 2023 - Jan 2024",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "ESP32-S3 MINI Devkit designed in KiCAD. Compatible with Mini, Micro, and USB-C ports. Intended as a foundation for a global datalogger platform.",
    skills: ["KiCAD", "Electronics", "PCB Design", "ESP32"],
    images: ["/images/projects/esp32s3-devkit.svg"],
    link: "https://github.com/manupawickramasinghe/ESP32S3-DEVKIT-MINI"
  },
  {
    title: "IOT BMS Datalogger",
    duration: "Oct 2022 - Apr 2023",
    associatedWith: "Vega Innovations",
    description: "Developed an ESP32-based IoT datalogger using ESP-IDF 4.4 with MQTT, OTA updates, RTC, SPIFFS, RS485, and CAN for BMS data transmission. Reverse-engineered RS485 communication for a specific BMS brand.",
    skills: ["ESP32 Microcontrollers", "Electronic Engineering", "C++", "MQTT", "RS485"],
    images: ["/images/projects/iot-bms-datalogger.svg"]
  },
  {
    title: "EduMora Android App",
    duration: "Jun 2022 - Mar 2023",
    associatedWith: "University of Moratuwa",
    description: "Developed an Android app using Flutter as part of the 2nd year Software Project (Team Hackstone). Companion app for the web-based Hasthiya LMS site, featuring quiz pages, course navigation, and interactive UI.",
    skills: ["Flutter", "Dart", "Android", "Git"],
    images: ["/images/projects/edumora-android-app.svg"],
    link: "https://github.com/manupawickramasinghe/LMS-Hasthiya-IT-Team-Hackstone"
  },
  {
    title: "WEB: GENESIZ",
    duration: "Aug 2022 - Dec 2022",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "Designed the official web page for the Genesiz event held by the ERIC society of KDU.",
    skills: ["Web Development", "HTML", "CSS", "JavaScript"],
    images: ["/images/projects/web-genesiz.svg"]
  },
  {
    title: "Futuristic Smart Study Table",
    duration: "Aug 2021 - Jun 2022",
    associatedWith: "University of Moratuwa",
    description: "1st Year ICT project — a smart study table to maximize student comfort. Features automated lighting, fan control, and alerts using ATMEGA32 microcontroller. Designed in Proteus, KiCAD, and AtmelStudio.",
    skills: ["Microcontrollers", "C (Programming Language)", "KiCAD", "Proteus", "ATMEGA32"],
    images: ["/images/projects/smart-study-table.svg"]
  },
  {
    title: "Bluetooth Switch Converter",
    duration: "Feb 2022 - May 2022",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "Commercial project to convert existing light switches to Bluetooth-controllable switches for special-abled users, without rewiring. Built with Arduino Nano, designed in EasyEDA and modeled in SOLIDWORKS.",
    skills: ["C++", "Arduino", "Bluetooth", "EasyEDA", "SOLIDWORKS"],
    images: ["/images/projects/bluetooth-switch-converter.svg"]
  },
  {
    title: "SLIR Robotics Projects",
    duration: "Oct 2021 - Mar 2022",
    description: "Advanced robotics course projects including an obstacle-avoiding robot, water control system, mini goods transporter (conveyor + pneumatics), elevator control system, and home automation system.",
    skills: ["Electronic Engineering", "Git", "Arduino", "C Programming"],
    images: ["/images/projects/slir-robotics.svg"],
    link: "https://github.com/manupawickramasinghe/SLIRCODE_Final"
  },
  {
    title: "LPSherlock - Gas Leakage Detector",
    duration: "Nov 2021 - Feb 2022",
    associatedWith: "General Sir John Kotelawala Defence University",
    description: "Individual design project — a liquid petroleum gas leakage detector that automates a gas removal system when leakage is detected. Uses MQ-2 gas sensor with Arduino UNO.",
    skills: ["Arduino", "Electronic Engineering", "Proteus", "KiCAD", "C Programming"],
    images: ["/images/projects/lpsherlock-gas-detector.svg"]
  },
  {
    title: "RuView Human Sensing System",
    description: "WiFi-based real-time pose estimation system. ESP32-S3 firmware, containerized Rust sensing server, and Kubernetes deployment for scalable inference.",
    skills: ["ESP32", "Rust", "Kubernetes", "Computer Vision", "WiFi"],
    images: ["/images/projects/ruview-human-sensing.svg"]
  },
  {
    title: "Energy Meter Dataloggers (ESP32S3)",
    description: "ESP32S3-based energy meter datalogger supporting RS485, WiFi, Ethernet, LoRa, and 4G connectivity. Built using ESP-IDF framework for robust field deployment.",
    skills: ["ESP32", "ESP-IDF", "RS485", "LoRa", "4G", "C Programming"],
    images: ["/images/projects/energy-meter-dataloggers.svg"]
  },
  {
    title: "Eye-Tracking Communication Software",
    description: "Assistive technology software for eye-tracking-based communication, featuring calibration UI, AI-driven predictive text models, and accessible interface design.",
    skills: ["Python", "Computer Vision", "AI/ML", "Accessibility", "UI Design"],
    images: ["/images/projects/eye-tracking-communication.svg"]
  }
];

export const featuredPosts = [
  {
    date: "Recent",
    content: "I was privileged to be invited to conduct mock interviews for the junior batch (Intake 39) of Electronics and Telecommunication Engineering students at KDU.\n\nA big thank you to the juniors, organizers and the faculty for the invitation and for prioritizing this essential professional development. I wish all the students the very best in their careers!",
    engagement: { likes: 119, comments: 1 }
  },
  {
    date: "Recent",
    content: "Ever tried installing a custom Ubuntu WSL distribution directly from an .iso file? Wanted to install the newest distro in WSL but still not available?\n\nIt's a journey with more twists and turns than you'd expect. I decided to document the entire process—from the initial failures with 7-Zip to the successful method of extracting, packaging, and repairing the filesystem. This deep dive covers the \"why\" behind each step, not just the \"how.\"\n\nBlog Link: Beyond the Microsoft Store: How to Build a Custom WSL Distribution from an Ubuntu 25.04 ISO",
    tags: ["#WSL", "#WindowsSubsystemForLinux", "#Ubuntu", "#DevOps", "#CommandLine"],
    engagement: { likes: 16, comments: 3 },
    link: "https://zektopic.blogspot.com"
  },
  {
    date: "Recent",
    content: "Ever had to share your project to your friend, coworkers but only had it in local host?\n\nCreating Cloudflare Tunnels to redirect localhost to the public web is the easiest/fastest way to do so.\n\n- Random URL is generated for Testing,\n- Permanent URL Solution requires Domain Access from Cloudflare Dashboard.\n\nAt least now you don't have to compromise your security or mess around with VPNs and expensive VPSes to get your project going.",
    tags: ["#cloudflare", "#cloud", "#saas", "#diy"],
    engagement: { likes: 35 }
  },
  {
    date: "Recent",
    content: "I made a Hardware Monitor for RK3528 in Rust 🦀!\n\nAnd a Linux service to automatically convert my HEVC Videos into H264 for my Plex server. As Plex Doesn't use Hardware Acceleration I used RKMPP + FFMPEG for the conversion.\n\nNow I can monitor my Plex server and enjoy :D",
    tags: ["#linux", "#oss", "#rust"],
    engagement: { likes: 23, comments: 4 }
  },
  {
    date: "Recent",
    content: "OPEN SOURCE Low power Agrisensors for Sri Lanka!\n\nSupercapacitor Based Sensor unit, capable of handling the harsh conditions of the climates in Sri Lanka. (No swelling of Lithium battery and no fire hazard)\n\nThank you VolfPack Energy for sponsoring this open-source project, empowering the OSS community of SL.",
    tags: ["#solar", "#supercapacitor", "#volfpack", "#electronics", "#opensource", "#agriculture", "#diy"],
    engagement: { likes: 49, comments: 3 }
  }
];
