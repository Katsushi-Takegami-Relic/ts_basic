//ただ一つだけエクスポートするものがある
export default function primitiveSample() {
  //string
  const name = 'かっつん' //name = 123
  console.log('primitive sample 1:', typeof name, name)

  //number
  const age = 25 // age = '25'
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = true //isSingle = 'true'
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
