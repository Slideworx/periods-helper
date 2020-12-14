/**
 * @typedef {Object} Period
 *
 * @property {Object} date
 *   @property {Date} date.from
 *   @property {Date} date.to
 * @property {string} type
 * @property {string} value
 */



const Y = 'Y';

const H = 'H';
const H_RY = 'HRY';
const H_YTD = 'HYTD';

const Q = 'Q';
const Q_RY = 'QRY';
const Q_YTD = 'QYTD';

const BM = 'BM';
const BM_RY = 'BMRY';
const BM_YTD = 'BMYTD';

const M = 'M';
const M_RY = 'MRY';
const M_YTD = 'MYTD';

const W = 'W';
const W_YTD = 'WYTD';

const RY = 'RY';
const YTD = 'YTD';



function addLeadingZero(number) {
  return number < 10 ? `0${ number }` : number;
}

function getMonday(year) {
  const day = new Date(year, 0, 1).getDay() || 7;

  return new Date(year, 0, day < 5 ? 2 - day : 9 - day).getTime();
}



/**
 * @const {Object} dictionary
 * @access public
 */
export const dictionary = {
  [Y]: {
    description: 'Years',
    label: 'Year'
  },

  [H]: {
    description: 'Half-years',
    label: 'Half-year'
  },
  [H_RY]: {
    description: `2 half-years ending at the given ${ H }`,
    label: 'Rolling year (from half-years)'
  },
  [H_YTD]: {
    description: 'Cumulative half-years from beginning of the year',
    label: 'Year-to-date (from half-years)'
  },

  [Q]: {
    description: 'Quarters',
    label: 'Quarter'
  },
  [Q_RY]: {
    description: `4 quarters ending at the given ${ Q }`,
    label: 'Rolling year (from quarters)'
  },
  [Q_YTD]: {
    description: 'Cumulative quarters from beginning of the year',
    label: 'Year-to-date (from quarters)'
  },

  [BM]: {
    description: 'Bi-months',
    label: 'Bi-month'
  },
  [BM_RY]: {
    description: `6 bi-months ending at the given ${ BM }`,
    label: 'Rolling year (from bi-months)'
  },
  [BM_YTD]: {
    description: 'Cumulative bi-months from beginning of the year',
    label: 'Year-to-date (from bi-months)'
  },

  [M]: {
    description: 'Months',
    label: 'Month'
  },
  [M_RY]: {
    description: `12 months ending at the given ${ M }`,
    label: 'Rolling year (from months)'
  },
  [M_YTD]: {
    description: 'Cumulative months from beginning of the year',
    label: 'Year-to-date (from months)'
  },

  [W]: {
    description: 'Weeks',
    label: 'Week'
  },
  [W_YTD]: {
    description: 'Cumulative weeks from beginning of the year',
    label: 'Year-to-date (from weeks)'
  }
};



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
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  switch (type) {
    case Y: {
      return `${ type }_${ year }`;
    }

    case H:
    case H_RY:
    case H_YTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 6) }`;
    }

    case Q:
    case Q_RY:
    case Q_YTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 3) }`;
    }

    case BM:
    case BM_RY:
    case BM_YTD: {
      return `${ type }_${ year }_${ Math.ceil(month / 2) }`;
    }

    case M:
    case M_RY:
    case M_YTD: {
      return `${ type }_${ year }_${ month }`;
    }

    case W:
    case W_YTD: {
      const monday = getMonday(year);

      return `${ type }_${ year }_${ Math.ceil((date - monday) / 604800000) }`;
    }

    default: {
      throw new Error('Invalid type');
    }
  }
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
      number = Math.abs(number + quantity) % quantity || quantity;
    }
  }

  const result = {
    date: {},
    type: dictionary[type]
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
    case H_RY:
    case H_YTD: {
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
    case Q_RY:
    case Q_YTD: {
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
    case BM_RY:
    case BM_YTD: {
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
    case M_RY:
    case M_YTD: {
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
    case W_YTD: {
      const monday = getMonday(year);

      result.date.from = new Date(
        monday + 7 * (number - 1) * 86400000
      );

      result.date.to = new Date(
        monday + (7 * number - 1) * 86400000
      );

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
  const quantity = Math.abs(range);

  const result = [];

  switch (type) {
    case Y: {
      for (let i = 0; i < quantity; i++) {
        result[ascending ? 'push' : 'unshift'](`${ type }_${ ascending ? year + i : year - i }`);
      }

      break;
    }

    case H:
    case H_RY:
    case H_YTD:

    case Q:
    case Q_RY:
    case Q_YTD:

    case BM:
    case BM_RY:
    case BM_YTD:

    case M:
    case M_RY:
    case M_YTD:

    case W:
    case W_YTD: {
      for (let i = 0; i < quantity; i++) {
        result[ascending ? 'push' : 'unshift'](`${ type }_${ year }_${ ascending ? number + i : number - i }`);
      }

      break;
    }

    default: {
      throw new Error('Invalid type');
    }
  }

  return result.map(getPeriod);
}



/**
 * @const {Object} types
 * @access public
 */
export const types = {
  [Y]: Y,

  [H]: H,
  [H_RY]: H_RY,
  [H_YTD]: H_YTD,

  [Q]: Q,
  [Q_RY]: Q_RY,
  [Q_YTD]: Q_YTD,

  [BM]: BM,
  [BM_RY]: BM_RY,
  [BM_YTD]: BM_YTD,

  [M]: M,
  [M_RY]: M_RY,
  [M_YTD]: M_YTD,

  [W]: W,
  [W_YTD]: W_YTD
};