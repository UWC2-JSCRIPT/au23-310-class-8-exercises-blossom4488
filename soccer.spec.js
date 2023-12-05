describe("if the result array results in a function", () => {
  it("the result is a string", () => {
    const RESULT_VALUES = {
      w: 3,
      d: 1,
      l: 0,
    };
    const result = "w";
    expect(result).toEqual("w");
  });
});

describe("total points", () => {
  it("calculate the total points", () => {
    const result = getTotalPoints("wwddll");
    expect(result).toEqual(8);
  });
});

describe("different teams with total points", () => {
  it("calculate the total points", () => {
    const teams = [
      { name: "Gaints", results: "wwwlld" },
      { name: "Lilies", results: "wwlldd" },
      { name: "Flower Power", results: "wwwwllld" },
    ];
    const resultString = orderTeams(...teams);
    const expectedResult = ["Gaints: 10", "Lilies: 8", "Flower Power: 13"];
    expect(resultString).toContain(expectedResult[0]);
    expect(resultString).toContain(expectedResult[1]);
    expect(resultString).toContain(expectedResult[2]);
  });
});
