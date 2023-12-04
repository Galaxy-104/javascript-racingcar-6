const input = Object.freeze({
  car: "경주할 자동차 이름을 입력하세요.(이름은 5글자 이하, 쉼표(,) 기준으로 구분)\n",
  repeat: "시도할 횟수는 몇 회인가요?\n",
})

const output = Object.freeze({
  result: "실행 결과",
  winner: "최종 우승자 : ",
})

const game = Object.freeze({
  forward: 4,
  min: 0,
  max: 9,
})

export const RACING = Object.freeze({
  input, output, game
})