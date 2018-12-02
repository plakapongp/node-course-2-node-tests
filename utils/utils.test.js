const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
            // if(res != 44){
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
            //throw new Error('Value not correct');
        });
    })
    
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    })
    
    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
        // if(res != 9){
        //     throw new Error(`Expected 9, but got ${res}`);
        // }
    })
    
    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});



// it('should expect some values', () => {
//     //expect(12).toNotBe(11);
//     //expect({name: 'Andrew'}).toEqual({'name': 'Andrew'});
//     expect([2,3,4]).toInclude(5);
//     expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Thailand'
//     }).toExclude({
//         age: 23
//     })
// })

// it('should set firstName and lastname', () => {
//     var user = {location: 'Thailand', age: 25};
//     var res = utils.setName(user, 'Andrew Mead');
//     expect(res).toInclude({
//         firstName: 'Andrew',
//         lastName: 'Mead'
//     });
// });