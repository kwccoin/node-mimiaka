/* global describe it */
const assert = require('assert');
const { parseValue, sgfGetValueOf1stRoot, isLive } = require('../lib/sgf.js');

describe('sgf', function() {
    describe('parseValue', function() {
        it('should return string', function() {
            assert.equal(parseValue('[aa]'), 'aa');
        });
        it('should return array', function() {
            assert.deepEqual(parseValue('[aa][bb][cc]'), ['aa', 'bb', 'cc']);
        });
    });
    describe('sgfGetValueOf1stRoot', function() {
        it('should return string', function() {
            assert.equal(sgfGetValueOf1stRoot('(;GM[1])', 'GM'), '1');
        });
        it('should return array', function() {
            assert.deepEqual(sgfGetValueOf1stRoot('(;GM[1]AB[aa][bb][cc])', 'AB'), ['aa', 'bb', 'cc']);
        });
    });
    describe('isLive', function() {
        it('should return true', function() {
            assert.equal(isLive('(;GM[1])'), true);
        });
        it('should return false', function() {
            assert.equal(isLive('(;GM[1]RE[B+R])'), false);
        });
    });
});
