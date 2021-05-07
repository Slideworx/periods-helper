import { dictionary, types } from '.';
import { getDate } from './getDate';

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

describe(dictionary[Y].label, () => {
  test(Y, () => {
    const text = '2020';

    expect(getDate(text, Y)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 11, 31, 23, 59, 59)
      },
      type: Y,
      value: '2020'
    });
  });

  test(`${ Y } - negative year`, () => {
    const text = '-2020';

    expect(getDate(text, Y)).toEqual(null);
  });
});
