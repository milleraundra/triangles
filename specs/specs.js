describe ("triangle", function () {
  it("is not a triangle", function() {
    expect(triangle(3,4,20)).to.equal(false);
  });

  it("is an equilateral triangle", function() {
    expect(triangle(3,3,3)).to.equal("equilateral");
  });

  it("is an isosceles triangle", function() {
    expect(triangle(3,3,4)).to.equal("isosceles");
  });

  it("is a scalene triangle", function () {
    expect(triangle(4,5,6)).to.equal("scalene");
  });

});
