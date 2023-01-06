const capitalization = require('./capitalizeString.js')

test('first latter of the word must be capital',()=>{
    expect(capitalization('kazim')).toBe('Kazim');
});