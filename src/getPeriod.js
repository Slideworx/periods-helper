/**
 * @typedef {Object} Period
 *
 * @property {Object} date
 *   @property {Date} date.from
 *   @property {Date} date.to
 * @property {string} type
 * @property {string} value
 */



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

function getISOWeeks(y) {
  var d,
    isLeap;

  d = new Date(y, 0, 1);
  isLeap = new Date(y, 1, 29).getMonth() === 1;

  //check for a Jan 1 that's a Thursday or a leap year that has a 
  //Wednesday jan 1. Otherwise it's 52
  return d.getDay() === 4 || isLeap && d.getDay() === 3 ? 53 : 52
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
      if (number < 0) {
        const newYear = year - 1;
        const noOfWeeksInYear = getISOWeeks(newYear);
        const newWeekNo = noOfWeeksInYear + number + 1;
        
        const tempResult = getPeriod(`${W}_${newYear}_${newWeekNo}`);

        result.date = tempResult.date;
        result.value = tempResult.value;
      } else {
        const simple = new Date(year, 0, 1 + (number - 1) * 7);
        const dow = simple.getDay();
        const ISOweekStart = simple;

        if (dow <= 4) {
          ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        } else {
          ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        }

        const ISOweekEnd = new Date(ISOweekStart.getTime());
        ISOweekEnd.setDate(ISOweekStart.getDate() + 7);
        ISOweekEnd.setSeconds(ISOweekEnd.getSeconds() - 1);

        result.date.from = ISOweekStart;
        result.date.to = ISOweekEnd;
        result.value = `${ year } ${ W }${ addLeadingZero(number) }`;
      }

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