
const fs = require('fs'); 
const inquirer = require('inquirer'); 


const generatePage = require('./utils/generateMarkdown.js');
// Define an array of questions for the user
const questions = () => {
    // Use Inquirer to prompt questions to the user
    return inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false; 
          }
        } 
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false; 
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false; 
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false; 
          }
        }
      }, 
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: 'MIT',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please choose a license!');
            return false; 
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter steps required to install your project!');
            return false; 
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a usage description!');
            return false; 
          }
        }
      },
      
      {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
      }
    ]);
  };
  
  // Define a function to write the README file using the file system
  const writeFile = data => {
    fs.writeFile('README.md', data, err => {
 
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('Your README has been successfully created!');
      }
    });
  }; 
  
  // Call the questions function to initialize the program
  questions()
    .then(answers => generatePage(answers))
    .then(data => writeFile(data))
    .catch(err => console.log(err));
  