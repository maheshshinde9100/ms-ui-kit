const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const outputFile = path.join(__dirname, 'componentsData.js');

const components = [];

function getDirectories(source) {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

const componentDirs = getDirectories(componentsDir);

componentDirs.forEach(dirName => {
  const componentDir = path.join(componentsDir, dirName);
  const files = fs.readdirSync(componentDir);
  
  const jsxFiles = files.filter(file => file.endsWith('.jsx'));
  
  jsxFiles.forEach(file => {
    const filePath = path.join(componentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const componentName = path.basename(file, '.jsx');
    
    components.push({
      name: componentName,
      directory: dirName,
      content: content
    });
  });
});

const output = `// Auto-generated components data
const componentsData = ${JSON.stringify(components, null, 2)};

module.exports = componentsData;
`;

fs.writeFileSync(outputFile, output);
console.log(`Generated componentsData.js with ${components.length} components`);
