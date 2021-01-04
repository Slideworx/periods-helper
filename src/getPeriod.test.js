import {dictionary, getPeriod, types} from '.';



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
    const notation = `${ Y }_2020`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2021, 0, 0)
      },
      type: Y,
      value: '2020'
    });
  });
});



describe(dictionary[H].label, () => {
  test(H, () => {
    const notation = `${ H }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 6, 0)
      },
      type: H,
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
      type: HRY,
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
      type: HYTD,
      value: `2020 ${ H }1 ${ YTD }`
    });
  });
});



describe(dictionary[Q].label, () => {
  test(Q, () => {
    const notation = `${ Q }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 3, 0)
      },
      type: Q,
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
      type: QRY,
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
      type: QYTD,
      value: `2020 ${ Q }1 ${ YTD }`
    });
  });
});



describe(dictionary[BM].label, () => {
  test(BM, () => {
    const notation = `${ BM }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0)
      },
      type: BM,
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
      type: BMRY,
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
      type: BMYTD,
      value: `2020.01/02 ${ YTD }`
    });
  });
});



describe(dictionary[M].label, () => {
  test(M, () => {
    const notation = `${ M }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0)
      },
      type: M,
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
      type: MRY,
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
      type: MYTD,
      value: `2020.01 ${ YTD }`
    });
  });
});



describe(dictionary[W].label, () => {
  test(W, () => {
    const notation = `${ W }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, -1),
        to: new Date(2020, 0, 5)
      },
      type: W,
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
      type: WYTD,
      value: `2020 ${ W }01 ${ YTD }`
    });
  });
});