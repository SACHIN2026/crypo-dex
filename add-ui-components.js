const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const components = [
  'button',
  'sheet',
  'accordion',
  'card',
];

const componentDir = path.join(__dirname, 'components', 'ui');

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

components.forEach(component => {
  try {
    execSync(`npx shadcn@latest add ${component} -y`, { stdio: 'inherit' });
    console.log(`Added ${component} component successfully.`);
  } catch (error) {
    console.error(`Failed to add ${component} component:`, error);
  }
});

console.log('All components added successfully!');

