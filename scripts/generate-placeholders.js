const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');

function svg(w, h, bg, label, sub) {
  const labelSize = label.length > 30 ? 14 : label.length > 20 ? 16 : 18;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="42%" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="system-ui,sans-serif" font-size="${labelSize}" font-weight="700">${label}</text>
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.6)" font-family="system-ui,sans-serif" font-size="12">${sub}</text>
</svg>`;
}

function write(relPath, content) {
  const full = path.join(PUBLIC, relPath);
  fs.writeFileSync(full, content);
  console.log(`  ${relPath}`);
}

// === LOGOS (200x200) ===
console.log('\nLogos:');
const logos = [
  ['sitecore', 'Sitecore', '#5C2D91'],
  ['igt1', 'IGT1 Lanka', '#1a5276'],
  ['mirai', 'Mirai.lk', '#e74c3c'],
  ['renewaa', 'Renewaa Energy', '#27ae60'],
  ['kdu', 'KDU', '#2c3e50'],
  ['azend', 'Azend Technologies', '#3498db'],
  ['vega', 'Vega Innovations', '#e67e22'],
  ['sasip', 'SASIP Institute', '#8e44ad'],
];
logos.forEach(([file, label, color]) => {
  write(`logos/${file}.svg`, svg(200, 200, color, label, 'Replace with company logo'));
});

// === EXPERIENCE GALLERY (800x400, 3 per slug) ===
console.log('\nExperience gallery:');
const experiences = [
  ['sitecore', 'Sitecore', '#7c3aed'],
  ['igt1-lanka', 'IGT1 Lanka', '#0369a1'],
  ['mirai-lk', 'Mirai.lk', '#dc2626'],
  ['renewaa-energy', 'Renewaa Energy', '#059669'],
  ['kdu-instructor', 'KDU Instructor', '#334155'],
  ['azend-technologies', 'Azend Technologies', '#2563eb'],
  ['vega-innovations', 'Vega Innovations', '#d97706'],
  ['sasip-institute', 'SASIP Institute', '#9333ea'],
];
const expSubs = [
  'Project screenshot or workspace photo',
  'Team collaboration or demo photo',
  'Product or deliverable photo',
];
experiences.forEach(([slug, label, color]) => {
  [1, 2, 3].forEach((n) => {
    write(
      `images/experience/${slug}-${n}.svg`,
      svg(800, 400, color, `${label} — Photo ${n}`, expSubs[n - 1])
    );
  });
});

// === PROJECT COVERS (800x480) ===
console.log('\nProject covers:');
const projects = [
  ['android-cctv-app', 'Android CCTV App', '#0284c7'],
  ['solar-supercap-iot-sensors', 'Solar + SuperCap IOT Sensors', '#059669'],
  ['li-ion-bms', 'Li-Ion BMS', '#dc2626'],
  ['stm32-can-bridge', 'STM32 CAN Bridge', '#7c3aed'],
  ['devops-architecture', 'DevOps Architecture', '#0369a1'],
  ['wifi-roller-gate-controller', 'Wifi Roller Gate Controller', '#d97706'],
  ['variable-power-supply', 'Variable Power Supply', '#0f766e'],
  ['govi-ai-containerization', 'Govi.Ai Containerization', '#1d4ed8'],
  ['govi-ai-web-app-pipeline', 'Govi.ai Web App Pipeline', '#4338ca'],
  ['terraform-ec2-pipeline', 'Terraform EC2 Pipeline', '#9333ea'],
  ['iot-sensors-govi-ai', 'IOT Sensors - Govi.ai', '#16a34a'],
  ['iot-power-monitor', 'IOT Power Monitor', '#ea580c'],
  ['modbus-shield-esp8266', 'Modbus Shield - ESP8266', '#b91c1c'],
  ['universal-datalogger', 'Universal Datalogger', '#0e7490'],
  ['edge-computing-fpga', 'Edge Computing FPGA + NN', '#6d28d9'],
  ['kdu-transmission', 'KDU Transmission', '#475569'],
  ['esp32s3-devkit', 'ESP32S3 Devkit', '#0891b2'],
  ['iot-bms-datalogger', 'IOT BMS Datalogger', '#ca8a04'],
  ['edumora-android-app', 'EduMora Android App', '#2563eb'],
  ['web-genesiz', 'WEB: GENESIZ', '#be185d'],
  ['smart-study-table', 'Futuristic Smart Study Table', '#65a30d'],
  ['bluetooth-switch-converter', 'Bluetooth Switch Converter', '#0d9488'],
  ['slir-robotics', 'SLIR Robotics Projects', '#334155'],
  ['lpsherlock-gas-detector', 'LPSherlock Gas Detector', '#dc2626'],
  ['ruview-human-sensing', 'RuView Human Sensing', '#7c3aed'],
  ['energy-meter-dataloggers', 'Energy Meter Dataloggers', '#ea580c'],
  ['eye-tracking-communication', 'Eye-Tracking Communication', '#2563eb'],
];
projects.forEach(([file, label, color]) => {
  write(
    `images/projects/${file}.svg`,
    svg(800, 480, color, label, 'Replace with project screenshot or photo')
  );
});

// === ABOUT-ME COLLAGE (varied sizes) ===
console.log('\nAbout-me collage:');
const collage = [
  ['collage-1', 'Travel / Hiking', 'Landscape photo from a hike or trip', '#d97706', 800, 600],
  ['collage-2', 'Stamp Collection', 'Close-up of stamp collection', '#e07a5f', 600, 600],
  ['collage-3', 'Badminton / Sports', 'Action shot or court photo', '#81b29a', 800, 600],
  ['collage-4', 'Home Server Setup', 'Photo of home server rack/setup', '#3d405b', 600, 800],
  ['collage-5', 'Workstation', 'Desk / coding setup photo', '#6c63ff', 800, 600],
  ['collage-6', 'Friends / Team', 'Group photo with friends or team', '#e76f51', 600, 800],
  ['collage-7', 'Nature / Landscape', 'Scenic landscape from Sri Lanka', '#2a9d8f', 800, 600],
  ['collage-8', 'Life Moment', 'Any personal memorable moment', '#e9c46a', 600, 600],
];
collage.forEach(([file, label, sub, color, w, h]) => {
  write(`images/about-me/${file}.svg`, svg(w, h, color, label, sub));
});

console.log('\nDone! Total files created:', logos.length + experiences.length * 3 + projects.length + collage.length);
