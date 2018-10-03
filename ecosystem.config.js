module.exports = {
  apps : [{
    name: 'Test',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'wayfinder',
      host : '18.236.233.194',
      ref  : 'origin/master',
      repo : 'https://github.com/vinodnair01/pm2test.git',
      path : '/home/wayfinder/public_html',
      "post-setup": "ls -la",
      'pre-deploy-local' : "echo This is a local executed command",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
