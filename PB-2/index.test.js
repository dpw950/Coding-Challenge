// test cases

var letterCombinations = require('./index')

describe("Letter Combination",()=>{
    it("only number type is allowed",()=>{
        expect(letterCombinations(34)).toBe(true)
        expect(letterCombinations("34")).toStrictEqual(true)
        expect(letterCombinations("34WE")).toStrictEqual([])
    })
})