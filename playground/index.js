import objectsHavePartialEquality from "./object-array-filter-partial-equality.js"
import objectsHavePerfectEquality from "./object-array-filter  -perfect-equality.js"

// Match rules
const any = filter => prospect =>
  prospect.every(objectsHavePartialEquality(filter))
const all = filter => prospect =>
  prospect.every(objectsHavePerfectEquality(filter))

// Test array
let array = [
  { a: 0, b: 0 },
  { a: 0, b: 1 },
  { a: 1, b: 0 },
  { a: 1, b: 1 },
  { a: 0, b: 0 },
  { a: 1 },
  { b: 1 },
]

array.filter(any({ a: 0 }))
// [{ a: 0, b: 0 },{ a: 0, b: 1 },{ a: 0, b: 0 }]

array.filter(any({ a: 1 }))
// [{ a: 1, b: 0 },{ a: 1, b: 1 },{ a: 1 }]

array.filter(all({ a: 0 }))
// []

array.filter(all({ a: 1 }))
// [{ a: 1 }]

array.filter(any({ a: 0, b: 0 }))
// [{a: 0, b: 0 },{a: 0, b: 1 },{a: 1, b: 0 },{a: 0, b: 0 }]

array.filter(any({ a: 1, b: 1 }))
// [{a: 0, b: 1 },{a: 1, b: 0 },{a: 1, b: 1 }]

array.filter(all({ a: 0, b: 0 }))
// [{ a: 0, b: 0 },{ a: 0, b: 0 }]

array.filter(all({ a: 0, b: 1 }))
// [{ a: 0, b: 1 }]

array.filter(all({ a: 1, b: 0 }))
// [{ a: 1, b: 0 }]

array.filter(all({ a: 1, b: 1 }))
// [{ a: 1, b: 1 }]
