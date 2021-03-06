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
  test(`${ Y } (*)`, () => {
    const notation = `${ Y }_2018`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 0, 1),
        to: new Date(2018, 11, 31, 23, 59, 59)
      },
      type: Y,
      value: '2018'
    });
  });

  test(`${ Y } - 2 (*)`, () => {
    const notation = `${Y}_2019`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 11, 31, 23, 59, 59)
      },
      type: Y,
      value: '2019'
    });
  });
});



describe(dictionary[H].label, () => {
  test(`${ H } (*)`, () => {
    const notation = `${ H }_2018_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 0, 1),
        to: new Date(2018, 5, 30, 23, 59, 59)
      },
      type: H,
      value: `2018 ${ H }1`
    });
  });

  test(`${ H } - 2 (*)`, () => {
    const notation = `${H}_2018_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 6, 1),
        to: new Date(2018, 11, 31, 23, 59, 59)
      },
      type: H,
      value: `2018 ${ H }2`
    });
  });

  test(`${ H } - small negative half year`, () => {
    const notation = `${H}_2022_-1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2021, 6, 1),
        to: new Date(2021, 11, 31, 23, 59, 59)
      },
      type: H,
      value: `2021 ${ H }2`
    });
  });

  test(`${ H } - bigger than year negative half year`, () => {
    const notation = `${H}_2022_-4`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 5, 30, 23, 59, 59)
      },
      type: H,
      value: `2020 ${ H }1`
    });
  });

  test(`${ HRY } (*)`, () => {
    const notation = `${ HRY }_2019_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 6, 1),
        to: new Date(2019, 5, 30, 23, 59, 59)
      },
      type: HRY,
      value: `2019 ${ H }1 ${ RY }`
    });
  });

  test(`${ HRY } - 2 (*)`, () => {
    const notation = `${HRY}_2019_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 11, 31, 23, 59, 59)
      },
      type: HRY,
      value: `2019 ${ H }2 ${ RY }`
    });
  });

  test(`${ HRY } - bigger than 2 `, () => {
    const notation = `${ HRY }_2019_3`;

    expect(getPeriod(notation)).toEqual(getPeriod(`${ HRY }_2020_1`));
  });

  test(`${ HYTD } (*)`, () => {
    const notation = `${ HYTD }_2019_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 5, 30, 23, 59, 59)
      },
      type: HYTD,
      value: `2019 ${ H }1 ${ YTD }`
    });
  });

  test(`${ HYTD } - 2 (*)`, () => {
    const notation = `${HYTD}_2019_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 11, 31, 23, 59, 59)
      },
      type: HYTD,
      value: `2019 ${ H }2 ${ YTD }`
    });
  });
});



describe(dictionary[Q].label, () => {
  test(`${ Q } (*)`, () => {
    const notation = `${ Q }_2018_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 3, 1),
        to: new Date(2018, 5, 30, 23, 59, 59)
      },
      type: Q,
      value: `2018 ${ Q }2`
    });
  });

  test(`${ Q } - 2 (*)`, () => {
    const notation = `${Q}_2018_3`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 6, 1),
        to: new Date(2018, 8, 30, 23, 59, 59)
      },
      type: Q,
      value: `2018 ${ Q }3`
    });
  });

  test(`${ Q } - more than year`, () => {
    const notation = `${ Q }_2018_6`;

    expect(getPeriod(notation)).toEqual(getPeriod(`${ Q }_2019_2`));
  });

  test(QRY, () => {
    const notation = `${ QRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 3, 1),
        to: new Date(2020, 3, 0, 23, 59, 59)
      },
      type: QRY,
      value: `2020 ${ Q }1 ${ RY }`
    });
  });

  test(`${ QRY } - middle of year (*)`, () => {
    const notation = `${QRY}_2019_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 6, 1),
        to: new Date(2019, 5, 30, 23, 59, 59)
      },
      type: QRY,
      value: `2019 ${ Q }2 ${ RY }`
    });
  });

  test(`${ QRY } - middle of year 2 (*)`, () => {
    const notation = `${QRY}_2019_3`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 9, 1),
        to: new Date(2019, 8, 30, 23, 59, 59)
      },
      type: QRY,
      value: `2019 ${ Q }3 ${ RY }`
    });
  });

  test(`${ QYTD } - beginning of the year (*)`, () => {
    const notation = `${QYTD}_2019_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 2, 31, 23, 59, 59)
      },
      type: QYTD,
      value: `2019 ${ Q }1 ${ YTD }`
    });
  });

  test(`${ QYTD } - middle of the year (*)`, () => {
    const notation = `${QYTD}_2019_3`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 8, 30, 23, 59, 59)
      },
      type: QYTD,
      value: `2019 ${ Q }3 ${ YTD }`
    });
  });
});



describe(dictionary[BM].label, () => {
  test(BM, () => {
    const notation = `${ BM }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0, 23, 59, 59)
      },
      type: BM,
      value: '2020.01/02'
    });
  });

  test(`${ BM } - negative bi-month very small number`, () => {
    const notation = `${ BM }_2020_-1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 10, 1),
        to: new Date(2020, 0, 0, 23, 59, 59)
      },
      type: BM,
      value: '2019.11/12'
    });
  });

  test(`${ BM } - negative month bigger than year`, () => {
    const notation = `${BM}_2020_-8`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 8, 1),
        to: new Date(2018, 10, 0, 23, 59, 59)
      },
      type: BM,
      value: '2018.09/10'
    });
  });


  test(BMRY, () => {
    const notation = `${ BMRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 2, 1),
        to: new Date(2020, 2, 0, 23, 59, 59)
      },
      type: BMRY,
      value: `2020.01/02 ${ RY }`
    });
  });

  test(`${ BMRY } - beggining of the year (*)`, () => {
    const notation = `${ BMRY }_2019_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 2, 1),
        to: new Date(2019, 1, 28, 23, 59, 59)
      },
      type: BMRY,
      value: `2019.01/02 ${ RY }`
    });
  });

  test(`${ BMRY } - middle of the year (*)`, () => {
    const notation = `${ BMRY }_2019_4`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 8, 1),
        to: new Date(2019, 7, 31, 23, 59, 59)
      },
      type: BMRY,
      value: `2019.07/08 ${RY}`
    });
  });

  test(BMYTD, () => {
    const notation = `${ BMYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 2, 0, 23, 59, 59)
      },
      type: BMYTD,
      value: `2020.01/02 ${ YTD }`
    });
  });

  test(`${ BMYTD } - beginning of the year (*)`, () => {
    const notation = `${BMYTD}_2019_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 3, 30, 23, 59, 59)
      },
      type: BMYTD,
      value: `2019.03/04 ${ YTD }`
    });
  });

  test(`${ BMYTD } - middle of the year (*)`, () => {
    const notation = `${ BMYTD }_2019_4`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 7, 31, 23, 59, 59)
      },
      type: BMYTD,
      value: `2019.07/08 ${ YTD }`
    });
  });
});



describe(dictionary[M].label, () => {
  test(M, () => {
    const notation = `${ M }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0, 23, 59, 59)
      },
      type: M,
      value: '2020.01'
    });
  });

  test(`${ M } - negative month very small number`, () => {
    const notation = `${ M }_2020_-1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 11),
        to: new Date(2020, 0, 0, 23, 59, 59)
      },
      type: M,
      value: `2019.12`
    });
  });

  test(`${ M } - negative month bigger than year`, () => {
    const notation = `${M}_2020_-20`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 4),
        to: new Date(2018, 5, 0, 23, 59, 59)
      },
      type: M,
      value: `2018.05`
    });
  });

  test(MRY, () => {
    const notation = `${ MRY }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 1, 1),
        to: new Date(2020, 1, 0, 23, 59, 59)
      },
      type: MRY,
      value: `2020.01 ${ RY }`
    });
  });

  test(`${ MRY } - middle of year (*)`, () => {
    const notation = `${MRY}_2019_9`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 9, 1),
        to: new Date(2019, 8, 30, 23, 59, 59)
      },
      type: MRY,
      value: `2019.09 ${RY}`
    });
  });

  test(`${ MRY } - end of year (*)`, () => {
    const notation = `${MRY}_2019_12`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 11, 31, 23, 59, 59)
      },
      type: MRY,
      value: `2019.12 ${ RY }`
    });
  });

  test(MYTD, () => {
    const notation = `${ MYTD }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, 1),
        to: new Date(2020, 1, 0, 23, 59, 59)
      },
      type: MYTD,
      value: `2020.01 ${ YTD }`
    });
  });

  test(`${ MYTD } - middle of the year (*)`, () => {
    const notation = `${ MYTD }_2019_2`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 1, 28, 23, 59, 59)
      },
      type: MYTD,
      value: `2019.02 ${ YTD }`
    });
  });

  test(`${ MYTD } - middle of the year 2 (*)`, () => {
    const notation = `${MYTD}_2019_8`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 7, 31, 23, 59, 59)
      },
      type: MYTD,
      value: `2019.08 ${YTD}`
    });
  });
});


describe(dictionary[W].label, () => {
  test(W, () => {
    const notation = `${ W }_2020_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2020, 0, -1),
        to: new Date(2020, 0, 5, 23, 59, 59)
      },
      type: W,
      value: `2020 ${ W }01`
    });
  });

  test(`${ W } - 2`, () => {
    const notation = `${W}_2019_1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 0, 0),
        to: new Date(2019, 0, 6, 23, 59, 59)
      },
      type: W,
      value: `2019 ${W}01`
    });
  });

  test(`${ W } - 3`, () => {
    const notation = `${ W }_2017_46`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2017, 10, 13),
        to: new Date(2017, 10, 19, 23, 59, 59)
      },
      type: W,
      value: `2017 ${ W }46`
    });
  });

  test(`${W} - negative week very small number`, () => {
    const notation = `${W}_2020_-1`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 11, 23),
        to: new Date(2019, 11, 29, 23, 59, 59)
      },
      type: W,
      value: `2019 ${W}52`
    });
  });

  test(`${ W } - negative week bigger than year`, () => {
    const notation = `${W}_2020_-100`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 0, 29),
        to: new Date(2018, 1, 4, 23, 59, 59)
      },
      type: W,
      value: `2018 ${ W }05`
    });
  });

  test(`${W} - negative week bigger than year 2`, () => {
    const notation = `${ W }_2019_-53`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2017, 11, 25),
        to: new Date(2017, 11, 31, 23, 59, 59)
      },
      type: W,
      value: `2017 ${ W }52`
    });
  });

  test(`${W} - negative week bigger than year 3`, () => {
    const notation = `${W}_2019_-59`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2017, 10, 13),
        to: new Date(2017, 10, 19, 23, 59, 59)
      },
      type: W,
      value: `2017 ${ W }46`
    });
  });

  test(`${ WYTD } - beggining of the year (*)`, () => {
    const notation = `${WYTD}_2020_10`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2019, 11, 30),
        to: new Date(2020, 2, 8, 23, 59, 59)
      },
      type: WYTD,
      value: `2020 ${ W }10 ${ YTD }`
    });
  });

  test(`${ WYTD } - end of the year (*)`, () => {
    const notation = `${ WYTD }_2019_52`;

    expect(getPeriod(notation)).toEqual({
      date: {
        from: new Date(2018, 11, 31),
        to: new Date(2019, 11, 29, 23, 59, 59)
      },
      type: WYTD,
      value: `2019 ${ W }52 ${YTD}`
    });
  });
});