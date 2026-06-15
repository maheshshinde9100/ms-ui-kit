const componentsData = require('./componentsData');
console.log('Total components:', componentsData.length);
console.log('Component names:');
componentsData.forEach(comp => console.log('-', comp.name));
