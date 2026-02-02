## Chess [demo](https://grischenko-v.github.io/chess/dist/index.html)

Tech stack:
- Typescript
- gsap
- ThreeJS
- VueJS/Pinia
- AI: wasm/stockfish17.1-light-singlecore

Now in progress:

![Progress](https://github.com/grischenko-v/chess/blob/main/resultgif.gif)

Features
- ThreeJS figures
- History viewer
- Show cuptured figures
- Revert steps button
- Figures captures(incliding enPassant capture)
- Roques
- Highlight avalible path
- Check for check and checkmate
- Play with help from Stockfish(button with '?')

TODO:   
- add Pawn promotion on last field, add promotion to steps history
- add signutures to board(A-H, 1-7)
- test figure moves/capture/revert
- add localfirst
- add play vs AI(stockfish) 
- split Application to use-cases
- add history player
- add 2d mode
- add multilang support
