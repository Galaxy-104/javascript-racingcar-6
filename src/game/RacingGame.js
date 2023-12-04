import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";
import { Random } from '@woowacourse/mission-utils';
import { RACING } from "../constants/Racing.js";

class RacingGame{

  #player
  #repeat

  async start(){
    this.#player = await InputView.getCarsName();
    this.#repeat = await InputView.getRepeatNumber();
    await this.racing();
  }

  async racing(){
    OutputView.result();

    for(let i = 0; i < this.#repeat; i++){
      this.#player.forEach((car) => {
        let randomNumber = Random.pickNumberInRange(RACING.game.min, RACING.game.max)

        if(randomNumber >= RACING.game.forward){
          car.distance = car.distance + 1;
        }

        const position = Array(car.distance).fill('-').join('');
        OutputView.print(`${car.name} : ${position}`);
      })
      OutputView.print('');
    }

  }

}

export default RacingGame;