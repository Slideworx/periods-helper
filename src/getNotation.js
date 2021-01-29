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



function getMonday(year) {
  const day = new Date(year, 0, 1).getDay() || 7;

  return new Date(year, 0, day < 5 ? 2 - day : 9 - day).getTime();
}



/**
 * @function getNotation
 * @access public
 *
 * @param {Date} date
 * @param {string} type
 *
 * @returns {string}
 */
export function getNotation(date, type) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;

  switch (type) {
    case Y: {
      return `${ type }_${ year }`;
    }

    case H:
    case HRY:
    case HYTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 6) }`;
    }

    case Q:
    case QRY:
    case QYTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 3) }`;
    }

    case BM:
    case BMRY:
    case BMYTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 2) }`;
    }

    case M:
    case MRY:
    case MYTD: {
      return `${ type }_${ year }_${ month }`;
    }

    case W:
    case WYTD: {
      let monday = getMonday(year);

      if (date < monday) {
        year = year - 1;

        monday = getMonday(year);
      }

      return `${ type }_${ year }_${ Math.ceil((date - monday) / 604800000) }`;
    }

    default: {
      throw new Error('Invalid type');
    }
  }
}