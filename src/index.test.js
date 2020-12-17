import {dictionary, getNotation, getPeriod, getPeriods, getType, types} from '.';



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



describe('dictionary', () => {
  test(Y, () => {
    const type = Y;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(H, () => {
    const type = H;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(HRY, () => {
    const type = HRY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(HYTD, () => {
    const type = HYTD;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(Q, () => {
    const type = Q;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(QRY, () => {
    const type = QRY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(QYTD, () => {
    const type = QYTD;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(BM, () => {
    const type = BM;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(BMRY, () => {
    const type = BMRY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(BMYTD, () => {
    const type = BMYTD;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(M, () => {
    const type = M;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(MRY, () => {
    const type = MRY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(MYTD, () => {
    const type = MYTD;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(W, () => {
    const type = W;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(WYTD, () => {
    const type = WYTD;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });
});



describe('getNotation', () => {
  test(Y, () => {
    const date = new Date(2021, 0, 0);
    const type = Y;

    expect(getNotation(date, type)).toBe(`${ Y }_2020`);
  });

  test(H, () => {
    const date = new Date(2021, 0, 0);
    const type = H;

    expect(getNotation(date, type)).toBe(`${ H }_2020_2`);
  });

  test(HRY, () => {
    const date = new Date(2021, 0, 0);
    const type = HRY;

    expect(getNotation(date, type)).toBe(`${ HRY }_2020_2`);
  });

  test(HYTD, () => {
    const date = new Date(2021, 0, 0);
    const type = HYTD;

    expect(getNotation(date, type)).toBe(`${ HYTD }_2020_2`);
  });

  test(Q, () => {
    const date = new Date(2021, 0, 0);
    const type = Q;

    expect(getNotation(date, type)).toBe(`${ Q }_2020_4`);
  });

  test(QRY, () => {
    const date = new Date(2021, 0, 0);
    const type = QRY;

    expect(getNotation(date, type)).toBe(`${ QRY }_2020_4`);
  });

  test(QYTD, () => {
    const date = new Date(2021, 0, 0);
    const type = QYTD;

    expect(getNotation(date, type)).toBe(`${ QYTD }_2020_4`);
  });

  test(BM, () => {
    const date = new Date(2021, 0, 0);
    const type = BM;

    expect(getNotation(date, type)).toBe(`${ BM }_2020_6`);
  });

  test(BMRY, () => {
    const date = new Date(2021, 0, 0);
    const type = BMRY;

    expect(getNotation(date, type)).toBe(`${ BMRY }_2020_6`);
  });

  test(BMYTD, () => {
    const date = new Date(2021, 0, 0);
    const type = BMYTD;

    expect(getNotation(date, type)).toBe(`${ BMYTD }_2020_6`);
  });

  test(M, () => {
    const date = new Date(2021, 0, 0);
    const type = M;

    expect(getNotation(date, type)).toBe(`${ M }_2020_12`);
  });

  test(MRY, () => {
    const date = new Date(2021, 0, 0);
    const type = MRY;

    expect(getNotation(date, type)).toBe(`${ MRY }_2020_12`);
  });

  test(MYTD, () => {
    const date = new Date(2021, 0, 0);
    const type = MYTD;

    expect(getNotation(date, type)).toBe(`${ MYTD }_2020_12`);
  });

  test(W, () => {
    const date = new Date(2021, 0, 0);
    const type = W;

    expect(getNotation(date, type)).toBe(`${ W }_2020_53`);
  });

  test(WYTD, () => {
    const date = new Date(2021, 0, 0);
    const type = WYTD;

    expect(getNotation(date, type)).toBe(`${ WYTD }_2020_53`);
  });
});



describe('getPeriod', () => {
  test(Y, () => {
    const notation = `${ Y }_2020`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2021, 0, 0)
      },
      type: dictionary[Y],
      value: '2020'
    });
  });

  test(H, () => {
    const notation = `${ H }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 6, 0)
      },
      type: dictionary[H],
      value: `2020 ${ H }1`
    });
  });

  test(HRY, () => {
    const notation = `${ HRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 6, 1),
        to: new Date(2020, 6, 0)
      },
      type: dictionary[HRY],
      value: `2020 ${ H }1 ${ RY }`
    });
  });

  test(HYTD, () => {
    const notation = `${ HYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 6, 0)
      },
      type: dictionary[HYTD],
      value: `2020 ${ H }1 ${ YTD }`
    });
  });

  test(Q, () => {
    const notation = `${ Q }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 3, 0)
      },
      type: dictionary[Q],
      value: `2020 ${ Q }1`
    });
  });

  test(QRY, () => {
    const notation = `${ QRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 3, 1),
        to: new Date(2020, 3, 0)
      },
      type: dictionary[QRY],
      value: `2020 ${ Q }1 ${ RY }`
    });
  });

  test(QYTD, () => {
    const notation = `${ QYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 3, 0)
      },
      type: dictionary[QYTD],
      value: `2020 ${ Q }1 ${ YTD }`
    });
  });

  test(BM, () => {
    const notation = `${ BM }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0)
      },
      type: dictionary[BM],
      value: '2020.01/02'
    });
  });

  test(BMRY, () => {
    const notation = `${ BMRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 2, 1),
        to: new Date(2020, 2, 0)
      },
      type: dictionary[BMRY],
      value: `2020.01/02 ${ RY }`
    });
  });

  test(BMYTD, () => {
    const notation = `${ BMYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0)
      },
      type: dictionary[BMYTD],
      value: `2020.01/02 ${ YTD }`
    });
  });

  test(M, () => {
    const notation = `${ M }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0)
      },
      type: dictionary[M],
      value: '2020.01'
    });
  });

  test(MRY, () => {
    const notation = `${ MRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 1, 1),
        to: new Date(2020, 1, 0)
      },
      type: dictionary[MRY],
      value: `2020.01 ${ RY }`
    });
  });

  test(MYTD, () => {
    const notation = `${ MYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0)
      },
      type: dictionary[MYTD],
      value: `2020.01 ${ YTD }`
    });
  });

  test(W, () => {
    const notation = `${ W }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, -1),
        to: new Date(2020, 0, 5)
      },
      type: dictionary[W],
      value: `2020 ${ W }01`
    });
  });

  test(WYTD, () => {
    const notation = `${ WYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 0, 5)
      },
      type: dictionary[WYTD],
      value: `2020 ${ W }01 ${ YTD }`
    });
  });
});



describe('getPeriods', () => {
  test(Y, () => {
    const notation = `${ Y }_2020`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ Y }_2020`),
      getPeriod(`${ Y }_2021`),
      getPeriod(`${ Y }_2022`),
      getPeriod(`${ Y }_2023`),
      getPeriod(`${ Y }_2024`)
    ]);
  });

  test(H, () => {
    const notation = `${ H }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ H }_2020_1`),
      getPeriod(`${ H }_2020_2`),
      getPeriod(`${ H }_2021_1`),
      getPeriod(`${ H }_2021_2`),
      getPeriod(`${ H }_2022_1`)
    ]);
  });

  test(HRY, () => {
    const notation = `${ HRY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ HRY }_2020_1`),
      getPeriod(`${ HRY }_2020_2`),
      getPeriod(`${ HRY }_2021_1`),
      getPeriod(`${ HRY }_2021_2`),
      getPeriod(`${ HRY }_2022_1`)
    ]);
  });

  test(HYTD, () => {
    const notation = `${ HYTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ HYTD }_2020_1`),
      getPeriod(`${ HYTD }_2020_2`),
      getPeriod(`${ HYTD }_2021_1`),
      getPeriod(`${ HYTD }_2021_2`),
      getPeriod(`${ HYTD }_2022_1`)
    ]);
  });

  test(Q, () => {
    const notation = `${ Q }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ Q }_2020_1`),
      getPeriod(`${ Q }_2020_2`),
      getPeriod(`${ Q }_2020_3`),
      getPeriod(`${ Q }_2020_4`),
      getPeriod(`${ Q }_2021_1`)
    ]);
  });

  test(QRY, () => {
    const notation = `${ QRY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ QRY }_2020_1`),
      getPeriod(`${ QRY }_2020_2`),
      getPeriod(`${ QRY }_2020_3`),
      getPeriod(`${ QRY }_2020_4`),
      getPeriod(`${ QRY }_2021_1`)
    ]);
  });

  test(QYTD, () => {
    const notation = `${ QYTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ QYTD }_2020_1`),
      getPeriod(`${ QYTD }_2020_2`),
      getPeriod(`${ QYTD }_2020_3`),
      getPeriod(`${ QYTD }_2020_4`),
      getPeriod(`${ QYTD }_2021_1`)
    ]);
  });

  test(BM, () => {
    const notation = `${ BM }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ BM }_2020_1`),
      getPeriod(`${ BM }_2020_2`),
      getPeriod(`${ BM }_2020_3`),
      getPeriod(`${ BM }_2020_4`),
      getPeriod(`${ BM }_2020_5`)
    ]);
  });

  test(BMRY, () => {
    const notation = `${ BMRY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ BMRY }_2020_1`),
      getPeriod(`${ BMRY }_2020_2`),
      getPeriod(`${ BMRY }_2020_3`),
      getPeriod(`${ BMRY }_2020_4`),
      getPeriod(`${ BMRY }_2020_5`)
    ]);
  });

  test(BMYTD, () => {
    const notation = `${ BMYTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ BMYTD }_2020_1`),
      getPeriod(`${ BMYTD }_2020_2`),
      getPeriod(`${ BMYTD }_2020_3`),
      getPeriod(`${ BMYTD }_2020_4`),
      getPeriod(`${ BMYTD }_2020_5`)
    ]);
  });

  test(M, () => {
    const notation = `${ M }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ M }_2020_1`),
      getPeriod(`${ M }_2020_2`),
      getPeriod(`${ M }_2020_3`),
      getPeriod(`${ M }_2020_4`),
      getPeriod(`${ M }_2020_5`)
    ]);
  });

  test(MRY, () => {
    const notation = `${ MRY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ MRY }_2020_1`),
      getPeriod(`${ MRY }_2020_2`),
      getPeriod(`${ MRY }_2020_3`),
      getPeriod(`${ MRY }_2020_4`),
      getPeriod(`${ MRY }_2020_5`)
    ]);
  });

  test(MYTD, () => {
    const notation = `${ MYTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ MYTD }_2020_1`),
      getPeriod(`${ MYTD }_2020_2`),
      getPeriod(`${ MYTD }_2020_3`),
      getPeriod(`${ MYTD }_2020_4`),
      getPeriod(`${ MYTD }_2020_5`)
    ]);
  });

  test(W, () => {
    const notation = `${ W }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ W }_2020_1`),
      getPeriod(`${ W }_2020_2`),
      getPeriod(`${ W }_2020_3`),
      getPeriod(`${ W }_2020_4`),
      getPeriod(`${ W }_2020_5`)
    ]);
  });

  test(WYTD, () => {
    const notation = `${ WYTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ WYTD }_2020_1`),
      getPeriod(`${ WYTD }_2020_2`),
      getPeriod(`${ WYTD }_2020_3`),
      getPeriod(`${ WYTD }_2020_4`),
      getPeriod(`${ WYTD }_2020_5`)
    ]);
  });
});



describe('getType', () => {
  test(Y, () => {
    const value = `2020`;

    expect(getType(value)).toBe(Y);
  });

  test(H, () => {
    const value = `2020 ${ H }1`;

    expect(getType(value)).toBe(H);
  });

  test(HRY, () => {
    const value = `2020 ${ H }1 ${ RY }`;

    expect(getType(value)).toBe(HRY);
  });

  test(HYTD, () => {
    const value = `2020 ${ H }1 ${ YTD }`;

    expect(getType(value)).toBe(HYTD);
  });

  test(Q, () => {
    const value = `2020 ${ Q }1`;

    expect(getType(value)).toBe(Q);
  });

  test(QRY, () => {
    const value = `2020 ${ Q }1 ${ RY }`;

    expect(getType(value)).toBe(QRY);
  });

  test(QYTD, () => {
    const value = `2020 ${ Q }1 ${ YTD }`;

    expect(getType(value)).toBe(QYTD);
  });

  test(BM, () => {
    const value = `2020.01/02`;

    expect(getType(value)).toBe(BM);
  });

  test(BMRY, () => {
    const value = `2020.01/02 ${ RY }`;

    expect(getType(value)).toBe(BMRY);
  });

  test(BMYTD, () => {
    const value = `2020.01/02 ${ YTD }`;

    expect(getType(value)).toBe(BMYTD);
  });

  test(M, () => {
    const value = `2020.01`;

    expect(getType(value)).toBe(M);
  });

  test(MRY, () => {
    const value = `2020.01 ${ RY }`;

    expect(getType(value)).toBe(MRY);
  });

  test(MYTD, () => {
    const value = `2020.01 ${ YTD }`;

    expect(getType(value)).toBe(MYTD);
  });

  test(W, () => {
    const value = `2020 ${ W }01`;

    expect(getType(value)).toBe(W);
  });

  test(WYTD, () => {
    const value = `2020 ${ W }01 ${ YTD }`;

    expect(getType(value)).toBe(WYTD);
  });
});



describe('types', () => {
  test(Y, () => {
    const type = Y;

    expect(typeof types[type]).toBe('string');
  });

  test(H, () => {
    const type = H;

    expect(typeof types[type]).toBe('string');
  });

  test(HRY, () => {
    const type = HRY;

    expect(typeof types[type]).toBe('string');
  });

  test(HYTD, () => {
    const type = HYTD;

    expect(typeof types[type]).toBe('string');
  });

  test(Q, () => {
    const type = Q;

    expect(typeof types[type]).toBe('string');
  });

  test(QRY, () => {
    const type = QRY;

    expect(typeof types[type]).toBe('string');
  });

  test(QYTD, () => {
    const type = QYTD;

    expect(typeof types[type]).toBe('string');
  });

  test(BM, () => {
    const type = BM;

    expect(typeof types[type]).toBe('string');
  });

  test(BMRY, () => {
    const type = BMRY;

    expect(typeof types[type]).toBe('string');
  });

  test(BMYTD, () => {
    const type = BMYTD;

    expect(typeof types[type]).toBe('string');
  });

  test(M, () => {
    const type = M;

    expect(typeof types[type]).toBe('string');
  });

  test(MRY, () => {
    const type = MRY;

    expect(typeof types[type]).toBe('string');
  });

  test(MYTD, () => {
    const type = MYTD;

    expect(typeof types[type]).toBe('string');
  });

  test(W, () => {
    const type = W;

    expect(typeof types[type]).toBe('string');
  });

  test(WYTD, () => {
    const type = WYTD;

    expect(typeof types[type]).toBe('string');
  });
});