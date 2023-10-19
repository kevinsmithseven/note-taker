# Note Taker

## Description

This project is a Node.js command line application that takes in user input and generates a logo as an SVG file. The user is able to enter their initials, or any three characters of their choosing, the text color, shape, and shape color of the logo. A logo.svg file will then be created in an output folder that they can use for whatever purpose they would like. Validation of character length and color choices is included.

## Usage

To begin the application, the user should perform a NPM install in the CLI, then type "node index.js" to run the application. The fist prompt will appear in the terminal asking for three characters for the logo. The user enters three characters and hits enter for the next prompt, which will ask what color they would like the text to be. They can select any color or hexadecimal value that is included in the 140 standard HTML color set. If an incorrect color keyword or hexadecimal value is entered, an error message will log asking for a new color. The third prompt wil ask the user to select a shape from a list of choices by using the down arrow and pressing enter on their choice. The fourth and final prompt will ask for the color they wish the shape to be. Same validation logic will apply as the text color. Once these prompts are complete, a message will appear in the terminal indicating a successful save of the logo.svg file to the output folder.


Link to video demonstrating use of the application:

[Demo video of SVG Logo Generator](https://drive.google.com/file/d/1didf7-MdC9k4cooEKS7gArZRj21iThSV/view)

Screenshot of the application:
    
![Screenshot of SVG Logo Generator](./images/screenshot%20of%20svg%20logo%20generator.png)


## Credits

Special thanks to Dominique Meeks Gombe, who provided tutoring and guidance to me while I was working on this project, as well as Leif Hetland and Fred Kamm, our class instructors, for additional support, assistance and oft needed morale boosting. I also reference code guidance from the class repository to assist with this project.

In completing this project, I utilized the below resources to assist:

https://jestjs.io/  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise  
https://www.npmjs.com/  
https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide  
https://www.markdownguide.org/basic-syntax/  

## License

This project is covered under the MIT License.

![MIT Badge](https://img.shields.io/badge/License-MIT-blue)


## Badges

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

## Questions

Please visit my [GitHub profile](https://github.com/kevinsmithseven/) or email me at [kevinsmithseven@gmail.com](mailto:kevinsmithseven@gmail.com) with any questions.
