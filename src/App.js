import RacingGame from "./game/RacingGame.js";

class App {
  async play() {
    const game = new RacingGame();
    game.start();
  }
}

export default App;
