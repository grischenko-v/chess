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
- Pawn upgrades
- Highlight avalible path
- Check for check and checkmate
- Play with help from Stockfish(button with '?')
- Single and Multi playing modes (Single vs Stockfish v17.1 lite siingle )
- save game in indexedDB(Dexie)

TODO:
- add game restart button
- test figure moves/capture/revert
- fix revert step for Single player mode
- split Application to use-cases
- add history player
- add 2d mode
- add multilang support
