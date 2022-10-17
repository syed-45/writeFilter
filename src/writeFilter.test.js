const myFilter = require("./writeFilter");

test("filters array based on elements passing condition in predicateFn", () => {
  expect(([10, 50, -20, -10, 100], v => v < 11)).toBe([10, -20, -10]);
  expect(("AbcDeFgHI".split(""), ch => ch.toUpperCase() === ch)).toBe(["A", "D", "F", "H", "I"]);
});


