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
const HRY = 'HRY';
const HYTD = 'HYTD';

const Q = 'Q';
const QRY = 'QRY';
const QYTD = 'QYTD';

const BM = 'BM';
const BMRY = 'BMRY';
const BMYTD = 'BMYTD';

const M = 'M';
const MRY = 'MRY';
const MYTD = 'MYTD';

const W = 'W';
const WYTD = 'WYTD';

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
  [HRY]: {
    description: `2 half-years ending at the given ${ H }`,
    label: 'Rolling year (from half-years)'
  },
  [HYTD]: {
    description: 'Cumulative half-years from beginning of the year',
    label: 'Year-to-date (from half-years)'
  },

  [Q]: {
    description: 'Quarters',
    label: 'Quarter'
  },
  [QRY]: {
    description: `4 quarters ending at the given ${ Q }`,
    label: 'Rolling year (from quarters)'
  },
  [QYTD]: {
    description: 'Cumulative quarters from beginning of the year',
    label: 'Year-to-date (from quarters)'
  },

  [BM]: {
    description: 'Bi-months',
    label: 'Bi-month'
  },
  [BMRY]: {
    description: `6 bi-months ending at the given ${ BM }`,
    label: 'Rolling year (from bi-months)'
  },
  [BMYTD]: {
    description: 'Cumulative bi-months from beginning of the year',
    label: 'Year-to-date (from bi-months)'
  },

  [M]: {
    description: 'Months',
    label: 'Month'
  },
  [MRY]: {
    description: `12 months ending at the given ${ M }`,
    label: 'Rolling year (from months)'
  },
  [MYTD]: {
    description: 'Cumulative months from beginning of the year',
    label: 'Year-to-date (from months)'
  },

  [W]: {
    description: 'Weeks',
    label: 'Week'
  },
  [WYTD]: {
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
 * @function getType
 * @access public
 *
 * @param {string} value
 *
 * @returns {string}
 */
export function getType(value) {
  function match(string) {
    return new RegExp(string).test(value);
  }

  switch (true) {
    case match('^[0-9]{4}$'): {
      return Y;
    }

    case match(`^[0-9]{4} ${ H }[0-9]`): {
      switch (true) {
        case match(YTD): {
          return HYTD;
        }

        case match(RY): {
          return HRY;
        }

        default: {
          return H;
        }
      }
    }

    case match(`^[0-9]{4} ${ Q }[0-9]`): {
      switch (true) {
        case match(YTD): {
          return QYTD;
        }

        case match(RY): {
          return QRY;
        }

        default: {
          return Q;
        }
      }
    }

    case match('^[0-9]{4}.[0-9]{2}.[0-9]{2}'): {
      switch (true) {
        case match(YTD): {
          return BMYTD;
        }

        case match(RY): {
          return BMRY;
        }

        default: {
          return BM;
        }
      }
    }

    case match('^[0-9]{4}.[0-9]{2}'): {
      switch (true) {
        case match(YTD): {
          return MYTD;
        }

        case match(RY): {
          return MRY;
        }

        default: {
          return M;
        }
      }
    }

    case match(`^[0-9]{4} ${ W }[0-9]{2}`): {
      switch (true) {
        case match(YTD): {
          return WYTD;
        }

        default: {
          return W;
        }
      }
    }

    default: {
      return null;
    }
  }
}



/**
 * @const {Object} types
 * @access public
 */
export const types = {
  [Y]: Y,

  [H]: H,
  [HRY]: HRY,
  [HYTD]: HYTD,

  [Q]: Q,
  [QRY]: QRY,
  [QYTD]: QYTD,

  [BM]: BM,
  [BMRY]: BMRY,
  [BMYTD]: BMYTD,

  [M]: M,
  [MRY]: MRY,
  [MYTD]: MYTD,

  [W]: W,
  [WYTD]: WYTD
};