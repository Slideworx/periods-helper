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
  const d = new Date(y, 0, 1);
  const isLeap = new Date(y, 1, 29).getMonth() === 1;

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

  const result = {
    type,
    date: {}
  };

  let newMonthFrom;

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
        1
      );
      result.date.to.setSeconds(result.date.to.getSeconds() - 1);

      result.value = `${ year }`;

      break;
    }

    case H:
    case HRY:
    case HYTD: {
      newMonthFrom = number > 0 ? 6 * (number - 1) : 6 * number;

      result.date.from = new Date(
        year,
        newMonthFrom,
        1
      );

      result.date.to = new Date(
        year,
        newMonthFrom + 6,
        1
      );
      result.date.to.setSeconds(result.date.to.getSeconds() - 1);

      result.value = `${ result.date.from.getFullYear() } ${ H }${ Math.floor((result.date.from.getMonth() + 1) / 6) + 1 }`;

      break;
    }

    case Q:
    case QRY:
    case QYTD: {
      newMonthFrom = number > 0 ? 3 * (number - 1) : 3 * number;

      result.date.from = new Date(
        year,
        newMonthFrom,
        1
      );

      result.date.to = new Date(
        year,
        newMonthFrom + 3,
        1
      );
      result.date.to.setSeconds(result.date.to.getSeconds() - 1);

      result.value = `${ result.date.from.getFullYear() } ${ Q }${ Math.floor((result.date.from.getMonth() + 1)/ 3) + 1 }`;

      break;
    }

    case BM:
    case BMRY:
    case BMYTD: {
      newMonthFrom = number > 0 ? 2 * (number - 1) : 2 * number;

      result.date.from = new Date(
        year,
        newMonthFrom,
        1
      );

      result.date.to = new Date(
        year,
        newMonthFrom + 2,
        1
      );
      result.date.to.setSeconds(result.date.to.getSeconds() - 1);

      result.value = `${ result.date.from.getFullYear() }.${ addLeadingZero(result.date.from.getMonth() + 1) }/${ addLeadingZero(result.date.to.getMonth() + 1) }`;

      break;
    }

    case M:
    case MRY:
    case MYTD: {
      newMonthFrom = number > 0 ? number - 1 : number;

      result.date.from = new Date(
        year,
        newMonthFrom,
        1
      );

      result.date.to = new Date(
        year,
        newMonthFrom + 1,
        1
      );
      result.date.to.setSeconds(result.date.to.getSeconds() - 1);

      result.value = `${ result.date.from.getFullYear() }.${ addLeadingZero(result.date.from.getMonth() + 1) }`;

      break;
    }

    case W:
    case WYTD: {
      if (number < 0) {
        let nYear = year;
        let nNumber = number;
        let currentNYearWeeks;

        while (true) {
          nYear--;
          currentNYearWeeks = getISOWeeks(nYear);

          if (Math.abs(nNumber) > currentNYearWeeks) {
            nNumber += currentNYearWeeks;
          } else {
            nNumber = currentNYearWeeks + nNumber + 1;
            break;
          }
        }

        const tempResult = getPeriod(`${W}_${nYear}_${nNumber}`);

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
        result.value = `${year} ${W}${addLeadingZero(number)}`;
      }

      break;
    }

    default: {
      throw new Error('Invalid type');
    }
  }

  if (type.includes(RY)) {
    result.date.from = new Date(
      result.date.to.getFullYear(),
      result.date.to.getMonth() + 1 - 12,
      1
    );

    result.value = `${result.value} ${RY}`;
  } else if (type.includes(YTD)) {
    result.date.from = new Date(
      result.date.from.getFullYear(),
      0,
      1
    );

    result.value = `${result.value} ${YTD}`;

    if (type.includes(WYTD)) {
      result.date.from = getPeriod(`W_${year}_1`).date.from;
    }
  }

  return result;
}