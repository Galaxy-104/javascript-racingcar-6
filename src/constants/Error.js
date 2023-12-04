const common = Object.freeze({
  blank: "값을 입력해주세요.",
})

const name = Object.freeze({
  letter: "자동차의 이름은 한글, 영어, 숫자만 가능합니다.",
  length: "이름은 5글자 이하로 입력해주세요.",
  lengthNumber: 5,
})

const repeat = Object.freeze({
  notANumber: "입력 값이 숫자가 아닙니다.",
  natural: "1 이상의 자연수를 입력해주세요.",
})

export const INPUT_ERROR = Object.freeze({
  common, name, repeat
})