describe("Passing values into dealerShouldDraw", () => {
  it("Pass two values and return false", () => {
    let hand = [
      { val: 10, displayVal: "10" },
      { val: 9, displayVal: "9" },
    ];
    let result = dealerShouldDraw(hand);
    expect(result).toEqual(false);
  });

  it("Pass two values and return true", () => {
    let hand = [
      { val: 11, displayVal: "Ace" },
      { val: 6, displayVal: "6" },
    ];
    let result = dealerShouldDraw(hand);
    expect(result).toEqual(true);
  });

  it("Pass three values and return false", () => {
    let hand = [
      { val: 10, displayVal: "10" },
      { val: 6, displayVal: "6" },
      { val: 11, displayVal: "Ace" },
    ];
    let result = dealerShouldDraw(hand);
    expect(result).toEqual(false);
  });

  it("Pass four values and return true", () => {
    let hand = [
      { val: 2, displayVal: "2" },
      { val: 4, displayVal: "4" },
      { val: 2, displayVal: "2" },
      { val: 5, displayVal: "5" },
    ];
    let result = dealerShouldDraw(hand);
    expect(result).toEqual(true);
  });
});
