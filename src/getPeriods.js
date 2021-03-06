/**
 * @typedef {Object} Period
 *
 * @property {Object} date
 *   @property {Date} date.from
 *   @property {Date} date.to
 * @property {string} type
 * @property {string} value
 */



import {getPeriod} from './getPeriod';
import {types} from './types';



const {
  Y,

  H,
  HRY,
  HYTD,

  Q,
  QRY,
  QYTD,

  BM,
  BMRY,
  BMYTD,

  M,
  MRY,
  MYTD,

  W,
  WYTD
} = types;



/**
 * @function getPeriods
 * @access public
 *
 * @param {string} notation
 * @param {number} range
 *
 * @returns {Array<Period>}
 */
export function getPeriods(notation, range) {
  let [
    type,
    year,
    number
  ] = notation.split('_');

  year = Number(year);
  number = Number(number);

  const ascending = range > 0;
  let quantity = Math.abs(range);

  const result = [];

  switch (type) {
    case Y: {
      for (let i = 0; i < quantity; i++) {
        result[ascending ? 'push' : 'unshift'](`${ type }_${ ascending ? year + i : year - i }`);
      }

      break;
    }

    case H:
    case HRY:
    case HYTD:

    case Q:
    case QRY:
    case QYTD:

    case BM:
    case BMRY:
    case BMYTD:

    case M:
    case MRY:
    case MYTD:

    case W:
    case WYTD: {
      let i = ascending ? 0 : quantity;
      if (!ascending) {
        quantity = 0;
      }
      const condition = () => {
        if (ascending) {
          return i < quantity;
        } else {
          return i > quantity;
        }
      };
      const finalExpression = () => {
        if (ascending) {
          i++;
        } else {
          i--;
        }
      };
      
      while(condition()) {
        const nextNumber = ascending ? number + i : (number - i);

        if (nextNumber === 0) {
          quantity--;
          finalExpression();
          continue;
        }

        result[ascending ? 'push' : 'unshift'](`${type}_${year}_${nextNumber}`);

        finalExpression();
      }

      if (!ascending) {
        result.reverse();
      }

      break;
    }

    default: {
      throw new Error('Invalid type');
    }
  }

  return result.map(getPeriod);
}