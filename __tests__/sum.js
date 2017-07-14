const sum = require("../sum")

describe("sum", () => {

  // Assertions ---------
  // sum() -> 0
  // sum(5) -> 5
  // sum(3, 3, 4) -> 10
  // --------------------

  test("passing nothing gives us 0", () => {
    const result = sum()
    expect(result).toBe(0)
  })

  test("passing a single number should return the same number", () => {
    const result = sum(5)
    expect(result).toEqual(5)
  })

  test("passing any number of numbers returns their sum", () => {
    const result = sum(3, 3, 4, 20, 1)
    expect(result).toBe(31)
  })

})
