const {test, expect} = require('@jest/globals');

const capitalize = require('./index4');

test('capitalize test', () => {
    expect(capitalize('music')).toEqual('Music');
});
