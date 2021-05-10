import { types } from './types';
import { getPeriod } from './getPeriod';

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

function bindRegexFuncs(
  regex, 
  propertyNames, 
  toNotation, 
  dataValidation = () => true
) {
  const functions =  {
    validate: (text) => {
      return !!text.match(regex);
    },
    getValues: (text) => {
      const match = regex.exec(text);

      const result = {};

      for (let i = 1; i < match.length; i++) {
        result[propertyNames[i - 1]] = match[i];
      }

      return result;
    },
    getNotation: (text) => {
      const values = functions.getValues(text);

      if (!dataValidation(values)) {
        return null;
      }

      return toNotation(values);
    }
  };

  return functions;
}

export function getDate(text, type) {
  let regexFuncs = null;

  text = text.toUpperCase().replace(/\s\s+/g, ' ').trim();

  const bmValidationFunc = ({ firstMonth, secondMonth }) => {
    if (Number(secondMonth) - Number(firstMonth) !== 1) {
      return false;
    }

    if (Number(firstMonth) % 2 === 0) {
      return false;
    }

    if (Number(firstMonth) > 12 || Number(secondMonth) > 12) {
      return false;
    }

    return true;
  };

  if (type === Y) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4})$/i, 
      ['year'],
      ({ year }) => `${ Y }_${ year }`
    );
  } else if (type === H) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) H(\d{1})$/i, 
      ['year', 'halfYear'],
      ({year, halfYear}) => `H_${ year }_${ halfYear }`
    );
  } else if (type === HRY) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) H(\d{1}) RY/i,
      ['year', 'halfYear'],
      ({ year, halfYear }) => `HRY_${ year }_${ halfYear }`
    );
  } else if (type === HYTD) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) H(\d{1}) YTD/i,
      ['year', 'halfYear'],
      ({ year, halfYear }) => `HYTD_${ year }_${ halfYear }`
    );
  } else if (type === Q) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) Q(\d{1})$/i,
      ['year', 'quarterYear'],
      ({ year, quarterYear }) => `Q_${ year }_${ quarterYear }`
    );
  } else if (type === QRY) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) Q(\d{1}) RY$/i,
      ['year', 'quarterYear'],
      ({ year, quarterYear }) => `QRY_${ year }_${ quarterYear }`
    );
  } else if (type === QYTD) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4}) Q(\d{1}) YTD$/i,
      ['year', 'quarterYear'],
      ({ year, quarterYear }) => `QYTD_${ year }_${ quarterYear }`
    );
  } else if (type === BM) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4})\.(\d{2})\/(\d{2})$/i,
      ['year', 'firstMonth', 'secondMonth'],
      ({ year, firstMonth }) => `${ BM }_${ year }_${ Math.floor(Number(firstMonth) / 2) + 1 }`,
      bmValidationFunc
    );
  } else if (type === BMRY) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4})\.(\d{2})\/(\d{2}) RY$/i,
      ['year', 'firstMonth', 'secondMonth'],
      ({ year, firstMonth }) => `${ BMRY }_${ year }_${ Math.floor(Number(firstMonth) / 2) + 1 }`,
      bmValidationFunc
    );
  } else if (type === BMYTD) {
    regexFuncs = bindRegexFuncs(
      /^(\d{4})\.(\d{2})\/(\d{2}) YTD$/i,
      ['year', 'firstMonth', 'secondMonth'],
      ({ year, firstMonth }) => `${ BMYTD }_${ year }_${ Math.floor(Number(firstMonth) / 2) + 1 }`,
      bmValidationFunc
    );
  }

  if (!regexFuncs.validate(text)) {
    return null;
  }

  let period;

  try {
    period = getPeriod(regexFuncs.getNotation(text), type);
  } catch (e) {
    period = null;
  }

  return period;
}

  // Y -> 2020
  // H -> 2020 H1 // borders?
  // HRY -> 2020 H1 RY // borders?
  // HYTD -> 2020 H1 YTD // borders?
  // Q -> 2020 Q1 // borders?
  // QRY -> 2020 Q1 RY // borders?
  // QYTD -> 2020 Q1 QYTD // borders?
  // BM -> 2020.01/02 // borders?
  // BMRY -> 2020.01/02 RY // borders?
  // BMYTD -> 2020.01/02 YTD // borders?
  // M -> 2020.01 // <>.<m>; 1 <= <m> <= 12
  // MRY -> 2020.01 RY // ^
  // MYTD -> 2020.01 YTD // ^
  // W -> 2020 W01 // numberOfWeeks > week > 0
  // WYTD -> 2020 W01 ?? ^