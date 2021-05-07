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

  test(HYTD, () => {
    doTest('2019 H1 YTD', HYTD, 'HYTD_2019_1');
  });

  test(`${ HYTD } - negative half year`, () => {
    doTest('2019 H-1 YTD', HYTD, null);
  });

  test(Q, () => {
    doTest('2018 Q2', Q, 'Q_2018_2');
  });

  test(`${ Q } - handle multiple spaces`, () => {
    doTest('2018      Q2', Q, 'Q_2018_2');
  });

  test(`${ Q } - trim`, () => {
    doTest('         2018 Q2     ', Q, 'Q_2018_2');
  });

  test(`${ Q } - negative quarter year`, () => {
    doTest('2018 Q-2', Q, null);
  });

  test(QRY, () => {
    doTest('2019 Q2 RY', QRY, 'QRY_2019_2');
  });

  test(`${ QRY } - negative quarter year` , () => {
    doTest('2019 Q-2 RY', QRY, null);
  });
});
