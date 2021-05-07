import { dictionary, types } from '.';
import { getDate } from './getDate';
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

function doTest(text, type, result) {
  if (result !== null) {
    result = getPeriod(result);
  }

  expect(getDate(text, type)).toEqual(result);
}

describe(dictionary[Y].label, () => {
  test(Y, () => {
    doTest('2020', Y, 'Y_2020');
  });

  test(`${ Y } - negative year`, () => {
    doTest('-2020', Y, null);
  });

  test(H, () => {
    doTest('2018 H1', H, 'H_2018_1');
  });

  test(`${ H } - small letter`, () => {
    doTest('2018 h1', H, 'H_2018_1');
  });

  test(`${ H } - negative half year`, () => {
    doTest('2018 H-1', H, null);
  });

  test(HRY, () => {
    doTest('2019 H1 RY', HRY, 'HRY_2019_1');
  });

  test(`${ HRY } - negative half year`, () => {
    doTest('2019 H-1 RY', HRY, null);
  });

  test(`${ HRY } - double HH`, () => {
    doTest('2019 HH1 RY', HRY, null);
  });
});
