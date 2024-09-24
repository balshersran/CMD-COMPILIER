// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return renderLicenseLink(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'ISC') {
    return `![License](https://opensource.org/licenses/${license})`;
  } else if(license === 'MIT') {
    return `![License](https://opensource.org/licenses/${license})`;
  } else if(license === 'POSTgreSQL') {
    return `![License](https://opensource.org/licenses/${license})`;
  }else if(license === 'Apache-2.0') {
    return `![License](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return `This project is licensed under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
`;
}

export default generateMarkdown;
