![image](https://user-images.githubusercontent.com/77439221/174585317-36817acb-8499-485e-9c43-b691600e1265.png)

# Guess-My-Number

**Note**: This game is not mobile friendly.

**Fonts**: https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap

## Game Logic

- The goal of this project is to guess a secret number between 1 and 100
- The deafault score for the game is 20
- The game will automatically generate a number, and you have to guess that number to win
- To guess, you need to type your number in the input box and then press check!
- If the guess number is lower than the generated number, the game print "Too low" on the screen, and your score will be deducted
- If the guess number is higher than the generated number, the game print "Too high" on the screen, and your score will be deducted
- If the guess number is equal to the generated number, then game prinnt "🎉 Correct Number!", show the Highscore, and the screen background turn to green.
- The Highscore uses this logic: if (score > Highscore) {Highscore = Score}
- When you press the "Again!" button, your screen will be reset to its default state except the Highscore


