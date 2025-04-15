import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it("Makes the first letter of the string uppercase", () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it("Throws error if input is not a string", () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });

    it("Works with empty string", () => {
      expect(capitalize('')).to.equal('');
    });

    it("Works with single letter", () => {
      expect(capitalize('a')).to.equal('A');
    });
  });

  describe('reverseString', () => {
    it("Reverses the string", () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it("Throws error if input is not a string", () => {
      expect(() => reverseString(123)).to.throw("Input must be a string");
    });

    it("Works with empty string", () => {
      expect(reverseString('')).to.equal('');
    });

    it("Works with palindrome", () => {
      expect(reverseString('level')).to.equal('level');
    });
  });

  describe('isPalindrome', () => {
    it("Checks if the string is a palindrome", () => {
      expect(isPalindrome('level')).to.equal(true);
      expect(isPalindrome('hello')).to.equal(false);
    });

    it("Throws error if input is not a string", () => {
      expect(() => isPalindrome(123)).to.throw("Input must be a string");
    });

    it("Works with empty string", () => {
      expect(isPalindrome('')).to.equal(true);
    });

    it("Works with single letter", () => {
      expect(isPalindrome('a')).to.equal(true);
    });
  });
}); 