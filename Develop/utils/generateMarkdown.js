// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If no license is provided, return an empty string
  return '';
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If no license is provided, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If no license is provided or needed, return an empty string
  return '';
}

// TODO: Create a function to generate markdown for README
// generates markdown for README without license information
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;