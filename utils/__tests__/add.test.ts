import add from "../add"


test("add", () => {
  expect(add()).toEqual(0)
  expect(add(5)).toEqual(5)
  expect(add(1,2,3,4)).toEqual(10)
})