export const projectsData = [
  {
    title: "Solar + SuperCap IOT sensors",
    duration: "May 2025 - Present",
    description: "Design and implement Agrisensors/Industrial sensors that work in intense environment conditions with Solar power. Uses deep sleep.",
    skills: ["C (Programming Language)", "ESP32 Microcontrollers", "+5 skills"]
  },
  {
    title: "DevOps Architecture",
    duration: "Dec 2024 - Present",
    associatedWith: "Renewaa Energy",
    description: "Creating and Developing highly automated CI/CD pipelines and tests for all software and embedded programmes within our GitHub organisation",
    skills: ["DevOps", "Amazon Web Services (AWS)", "+18 skills"]
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
