import { objToArray, toClassString, reduceToString, arrayToString } from '../cssUtils';

describe('cssUtils', () => {
  describe('toClassString', () => {
    it('should return a string of classes', () => {
      expect(toClassString({ 1: true }, [2, 3], 4, 5, { 6: true, 7: false })).toEqual('1 2 3 4 5 6');
    });
  });

  describe('objToArray', () => {
    it('should return an array with enabled keys', () => {
      const test = {
        foo: true,
        bar: false,
        baz: 'baz',
        qux: 1,
      };

      expect(objToArray(test)).toEqual(['foo', 'baz', 'qux']);
    });

    it('should return an unmodified item if it is not an object', () => {
      expect(objToArray('foo')).toEqual('foo');
      expect(objToArray(['foo'])).toEqual(['foo']);
      expect(objToArray(1)).toEqual(1);
      expect(objToArray(true)).toEqual(true);
      expect(objToArray(undefined)).toEqual(undefined);
    });
  });

  describe('arrayToString', () => {
    it('should convert the array to a string', () => {
      expect(arrayToString([1, 2, 3, 4])).toEqual('1 2 3 4');
    });
  });

  describe('reduceToString', () => {
    it('should convert the array to a string', () => {
      expect([1, 2, 3, 4].reduce(reduceToString)).toEqual('1 2 3 4');
    });
  });
});
