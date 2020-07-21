var assert = require('assert');
var tArea = require('../triangle.js');


    describe('tArea', function(){
        it('should return 12.5 when the values 5,5 are passed in', function(){
            assert.equal(tArea(5,5),12.5);
        });
    });

