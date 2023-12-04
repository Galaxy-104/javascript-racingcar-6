import { Console } from '@woowacourse/mission-utils'
import { RACING } from '../constants/Racing.js'

export const OutputView = {
  print(message){
    return Console.print(message)
  },

  result(){
    return Console.print(RACING.output.result)
  },

  winner(winner){
    return Console.print(`${RACING.output.winner}${winner}`)
  }
}