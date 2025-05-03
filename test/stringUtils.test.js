import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize - normal case', () => {
    it('Makes the first letter of the string uppercase', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });
  });

  describe('capitalize - input validation', () => {
    it('Throws error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('capitalize - empty string', () => {
    it('Works with empty string', () => {
      expect(capitalize('')).to.equal('');
    });
  });

  describe('capitalize - single letter', () => {
    it('Works with single letter', () => {
      expect(capitalize('a')).to.equal('A');
    });
  });

  describe('reverseString - normal case', () => {
    it('Reverses the string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });
  });

  describe('reverseString - input validation', () => {
    it('Throws error if input is not a string', () => {
      expect(() => reverseString(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString - empty string', () => {
    it('Works with empty string', () => {
      expect(reverseString('')).to.equal('');
    });
  });

  describe('reverseString - palindrome', () => {
    it('Works with palindrome', () => {
      expect(reverseString('level')).to.equal('level');
    });
  });

  describe('isPalindrome - true case', () => {
    it('Checks if string is a palindrome - true case', () => {
      expect(isPalindrome('level')).to.equal(true);
    });
  });

  describe('isPalindrome - false case', () => {
    it('Checks if string is a palindrome - false case', () => {
      expect(isPalindrome('hello')).to.equal(false);
    });
  });

  describe('isPalindrome - input validation', () => {
    it('Throws error if input is not a string', () => {
      expect(() => isPalindrome(123)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome - empty string', () => {
    it('Works with empty string', () => {
      expect(isPalindrome('')).to.equal(true);
    });
  });

  describe('isPalindrome - single letter', () => {
    it('Works with single letter', () => {
      expect(isPalindrome('a')).to.equal(true);
    });
  });
});
