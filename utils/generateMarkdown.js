function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
## License
      
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
`;
    case "Apache 2.0":
      return `
## License
      
This project is licensed under the [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license.
`;
    case "GPL 3.0":
      return `
## License
      
This project is licensed under the [GPL v3](https://www.gnu.org/licenses/gpl-3.0) license.
`;
    case "BSD 3":
      return `
## License
      
This project is licensed under the [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) license.
`;
    default:
      return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
