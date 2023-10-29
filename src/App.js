import { Console, Random } from '@woowacourse/mission-utils'

import { INPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import Player from './Player.js';
import RacingGame from './RacingGame.js';

const player = new Player();
const game = new RacingGame();


class App {

  #player
  #repeat
  #point

  async play() {
    await this.setGame();
    this.#point = await game.start(this.#player, this.#repeat);


  }

  async setGame(){
    this.#player = await player.carName();
    this.#repeat = await player.repeatTimes();
  }

}

export default App;
