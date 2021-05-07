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

function isValidByRegex(text, regex) {
  return !!text.match(regex);
}

/* 
  e.g. 2018 -> Y_2018
*/
function validateY(text) {
  return isValidByRegex(text, /^\d{4}$/i);
}

export function getDate(text, type) {
  let valid = false;

  if (type === Y) {
    valid = validateY(text);
    text = `${ Y }_${ text }`;
  } else {
    throw new Error('Invalid type');
  }

  if (!valid) {
    return null;
  }

  let period;
  
  try {
    period = getPeriod(text, type);
  } catch (e) {
    period = null;
  }

  return period;
  /*
  Y -> 2020
  H -> 2020 H1 // borders?
  HRY -> 2020 H1 RY // borders?
  HYTD -> 2020 H1 YTD // borders?
  Q -> 2020 Q1 // borders?
  QRY -> 2020 Q1 RY // borders?
  QYTD -> 2020 Q1 QYTD // borders?
  BM -> 2020.01/02 // borders?
  BMRY -> 2020.01/02 RY // borders?
  BMYTD -> 2020.01/02 YTD // borders?
  M -> 2020.01 // <>.<m>; 1 <= <m> <= 12
  MRY -> 2020.01 RY // ^
  MYTD -> 2020.01 YTD // ^
  W -> 2020 W01 // numberOfWeeks > week > 0
  WYTD -> 2020 W01 ?? ^
  */
}