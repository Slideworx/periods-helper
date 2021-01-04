/**
 * @typedef {Object} Period
 *
 * @property {Object} date
 *   @property {Date} date.from
 *   @property {Date} date.to
 * @property {string} type
 * @property {string} value
 */



import {getNotation} from './getNotation';
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
  WYTD,

  RY = 'RY',
  YTD = 'YTD'
} = types;



function addLeadingZero(number) {
  return number < 10 ? `0${ number }` : number;
}

function getMonday(year) {
  const day = new Date(year, 0, 1).getDay() || 7;

  return new Date(year, 0, day < 5 ? 2 - day : 9 - day).getTime();
}



/**
 * @function getPeriod
 * @access public
 *
 * @param {string} notation
 *
 * @returns {Period}
 */
export function getPeriod(notation) {
  let [
    type,
    year,
    number
  ] = notation.split('_');

  year = Number(year);
  number = Number(number);

  function handleOverflow(quantity) {
    if (number < 1 || number > quantity) {
      year = year + Math.ceil((number - quantity) / quantity);
      number = (number % quantity + quantity) % quantity || quantity;
    }
  }

  const result = {
    type,
    date: {}
  };

  switch (type) {
    case Y: {
      result.date.from = new Date(
        year,
        0,
        1
      );

      result.date.to = new Date(
        year + 1,
        0,
        0
      );

      result.value = `${ year }`;

      break;
    }

    case H:
    case HRY:
    case HYTD: {
      handleOverflow(2);

      result.date.from = new Date(
        year,
        6 * (number - 1),
        1
      );

      result.date.to = new Date(
        year,
        6 * number,
        0
      );

      result.value = `${ year } ${ H }${ number }`;

      break;
    }

    case Q:
    case QRY:
    case QYTD: {
      handleOverflow(4);

      result.date.from = new Date(
        year,
        3 * (number - 1),
        1
      );

      result.date.to = new Date(
        year,
        3 * number,
        0
      );

      result.value = `${ year } ${ Q }${ number }`;

      break;
    }

    case BM:
    case BMRY:
    case BMYTD: {
      handleOverflow(6);

      result.date.from = new Date(
        year,
        2 * (number - 1),
        1
      );

      result.date.to = new Date(
        year,
        2 * number,
        0
      );

      result.value = `${ year }.${ addLeadingZero(2 * number - 1) }/${ addLeadingZero(2 * number) }`;

      break;
    }

    case M:
    case MRY:
    case MYTD: {
      handleOverflow(12);

      result.date.from = new Date(
        year,
        number - 1,
        1
      );

      result.date.to = new Date(
        year,
        number,
        0
      );

      result.value = `${ year }.${ addLeadingZero(number) }`;

      break;
    }

    case W:
    case WYTD: {
      const monday = getMonday(year);

      result.date.from = new Date(
        monday + 7 * (number - 1) * 86400000
      );

      result.date.to = new Date(
        monday + (7 * number - 1) * 86400000
      );

      [
        type,
        year,
        number
      ] = getNotation(result.date.to, type).split('_');

      year = Number(year);
      number = Number(number);

      result.value = `${ year } ${ W }${ addLeadingZero(number) }`;

      break;
    }

    default: {
      throw new Error('Invalid type');
    }
  }

  switch (true) {
    case type.includes(RY): {
      result.date.from = new Date(
        year - 1,
        result.date.to.getMonth() + 1,
        1
      );

      result.value = `${ result.value } ${ RY }`;

      break;
    }

    case type.includes(YTD): {
      result.date.from = new Date(
        year,
        0,
        1
      );

      result.value = `${ result.value } ${ YTD }`;

      break;
    }
  }

  return result;
}