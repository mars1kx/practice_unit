import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../src/usersListUtils.js';

describe('Users List Utils', () => {
  const users = [
    { id: 1, name: 'John', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Anna', age: 30, email: 'anna@example.com' },
    { id: 3, name: 'Bob', age: 20, email: 'bob@example.com' },
  ];

  describe('filterUsersByAge - normal case', () => {
    it('Filters users by age', () => {
      const result = filterUsersByAge(users, 25, 30);
      expect(result).to.deep.equal([
        { id: 1, name: 'John', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Anna', age: 30, email: 'anna@example.com' },
      ]);
    });
  });

  describe('filterUsersByAge - no matches', () => {
    it('Returns empty array when no users match age range', () => {
      const result = filterUsersByAge(users, 40, 50);
      expect(result).to.deep.equal([]);
    });
  });

  describe('filterUsersByAge - input validation', () => {
    it('Throws error if users is not an array', () => {
      expect(() => filterUsersByAge('not an array', 25, 30)).to.throw('Users must be an array');
    });
  });

  describe('filterUsersByAge - empty array', () => {
    it('Works with empty array', () => {
      expect(filterUsersByAge([], 25, 30)).to.deep.equal([]);
    });
  });

  describe('filterUsersByAge - boundary values', () => {
    it('Includes users at boundary ages', () => {
      const result = filterUsersByAge(users, 20, 25);
      expect(result).to.deep.equal([
        { id: 1, name: 'John', age: 25, email: 'john@example.com' },
        { id: 3, name: 'Bob', age: 20, email: 'bob@example.com' },
      ]);
    });
  });

  describe('sortUsersByName - normal case', () => {
    it('Sorts users by name', () => {
      const result = sortUsersByName(users);
      expect(result).to.deep.equal([
        { id: 2, name: 'Anna', age: 30, email: 'anna@example.com' },
        { id: 3, name: 'Bob', age: 20, email: 'bob@example.com' },
        { id: 1, name: 'John', age: 25, email: 'john@example.com' },
      ]);
    });
  });

  describe('sortUsersByName - input validation', () => {
    it('Throws error if users is not an array', () => {
      expect(() => sortUsersByName('not an array')).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName - empty array', () => {
    it('Works with empty array', () => {
      expect(sortUsersByName([])).to.deep.equal([]);
    });
  });

  describe('sortUsersByName - same names', () => {
    it('Maintains original array order for same names', () => {
      const usersWithSameNames = [
        { id: 1, name: 'John', age: 25, email: 'john1@example.com' },
        { id: 2, name: 'John', age: 30, email: 'john2@example.com' },
      ];
      const result = sortUsersByName(usersWithSameNames);
      expect(result).to.deep.equal(usersWithSameNames);
    });
  });

  describe('findUserById - normal case', () => {
    it('Finds user by ID', () => {
      const result = findUserById(users, 2);
      expect(result).to.deep.equal({ id: 2, name: 'Anna', age: 30, email: 'anna@example.com' });
    });
  });

  describe('findUserById - user not found', () => {
    it('Returns null if user is not found', () => {
      const result = findUserById(users, 999);
      expect(result).to.equal(null);
    });
  });

  describe('findUserById - input validation', () => {
    it('Throws error if users is not an array', () => {
      expect(() => findUserById('not an array', 1)).to.throw('Users must be an array');
    });
  });

  describe('findUserById - empty array', () => {
    it('Works with empty array', () => {
      expect(findUserById([], 1)).to.equal(null);
    });
  });

  describe('findUserById - duplicate IDs', () => {
    it('Finds first user if multiple users have same ID', () => {
      const usersWithDuplicateIds = [
        { id: 1, name: 'John', age: 25, email: 'john1@example.com' },
        { id: 1, name: 'Jane', age: 30, email: 'jane@example.com' },
      ];
      const result = findUserById(usersWithDuplicateIds, 1);
      expect(result).to.deep.equal(usersWithDuplicateIds[0]);
    });
  });

  describe('isEmailTaken - true case', () => {
    it('Returns true if email is taken', () => {
      expect(isEmailTaken(users, 'anna@example.com')).to.equal(true);
    });
  });

  describe('isEmailTaken - false case', () => {
    it('Returns false if email is not taken', () => {
      expect(isEmailTaken(users, 'unknown@example.com')).to.equal(false);
    });
  });

  describe('isEmailTaken - input validation', () => {
    it('Throws error if users is not an array', () => {
      expect(() => isEmailTaken('not an array', 'test@example.com')).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken - empty array', () => {
    it('Works with empty array', () => {
      expect(isEmailTaken([], 'test@example.com')).to.equal(false);
    });
  });

  describe('isEmailTaken - case sensitivity', () => {
    it('Is case sensitive for email comparison', () => {
      expect(isEmailTaken(users, 'ANNA@EXAMPLE.COM')).to.equal(false);
    });
  });

  describe('isEmailTaken - duplicate emails', () => {
    it('Returns true for first matching email', () => {
      const usersWithDuplicateEmails = [
        { id: 1, name: 'John', age: 25, email: 'test@example.com' },
        { id: 2, name: 'Jane', age: 30, email: 'test@example.com' },
      ];
      expect(isEmailTaken(usersWithDuplicateEmails, 'test@example.com')).to.equal(true);
    });
  });
});
