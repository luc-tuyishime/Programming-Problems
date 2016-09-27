//Intersection: Write a function called intersection that takes two arrays as arguments and returns an array of the items that are in both input arrays. For example => intersection([1,2,3], [1,3,5]) should return [1,3]. Write tests!
var expect = chai.expect;

describe('Intersection', function() {
  it('intersection([1,2,3], [1,3,5]) should return [1,3]', function() {
    expect(intersection([1,2,3], [1,3,5])).to.deep.equal([1,3]);
  });
  it('intersection([2,4,6], [4,6,8]) should return [4,6]', function() {
    expect(intersection([2,4,6], [4,6,8])).to.deep.equal([4,6]);
  });
});
