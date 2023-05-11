"use strict";

var fs = require('fs');

var inquirer = require('inquirer');

var generatePage = require('./utils/generateMarkdown.js'); // Define an array of questions for the user


var questions = function questions() {
  // Use Inquirer to prompt questions to the user
  return inquirer.prompt([{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project name!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  }, {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'GNU'],
    "default": 'MIT',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please choose a license!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter steps required to install your project!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?',
    validate: function validate(nameInput) {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a usage description!');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repo?'
  }]);
}; // Define a function to write the README file using the file system


var writeFile = function writeFile(data) {
  fs.writeFile('README.md', data, function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your README has been successfully created!');
    }
  });
}; // Call the questions function to initialize the program


questions().then(function (answers) {
  return generatePage(answers);
}).then(function (data) {
  return writeFile(data);
})["catch"](function (err) {
  return console.log(err);
});
//# sourceMappingURL=index.dev.js.map
