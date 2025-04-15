import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax - normal case', () => {
    it("Returns the maximum value in the array", () => {
      expect(findMax([1, 2, 3])).to.equal(3);
    });
  });

  describe('findMax - input validation', () => {
    it("Throws error if input is not an array", () => {
      expect(() => findMax("not an array")).to.throw("Input must be an array");
    });
  });

  describe('findMax - negative numbers', () => {
    it("Works with negative numbers", () => {
      expect(findMax([-1, -2, -3])).to.equal(-1);
    });
  });

  describe('findMin - normal case', () => {
    it("Returns the minimum value in the array", () => {
      expect(findMin([1, 2, 3])).to.equal(1);
    });
  });

  describe('findMin - input validation', () => {
    it("Throws error if input is not an array", () => {
      expect(() => findMin("not an array")).to.throw("Input must be an array");
    });
  });

  describe('findMin - negative numbers', () => {
    it("Works with negative numbers", () => {
      expect(findMin([-1, -2, -3])).to.equal(-3);
    });
  });

  describe('removeDuplicates - normal case', () => {
    it("Removes duplicates from the array", () => {
      expect(removeDuplicates([1, 2, 2, 3, 3])).to.deep.equal([1, 2, 3]);
    });
  });

  describe('removeDuplicates - input validation', () => {
    it("Throws error if input is not an array", () => {
      expect(() => removeDuplicates("not an array")).to.throw("Input must be an array");
    });
  });

  describe('removeDuplicates - empty array', () => {
    it("Works with empty array", () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });
  });

  describe('removeDuplicates - no duplicates', () => {
    it("Works with array without duplicates", () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
  });
}); 