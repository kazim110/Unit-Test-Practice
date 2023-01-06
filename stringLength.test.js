
const stringLength = require('./stringLength.js');

function stringOutOfBound(){
    throw new Error('your string has invalid size of char')
}

test('return the length of string',()=>{
    expect(stringLength("k a z imgfhtj ")).toBe(10);
    expect(()=>stringOutOfBound()).toThrow();
    expect(()=>stringOutOfBound()).toThrow(Error);
});