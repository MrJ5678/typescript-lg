function func1(a: string, b?: string): string {
  return 'func1'
}
func1('a')


const func2: (a: number, b: number) => string = function (a:number, b:number): string {
  return 'func2'
}

export {}
