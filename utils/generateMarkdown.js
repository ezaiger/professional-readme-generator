// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if(license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if(license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license === "IBM") {
    return `IBM Public License Version 1.0 (IPL-1.0)
    View Summary of IBM Public License 1.0 (IPL) on TLDRLegal » (Disclaimer)
    
    THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS IBM PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
  }
  if(license === "MIT") {
    return `The MIT License
    License Copyright: Unknown.
    License License: Unknown.
    License Contact: Unknown.
    
    SPDX short identifier: MIT`
  }
  if(license === "Mozilla") {
    return `Mozilla Public License 2.0 (MPL-2.0)
    Further resources on Mozilla Public License 2.0 (MPL-2.0)`
  }
  if(license === "Apache") {
    return `Apache License, Version 2.0
    SPDX short identifier: Apache-2.0
    Further resources on the Apache License, Version 2.0
    
    Apache License
    Version 2.0, January 2004
    http://www.apache.org/licenses/
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}<br>
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
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
  <a href="https://github.com/${data.username}">My GitHub Profile</a><br>
  If you have additional questions, you can reach me via <a href="mailto:${data.email}">email</a>
  `
};

module.exports = generateMarkdown;
