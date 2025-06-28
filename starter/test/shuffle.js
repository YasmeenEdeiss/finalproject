import { shuffle } from '../src/Shuffle.js';
import { expect } from 'chai';

describe('shuffle()', () => {
    it('should return a shuffled array with same elements', () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffle([...input]);
        expect(output).to.have.members(input);
        expect(output.join()).to.not.equal(input.join());
    });
});
