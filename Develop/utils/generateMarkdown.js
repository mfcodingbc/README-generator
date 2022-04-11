// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return `""`
  }
  return true
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return `""`
  }
  return (`https://choosealicense.com/licenses/${license}`)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  Professional README generated through application created by [mfcodingbc](https://github.com/mfcodingbc).
  ${data.contribution}

  ## Example

  ${data.test}

  ## Questions

  Please visit the project's GitHub page ${data.link} for further information on this application. You can also check out other projects from my GitHub ${data.username}. If you have any questions, you can email me at ${data.email}.

  This project was created using the following technologies:
  ${data.languages}

  Thank you for reading this README!

  ## License

  ${licence}
`;
}

module.exports = generateMarkdown;
