import { Console } from "@woowacourse/mission-utils";
import { RACING } from "../constants/Racing";

export const InputView = {
  async getCarsName(){
    const cars = await Console.readLineAsync(RACING.input.car);

    return cars;
  },

  async getRepeatNumber(){
    const repeatNumber = await Console.readLineAsync(RACING.input.repeat);

    return repeatNumber;
  },
}