import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it("Returns the maximum value in the array", () => {
      expect(findMax([1, 2, 3])).to.equal(3);
    });

    it("Throws error if input is not an array", () => {
      expect(() => findMax("not an array")).to.throw("Input must be an array");
    });

    it("Works with negative numbers", () => {
      expect(findMax([-1, -2, -3])).to.equal(-1);
    });
  });

  describe('findMin', () => {
    it("Returns the minimum value in the array", () => {
      expect(findMin([1, 2, 3])).to.equal(1);
    });

    it("Throws error if input is not an array", () => {
      expect(() => findMin("not an array")).to.throw("Input must be an array");
    });

    it("Works with negative numbers", () => {
      expect(findMin([-1, -2, -3])).to.equal(-3);
    });
  });

  describe('removeDuplicates', () => {
    it("Removes duplicates from the array", () => {
      expect(removeDuplicates([1, 2, 2, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it("Throws error if input is not an array", () => {
      expect(() => removeDuplicates("not an array")).to.throw("Input must be an array");
    });

    it("Works with empty array", () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it("Works with array without duplicates", () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
  });
}); 