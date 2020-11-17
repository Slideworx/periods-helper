import {dictionary, getNotation, getPeriod, getPeriods} from '.';



const Y = 'Y';

const H = 'H';
const H_RY = 'HRY';
const H_YTD = 'HYTD';

const Q = 'Q';
const Q_RY = 'QRY';
const Q_YTD = 'QYTD';

const BM = 'BM';
const BM_RY = 'BMRY';
const BM_YTD = 'BMYTD';

const M = 'M';
const M_RY = 'MRY';
const M_YTD = 'MYTD';

const W = 'W';
const W_YTD = 'WYTD';

const RY = 'RY';
const YTD = 'YTD';



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

  test(H_RY, () => {
    const type = H_RY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(H_YTD, () => {
    const type = H_YTD;

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

  test(Q_RY, () => {
    const type = Q_RY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(Q_YTD, () => {
    const type = Q_YTD;

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

  test(BM_RY, () => {
    const type = BM_RY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(BM_YTD, () => {
    const type = BM_YTD;

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

  test(M_RY, () => {
    const type = M_RY;

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });

  test(M_YTD, () => {
    const type = M_YTD;

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

  test(W_YTD, () => {
    const type = W_YTD;

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

  test(H_RY, () => {
    const date = new Date(2021, 0, 0);
    const type = H_RY;

    expect(getNotation(date, type)).toBe(`${ H_RY }_2020_2`);
  });

  test(H_YTD, () => {
    const date = new Date(2021, 0, 0);
    const type = H_YTD;

    expect(getNotation(date, type)).toBe(`${ H_YTD }_2020_2`);
  });

  test(Q, () => {
    const date = new Date(2021, 0, 0);
    const type = Q;

    expect(getNotation(date, type)).toBe(`${ Q }_2020_4`);
  });

  test(Q_RY, () => {
    const date = new Date(2021, 0, 0);
    const type = Q_RY;

    expect(getNotation(date, type)).toBe(`${ Q_RY }_2020_4`);
  });

  test(Q_YTD, () => {
    const date = new Date(2021, 0, 0);
    const type = Q_YTD;

    expect(getNotation(date, type)).toBe(`${ Q_YTD }_2020_4`);
  });

  test(BM, () => {
    const date = new Date(2021, 0, 0);
    const type = BM;

    expect(getNotation(date, type)).toBe(`${ BM }_2020_6`);
  });

  test(BM_RY, () => {
    const date = new Date(2021, 0, 0);
    const type = BM_RY;

    expect(getNotation(date, type)).toBe(`${ BM_RY }_2020_6`);
  });

  test(BM_YTD, () => {
    const date = new Date(2021, 0, 0);
    const type = BM_YTD;

    expect(getNotation(date, type)).toBe(`${ BM_YTD }_2020_6`);
  });

  test(M, () => {
    const date = new Date(2021, 0, 0);
    const type = M;

    expect(getNotation(date, type)).toBe(`${ M }_2020_12`);
  });

  test(M_RY, () => {
    const date = new Date(2021, 0, 0);
    const type = M_RY;

    expect(getNotation(date, type)).toBe(`${ M_RY }_2020_12`);
  });

  test(M_YTD, () => {
    const date = new Date(2021, 0, 0);
    const type = M_YTD;

    expect(getNotation(date, type)).toBe(`${ M_YTD }_2020_12`);
  });

  test(W, () => {
    const date = new Date(2021, 0, 0);
    const type = W;

    expect(() => getNotation(date, type)).toThrow();
  });

  test(W_YTD, () => {
    const date = new Date(2021, 0, 0);
    const type = W_YTD;

    expect(() => getNotation(date, type)).toThrow();
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

  test(H_RY, () => {
    const notation = `${ H_RY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 6, 1),
        to: new Date(2020, 6, 0)
      },
      type: dictionary[H_RY],
      value: `2020 ${ H }1 ${ RY }`
    });
  });

  test(H_YTD, () => {
    const notation = `${ H_YTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 6, 0)
      },
      type: dictionary[H_YTD],
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

  test(Q_RY, () => {
    const notation = `${ Q_RY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 3, 1),
        to: new Date(2020, 3, 0)
      },
      type: dictionary[Q_RY],
      value: `2020 ${ Q }1 ${ RY }`
    });
  });

  test(Q_YTD, () => {
    const notation = `${ Q_YTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 3, 0)
      },
      type: dictionary[Q_YTD],
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

  test(BM_RY, () => {
    const notation = `${ BM_RY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 2, 1),
        to: new Date(2020, 2, 0)
      },
      type: dictionary[BM_RY],
      value: `2020.01/02 ${ RY }`
    });
  });

  test(BM_YTD, () => {
    const notation = `${ BM_YTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0)
      },
      type: dictionary[BM_YTD],
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

  test(M_RY, () => {
    const notation = `${ M_RY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 1, 1),
        to: new Date(2020, 1, 0)
      },
      type: dictionary[M_RY],
      value: `2020.01 ${ RY }`
    });
  });

  test(M_YTD, () => {
    const notation = `${ M_YTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0)
      },
      type: dictionary[M_YTD],
      value: `2020.01 ${ YTD }`
    });
  });

  test(W, () => {
    const notation = `${ W }_2020_1`;

    expect(() => getPeriod(notation)).toThrow();
  });

  test(W_YTD, () => {
    const notation = `${ W_YTD }_2020_1`;

    expect(() => getPeriod(notation)).toThrow();
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

  test(H_RY, () => {
    const notation = `${ H_RY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ H_RY }_2020_1`),
      getPeriod(`${ H_RY }_2020_2`),
      getPeriod(`${ H_RY }_2021_1`),
      getPeriod(`${ H_RY }_2021_2`),
      getPeriod(`${ H_RY }_2022_1`)
    ]);
  });

  test(H_YTD, () => {
    const notation = `${ H_YTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ H_YTD }_2020_1`),
      getPeriod(`${ H_YTD }_2020_2`),
      getPeriod(`${ H_YTD }_2021_1`),
      getPeriod(`${ H_YTD }_2021_2`),
      getPeriod(`${ H_YTD }_2022_1`)
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

  test(Q_RY, () => {
    const notation = `${ Q_RY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ Q_RY }_2020_1`),
      getPeriod(`${ Q_RY }_2020_2`),
      getPeriod(`${ Q_RY }_2020_3`),
      getPeriod(`${ Q_RY }_2020_4`),
      getPeriod(`${ Q_RY }_2021_1`)
    ]);
  });

  test(Q_YTD, () => {
    const notation = `${ Q_YTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ Q_YTD }_2020_1`),
      getPeriod(`${ Q_YTD }_2020_2`),
      getPeriod(`${ Q_YTD }_2020_3`),
      getPeriod(`${ Q_YTD }_2020_4`),
      getPeriod(`${ Q_YTD }_2021_1`)
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

  test(BM_RY, () => {
    const notation = `${ BM_RY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ BM_RY }_2020_1`),
      getPeriod(`${ BM_RY }_2020_2`),
      getPeriod(`${ BM_RY }_2020_3`),
      getPeriod(`${ BM_RY }_2020_4`),
      getPeriod(`${ BM_RY }_2020_5`)
    ]);
  });

  test(BM_YTD, () => {
    const notation = `${ BM_YTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ BM_YTD }_2020_1`),
      getPeriod(`${ BM_YTD }_2020_2`),
      getPeriod(`${ BM_YTD }_2020_3`),
      getPeriod(`${ BM_YTD }_2020_4`),
      getPeriod(`${ BM_YTD }_2020_5`)
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

  test(M_RY, () => {
    const notation = `${ M_RY }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ M_RY }_2020_1`),
      getPeriod(`${ M_RY }_2020_2`),
      getPeriod(`${ M_RY }_2020_3`),
      getPeriod(`${ M_RY }_2020_4`),
      getPeriod(`${ M_RY }_2020_5`)
    ]);
  });

  test(M_YTD, () => {
    const notation = `${ M_YTD }_2020_1`;
    const range = 5;

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ M_YTD }_2020_1`),
      getPeriod(`${ M_YTD }_2020_2`),
      getPeriod(`${ M_YTD }_2020_3`),
      getPeriod(`${ M_YTD }_2020_4`),
      getPeriod(`${ M_YTD }_2020_5`)
    ]);
  });

  test(W, () => {
    const notation = `${ W }_2020_1`;
    const range = 5;

    expect(() => getPeriods(notation, range)).toThrow();
  });

  test(W_YTD, () => {
    const notation = `${ W_YTD }_2020_1`;
    const range = 5;

    expect(() => getPeriods(notation, range)).toThrow();
  });
});