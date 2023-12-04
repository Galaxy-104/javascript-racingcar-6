import { Console } from "@woowacourse/mission-utils";
import { RACING } from "../constants/Racing.js";
import Validate from "../game/Validate.js";

export const InputView = {
  async getCarsName(){
    const cars = await Console.readLineAsync(RACING.input.car);
    const splitCars = cars.split(',');

    Validate.validateCars(splitCars);

    return splitCars.map((car) => { return {name: car.trim(), distance: 0}});
  },

  async getRepeatNumber(){
    const repeatNumber = await Console.readLineAsync(RACING.input.repeat);
    const number = Number(repeatNumber);

    Validate.validateRepeat(number);

    return number;
  },
}