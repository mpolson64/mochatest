var assert = require('assert');
var tools = require('../tools');

describe('Tools', function() {
    describe('#add2(n)', function() {
        it('should return 3 when passed 1', function() {
            assert.equal(3, tools.add2(1));
        });
    });
});
