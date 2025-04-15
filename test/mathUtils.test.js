import { expect } from "chai";
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('Math Utils', () => {
  describe('add - positive numbers', () => {
    it("Adds two positive numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('add - negative numbers', () => {
    it("Adds negative numbers correctly", () => {
      expect(add(-2, -3)).to.equal(-5);
    });
  });

  describe('add - mixed numbers', () => {
    it("Adds a positive and negative number correctly", () => {
      expect(add(2, -3)).to.equal(-1);
    });
  });

  describe('subtract - positive numbers', () => {
    it("Subtracts two positive numbers correctly", () => {
      expect(subtract(5, 3)).to.equal(2);
    });
  });

  describe('subtract - negative numbers', () => {
    it("Subtracts negative numbers correctly", () => {
      expect(subtract(-5, -3)).to.equal(-2);
    });
  });

  describe('subtract - mixed numbers', () => {
    it("Subtracts a negative from a positive number correctly", () => {
      expect(subtract(5, -3)).to.equal(8);
    });
  });

  describe('multiply - positive numbers', () => {
    it("Multiplies two positive numbers correctly", () => {
      expect(multiply(2, 3)).to.equal(6);
    });
  });

  describe('multiply - negative numbers', () => {
    it("Multiplies two negative numbers correctly", () => {
      expect(multiply(-2, -3)).to.equal(6);
    });
  });

  describe('multiply - mixed numbers', () => {
    it("Multiplies a positive and negative number correctly", () => {
      expect(multiply(2, -3)).to.equal(-6);
    });
  });

  describe('divide - positive numbers', () => {
    it("Divides two positive numbers correctly", () => {
      expect(divide(6, 3)).to.equal(2);
    });
  });

  describe('divide - negative numbers', () => {
    it("Divides two negative numbers correctly", () => {
      expect(divide(-6, -3)).to.equal(2);
    });
  });

  describe('divide - mixed numbers', () => {
    it("Divides a positive by a negative number correctly", () => {
      expect(divide(6, -3)).to.equal(-2);
    });
  });

  describe('divide - division by zero', () => {
    it("Throws an error when dividing by zero", () => {
      expect(() => divide(6, 0)).to.throw("Cannot divide by zero");
    });
  });
}); 