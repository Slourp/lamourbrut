// eslint-disable-next-line import/prefer-default-export
export function duplicateIndexes(arr) {
  const newArr = []
  arr.forEach((item) => {
    newArr.push(item)
    newArr.push(item * 500)
  })
  return newArr
}
