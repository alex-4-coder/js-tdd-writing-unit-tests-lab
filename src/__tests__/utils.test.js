// Your tests here
const {isPalindrome} = require("../utils");

describe("isPalindrome", () => {
    it(" should return true for a single palindrome like racecar", () => {
        expect(isPalindrome("racecar")).toBe(true)
    });
        it("should return false for a non-palindrome like 'car'", () => {
             expect(isPalindrome("car")).toBe(false);
    });
         it("should return true for a mixed-case palindrome like 'racecar'", () => { 
            expect(isPalindrome("racecar")).toBe(true);
    });
         it("should return false for an empty string", () => {
            expect(isPalindrome("")).toBe(false);
        
    });
         it("should throw an error for non-alphabetic characters", () => {
           expect(() => isPalindrome("racecar123")).toThrow("Only alphabetic characters are allowed");
  });
         it("should throw an error if input is not a string", () => {
             expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });

    
});