// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC") {
    return "![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)";
  } else if (license === "MIT") {
    return "![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)";
  } else if (license === "Apache-2.0") {
    return "![GitHub license](https://img.shields.io/badge/license-Apache-red.svg)";
  }
  return renderLicenseLink(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "ISC") {
    return `![License](https://opensource.org/licenses/${license})`;
  } else if (data.license === "MIT") {
    return `![License](https://opensource.org/licenses/${license})`;
  } else if (data.license === "Apache-2.0") {
    return `![License](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `This project is licensed under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Questons](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Questions
  Github: ${data.github}
  
  Email: ${data.email}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  
`;
}

export default generateMarkdown;
