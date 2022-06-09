// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case "MIT":
			return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
		case "APACHE":
			return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
		case "BSD":
			return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
		case "None":
			return "";
	}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
	if (license === "MIT") {
		return "[License: MIT](https://opensource.org/licenses/MIT)";
	}
	if (license === "APACHE") {
		return "[License: APACHE](https://opensource.org/licenses/Apache-2.0)";
	}
	if (license === "BSD") {
		return "[License: BSD](https://opensource.org/licenses/BSD-3-Clause)";
	}
	if (license === "None") {
		return "";
	}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license === "MIT") {
		return "MIT License";
	}
	if (license === "APACHE") {
		return "Apache License 2.0";
	}
	if (license === "BSD") {
		return "BSD License";
	}
	if (license === "None") {
		return "";
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}
	
	## ✏️ Description
	${data.description}

	## 📜 Table of Contents
	* [Installation](#installation)
	* [Usage](#usage)
	* [License](#license)
	* [Contributing](#contributing)
	* [Tests](#tests)
	* [Questions](#questions)

	## 💾 Installation
	${data.installation}

	## 💡 Usage
	${data.usage}

	## License
	${renderLicenseSection(data.license)}
	${renderLicenseBadge(data.license)}
	${renderLicenseLink(data.license)}

	## 👥 Contributing
	${data.contributing}

	## 🔍 Tests
	${data.tests}

	## 💭 Questions
	If you have any questions, please contact me at ${
		data.email
	} or visit my GitHub profile at [github](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
