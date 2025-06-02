#!/usr/bin/env node

import { execSync } from 'child_process'

const args = process.argv.slice(2)
const command = args[0]
const project = args[1]

if (command === 'update') {
  console.log(`🔄 Updating project "${project}"...`)
  execSync(`cd /var/www/${project} && git pull && npm install && npm run build`, { stdio: 'inherit' })
}
else if (command === 'newproject') {
  console.log(`🚀 Creating new project "${project}"...`)
  // exemple: lire config.json, cloner repo, générer nginx config, reload nginx, etc.
}
else {
  console.log('Usage: webauto [update|newproject] <project-name>')
}
