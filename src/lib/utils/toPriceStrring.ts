export const toPriceString = (number:number):string => {
  let iter = number.toString().length
  let str = number.toString().split('').map(i => {
    iter -= 1
    if (iter % 3 === 0 && iter) return i + ' '
    return i
  })
  return str.join('')
}