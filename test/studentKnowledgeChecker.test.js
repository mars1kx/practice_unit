import { expect } from "chai";
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('Student Knowledge Checker', () => {
  describe('checkStudentKnowledge - all answers correct', () => {
    it("Returns true if all answers are correct", () => {
      const studentAnswers = { 
        question1: "answer1", 
        question2: "answer2" 
      };
      const correctAnswers = { 
        question1: "answer1", 
        question2: "answer2" 
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(true);
    });
  });

  describe('checkStudentKnowledge - incorrect answer value', () => {
    it("Returns false if answer value is incorrect", () => {
      const studentAnswers = { 
        question1: "answer1", 
        question2: "wrong" 
      };
      const correctAnswers = { 
        question1: "answer1", 
        question2: "answer2" 
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(false);
    });
  });

  describe('checkStudentKnowledge - different number of answers', () => {
    it("Returns false if number of answers doesn't match", () => {
      const studentAnswers = { 
        question1: "answer1"
      };
      const correctAnswers = { 
        question1: "answer1", 
        question2: "answer2" 
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(false);
    });
  });

  describe('checkStudentKnowledge - different question keys', () => {
    it("Returns false if question keys don't match", () => {
      const studentAnswers = { 
        question1: "answer1", 
        wrongKey: "answer2" 
      };
      const correctAnswers = { 
        question1: "answer1", 
        question2: "answer2" 
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.equal(false);
    });
  });

  describe('checkStudentKnowledge - empty objects', () => {
    it("Works with empty objects", () => {
      expect(checkStudentKnowledge({}, {})).to.equal(true);
    });
  });
}); 