import { Console } from "@woowacourse/mission-utils";
import { RACING } from "../constants/Racing.js";
import Validate from "../game/Validate.js";

export const InputView = {
  async getCarsName(){
    const cars = await Console.readLineAsync(RACING.input.car);
    const splitCars = cars.split(',');

    Validate.validateCars(splitCars);

    return splitCars.map((car) => { return {name: car, point: 0}});
  },

  async getRepeatNumber(){
    const repeatNumber = await Console.readLineAsync(RACING.input.repeat);

    return repeatNumber;
  },
}