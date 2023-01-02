/* eslint-disable @typescript-eslint/comma-dangle */
type Concat<TFirstParam extends any[], TSecondParam extends any[]> = [
  ...TFirstParam,
  ...TSecondParam
]
