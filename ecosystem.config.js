module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    cwd: '/home/manupa/SD/Docs/Portfolio/portfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3030
    }
  }]
};
