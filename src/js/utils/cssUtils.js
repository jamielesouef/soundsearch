export const objToArray = (obj) => {
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    return Object.keys(obj).filter(key => obj[key]);
  }

  return obj;
};

export const arrayToString = item => (Array.isArray(item) ? item.join(' ') : item);

export const reduceToString = (prev, next) => `${arrayToString(prev)} ${arrayToString(next)}`;

export const toClassString = (...bits) => bits.map(objToArray).reduce(reduceToString);

export default {
  toClassString,
  objToArray,
  arrayToString,
  reduceToString,
};
