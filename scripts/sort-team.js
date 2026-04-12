const fs = require('fs');
const path = './public/team.json';

try {
  const rawData = fs.readFileSync(path, 'utf8');
  const data = JSON.parse(rawData);

  if (data.members && Array.isArray(data.members)) {
    // Sort alphabetically by the "name" field
    data.members.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    // Write back to file with 2-space indentation
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    console.log('Successfully alphabetized team members.');
  }
} catch (error) {
  console.error('Error processing JSON:', error);
  process.exit(1);
}