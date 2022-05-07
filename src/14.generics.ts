function createNumberArray(length:number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}

function createArray<T>(length:number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

const res = createNumberArray(3, 100)
const res2 = createArray<string>(5, "jld")

export {}