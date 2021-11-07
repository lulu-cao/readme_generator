// Create a function that returns a license badge; if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (`${license}` !== "None") {
    let licenseCollected = `https://img.shields.io/badge/License-${license}-brightgreen.svg`;
    return licenseCollected;
  } else {
    let licenseCollected = "";
    return licenseCollected;
  }  
}

// Create a function that returns the license link; if there is no license, return an empty string
function renderLicenseLink(license) {
  if (`${license}` === "Apache_2.0") {
  let licenseLink = "https://opensource.org/licenses/Apache-2.0";
  return licenseLink;
} else if (`${license}` === "Boost_1.0") {
  let licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
  return licenseLink;
} else if (`${license}` === "BSD_3--clause") {
  let licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  return licenseLink;
} else if (`${license}` === "CC0_1.0") {
  let licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
  return licenseLink;
} else if (`${license}` === "EPL_1.0") {
  let licenseLink = "https://opensource.org/licenses/EPL-1.0";
  return licenseLink;
} else if (`${license}` === "GPLv3") {
  let licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  return licenseLink;
} else if (`${license}` === "IPL_1.0") {
  let licenseLink = "https://opensource.org/licenses/IPL-1.0";
  return licenseLink;
} else if (`${license}` === "ISC") {
  let licenseLink = "https://opensource.org/licenses/ISC";
  return licenseLink;
} else if (`${license}` === "MIT") {
  let licenseLink = "https://opensource.org/licenses/MIT";
  return licenseLink;
} else if (`${license}` === "MPL_2.0") {
  let licenseLink = "https://opensource.org/licenses/MPL-2.0";
  return licenseLink;
} else if (`${license}` === "None") {
  let licenseLink = "";
  return licenseLink;
}  
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (`${license}` !== "None") {
    return `This project is licensed under the terms of the [${license}](${renderLicenseLink(license)}) license.`
  } else {
    return ""
  }  
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  [![License](${renderLicenseBadge(data.licenseName)})](${renderLicenseLink(data.licenseName)})\n
  ${renderLicenseSection(data.licenseName)}
`;
}

module.exports = generateMarkdown;
