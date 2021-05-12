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
  test('type equals null', () => {
    doTest('2020', null, null);
  });

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

  test(`${ H } - half year bigger than 2`, () => {
    doTest('2018 H3', H, null);
  });

  test(`${ H } - half year equals 0`, () => {
    doTest('2018 H0', H, null);
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

  test(`${ HRY } - half year bigger than 2`, () => {
    doTest('2018 H3 RY', HRY, null);
  });

  test(`${ HRY } - half year equals 0`, () => {
    doTest('2018 H0 RY', HRY, null);
  });

  test(HYTD, () => {
    doTest('2019 H1 YTD', HYTD, 'HYTD_2019_1');
  });

  test(`${ HYTD } - negative half year`, () => {
    doTest('2019 H-1 YTD', HYTD, null);
  });

  test(`${ HYTD } - half year bigger than 2`, () => {
    doTest('2018 H3 YTD', HYTD, null);
  });

  test(`${ HYTD } - half year equals 0`, () => {
    doTest('2018 H0 YTD', HYTD, null);
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

  test(`${ Q } - half year bigger than 4`, () => {
    doTest('2018 Q5', Q, null);
  });

  test(`${ Q } - half year equals 0`, () => {
    doTest('2018 Q0', Q, null);
  });

  test(QRY, () => {
    doTest('2019 Q2 RY', QRY, 'QRY_2019_2');
  });

  test(`${ QRY } - negative quarter year` , () => {
    doTest('2019 Q-2 RY', QRY, null);
  });

  test(`${ QRY } - half year bigger than 4`, () => {
    doTest('2018 Q5 RY', QRY, null);
  });

  test(`${ QRY } - half year equals 0`, () => {
    doTest('2018 Q0 RY', QRY, null);
  });

  test(QYTD, () => {
    doTest('2019 Q1 YTD', QYTD, 'QYTD_2019_1');
  });

  test(`${ QYTD } - negative quarter year`, () => {
    doTest('2019 Q-2 YTD', QYTD, null);
  });

  test(`${ QYTD } - half year bigger than 4`, () => {
    doTest('2018 Q5 YTD', QYTD, null);
  });

  test(`${ QYTD } - half year equals 0`, () => {
    doTest('2018 Q0 YTD', QYTD, null);
  });

  test(BM, () => {
    doTest('2019.01/02', BM, 'BM_2019_1');
  });

  test(`${ BM } - 2`, () => {
    doTest('2019.11/12', BM, 'BM_2019_6');
  });

  test(`${ BM } - wrong bi-months`, () => {
    doTest('2019.01/03', BM, null);
  });

  test(`${ BM } - wrong first bi-month`, () => {
    doTest('2019.02/03', BM, null);
  });

  test(`${ BM } - negative first bi-month`, () => {
    doTest('2019.-02/03', BM, null);
  });

  test(`${ BM } - big first bi-month`, () => {
    doTest('2019.13/14', BM, null);
  });

  test(`${ BMRY }`, () => {
    doTest('2019.01/02 RY', BMRY, 'BMRY_2019_1');
  });

  test(`${ BMRY } - wrong first bi-month`, () => {
    doTest('2019.02/03 RY', BMRY, null);
  });

  test(`${ BMRY } - negative first bi-month`, () => {
    doTest('2019.-02/03 RY', BMRY, null);
  });

  test(`${ BMRY } - big first bi-month`, () => {
    doTest('2019.13/14', BMRY, null);
  });

  test(`${ BMYTD }`, () => {
    doTest('2019.01/02 YTD', BMYTD, 'BMYTD_2019_1');
  });

  test(`${ BMYTD } - wrong first bi-month`, () => {
    doTest('2019.02/03 YTD', BMYTD, null);
  });

  test(`${ BMYTD } - negative first bi-month`, () => {
    doTest('2019.-02/03 YTD', BMYTD, null);
  });

  test(`${ BMYTD } - big first bi-month`, () => {
    doTest('2019.13/14', BMYTD, null);
  });

  test(M, () => {
    doTest('2018.01', M, 'M_2018_1');
  });

  test(`${ M } - big month`, () => {
    doTest('2018.13', M, null);
  });

  test(`${ M } - negative month`, () => {
    doTest('2018.-10', M, null);
  });

  test(MRY, () => {
    doTest('2019.09 RY', MRY, 'MRY_2019_9');
  });

  test(`${ MRY } - negative month`, () => {
    doTest('2019.-09 RY', MRY, null);
  });

  test(`${ MRY } - big month`, () => {
    doTest('2019.13 RY', MRY, null);
  });

  test(MYTD, () => {
    doTest('2019.02 YTD', MYTD, 'MYTD_2019_2');
  });

  test(`${ MYTD } - negative month`, () => {
    doTest('2019.-02 YTD', MYTD, null);
  });

  test(`${ MYTD } - big month`, () => {
    doTest('2019.23 YTD', MYTD, null);
  });

  test(W, () => {
    doTest('2019 W52', W, 'W_2019_52');
  });

  test(`${ W } - negative week`, () => {
    doTest('2019 W-11', W, null);
  });

  test(`${ W } - not adjusted week`, () => {
    doTest('2019 W1', W, null);
  });

  test(`${ W } - big week`, () => {
    doTest('2019 W111', W, null);
  });

  test(WYTD, () => {
    doTest('2020 W10 YTD', WYTD, 'WYTD_2020_10');
  });

  test(`${ WYTD } - negative week`, () => {
    doTest('2020 W-10 YTD', WYTD, null);
  });

  test(`${ WYTD } - not adjusted week`, () => {
    doTest('2019 W1 YTD', WYTD, null);
  });

  test(`${ WYTD } - big week`, () => {
    doTest('2019 W111 YTD', WYTD, null);
  });
});
