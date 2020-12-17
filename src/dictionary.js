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