import { InputView } from "../view/InputView.js";

class RacingGame{

  #player
  #repeat

  async start(){
    this.#player = await InputView.getCarsName();
    this.#repeat = await InputView.getRepeatNumber();
  }
}

export default RacingGame;