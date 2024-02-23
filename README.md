# Rock-Paper-Scissors Game

![Rock-Paper-Scissors Logo][def]

## Overview

The **Rock-Paper-Scissors Game** is a fun and interactive web-based game where players can challenge each other or play against the computer. The goal is to choose either rock, paper, or scissors and determine the winner based on the classic rules of the game.

## Team Members

- **Egedegbe Oghenero**: Solo developer and project lead.

## Inspiration

The inspiration for this project came from a Japanese anime I once watched. The simplicity and popularity of the game sparked my interest in creating a digital version that could be enjoyed by players worldwide.

## Technologies Used

- **HTML**: Provides the game's structure.
- **CSS**: Styles the game for an appealing user experience.
- **JavaScript**: Implements the game logic.
- **Node.js**: Powers the server.
- **Express.js**: Handles HTTP requests and responses.

## How to Play

1. Open the game in your web browser.
2. Select game mode
3. Choose rock, paper, or scissors.
4. look at the result update if you win against the computer or your opponent!

## Code Snippet

```javascript
// Rock-Paper-Scissors game logic
function playGame(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
```

## Demo

![Rock-Paper-Scissors Demo][demo]
![Rock-Paper-Scissors Demo](/styles/images/Rock-Paper-Scissors_Gameplay.gif)

## Challenges and Learnings

- Implementing multiplayer logic.
- Ensuring responsiveness across browsers and devices.
- Gaining insights into real-time communication and game development.

Feel free to contribute and enjoy playing the Rock-Paper-Scissors Game! 🎮🌟

---

[def]: ./styles/images/logo.png
[demo]: /styles/images/Rock-Paper-Scissors_Gameplay.gif
