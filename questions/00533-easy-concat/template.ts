type Concat<TFirstParam extends any[], TSecondParam extends any[]> = [
  ...TFirstParam,
  ...TSecondParam
]
