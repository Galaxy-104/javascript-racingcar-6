import { RACING } from "../constants/Racing.js"
import { INPUT_ERROR } from "../constants/Error.js"

class Validate{
  
  static validateCars(cars){
    const regExp = new RegExp(/[a-zA-Z|가-힣|0-9]/)

    cars.forEach((car) => {

      if(car === ''){
        throw new Error(`[ERROR] ${INPUT_ERROR.common.blank}`)
      }

      if(car.length > INPUT_ERROR.name.lengthNumber){
        throw new Error(`[ERROR] ${INPUT_ERROR.name.length}`)
      }

      if(!regExp.test(car)){
        throw new Error(`[ERROR] ${INPUT_ERROR.name.letter}`)
      }
    })
  }

  static validateRepeat(number){
    if(number === ''){
      throw new Error(`[ERROR] ${INPUT_ERROR.common.blank}`)
    }

    if(isNaN(number)){
      throw new Error(`[ERROR] ${INPUT_ERROR.repeat.notANumber}`)
    }

    if(number % 1 !== 0){
      throw new Error(`[ERROR] ${INPUT_ERROR.repeat.natural}`)
    }

    if(number < 1){
      throw new Error(`[ERROR] ${INPUT_ERROR.repeat.natural}`)
    }

  }
}

export default Validate