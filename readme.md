# Flags Galore
Flags Galore is a trivia game where a random flag is presented and the user has to guess the country that the flag belongs to by typing the country name into the provided text box. Seven flags are presented one at a time and a total score of 14 points can be achived if all flags are guessed correctly.
![Game displayed on different screen sizes](/assets/images/readme/Responsive.PNG)
## Features
### Existing Features
- #### Buttons
    - All buttons have a hover effect wich lets the user know when the mouse is over the button.

    ![Button no hover](/assets/images/readme/button.PNG)
    ![Button hover](/assets/images/readme/button-hover.PNG)
- #### Start Screen
    - The user is first presented with a simple box containing the title of the game and a single START button underneath wich starts the game when clicked.

    ![Start screen](/assets/images/readme/Start-screen.PNG)
- #### Question Screen
    - Once the game is started a random flag is generated and shown on the screen.
    - This is one of seven flags to be shown which is indicated at the top of the flag where it says "Flag 1 / 7". The numerator will go up by one after each flag. 
    - The name of the country should be writtin in the text box underneath the flag where a placeholder text has been placed saying "Enter country name here". The text input is not case sensitive so any combination of lower and uppercase letters will work. 
    - The Submit button is then clicked via the mouse or the enter button on the keyboard can be used to trigger it. 
    - After the Submit button is triggered a message will appear underneath the flag. It will display either:
        - CORRECT!
        - INCORRECT... It was {***the name of the country***}
    - The NEXT button will remain disabled until the Submit button is triggered and the Submit button will then become disabled until the next question.
    - The score is kept at the bottom of the game area and will increment by 2 for each flag that is guessed correctly. 
    ![Question screen](/assets/images/readme/question-screen1.PNG)
    ![Question screen correct answer](/assets/images/readme/question-screen2.PNG)
    ![Question screen incorrect answer](/assets/images/readme/question-screen3.PNG)
    ![question screen new question](/assets/images/readme/question-screen4.PNG)
- #### End Screen
    - Once all seven flags have been answered the next button will bring the user to the end screen where their accumulated score is presented to them and compared to the maximum score of 14 point.
    - A RESTART button then replaces all other buttons at the bottom of the screen. Clicking this RESTART button will restart the game by refreshing the browser window.

    ![End Screen](/assets/images/readme/end-screen.PNG)

### Features Left to Implement 
- #### Hint Button
    - A hint button will be added later which will bring up four country names. Three of these will be randomly generated and one will be the correct answer. These countries will be presented in a random order.
    - When the country is guessed using the hint button only one point will be awarded to the user. 
- #### More Flags
    - So far only 15 flags have been added to the game, in the fututre all country flags will be implemented into the game play. 
- #### Leader Board
    - A leader board will be shown at the end of the game to show how you have scored comparred to other players.
- #### Help
    - A little question mark will be added that will be visible during the home screen and game play. When this questionmark is clicked a little information screen will pop up explaining the game.
- #### Exit Button
    - A button to exit the game and bring you back to the homescreen will be added to the question screens so that the player can quit anytime during the game. 

## Testing
- ### Screen Sizes
    - The game is quite small to begin with so fits almost all screen sizes.
    - A media query for smaller screen sizes was added to make the flag size responsive to the size of the screen. 
- ### Flag Generation
    - The flag generated is random (or more correctly psuedorandom...)
    - The flag presented gets deleted after its been shown so that it can not appear again during the current game.
- ### Buttons
    - All buttons have a hover effect.
    - All buttons do what they are supposed to do.
- ### Lighthouse
    - Lighthouse gave a good score across all areas
    ![Lighthouse report](/assets/images/readme/lighthouse.PNG)
- ### Validator Testing
    - #### HTML
        - One error was found when passed through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flukasrid.github.io%2Fflag-quiz%2F). It says an opening p tag is needed but it is already there. No action was taken for this. 
    - #### CSS 
        - A few errors were produced when passed through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flukasrid.github.io%2Fflag-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). This is due to the background gradient color taken from [coolors.co](https://coolors.co/). The background gradient works fine, so no action was taken for this.
    - #### JavaScript
        - The javascript syntax was checked on multiple sites and no syntax errors were found.
## Deployment
- The Website was deployed through the hosting platform [GitHub](https://github.com/).

## Credits
- ### Images
    - All images were taken from [Worldometer](https://www.worldometers.info/geography/flags-of-the-world/).
- ### Colors
    - The color pallete was created with [Coolors](https://coolors.co/).
