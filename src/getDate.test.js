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

  test(H, () => {
    const text = '2018 H1';

    expect(getDate(text, H)).toEqual(getPeriod('H_2018_1'));
  });

  test(`${ H } - 2`, () => {
    const text = '2018 h1';

    expect(getDate(text, H)).toEqual(getPeriod('H_2018_1'));
  });

  test(`${ H } - negative half year`, () => {
    const text = '2018 H-1';

    expect(getDate(text, H)).toEqual(null);
  });
});
