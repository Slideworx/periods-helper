import {dictionary, getPeriod, getPeriods, types} from '.';



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



describe(dictionary[Y].label, () => {
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
});



describe(dictionary[H].label, () => {
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
});



describe(dictionary[Q].label, () => {
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
});



describe(dictionary[BM].label, () => {
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
});



describe(dictionary[M].label, () => {
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
});



describe(dictionary[W].label, () => {
  test(W, () => {
    const notation = `${ W }_2020_1`;
    const range = 5;

    console.log([
      getPeriod(`${W}_2020_1`),
      getPeriod(`${W}_2020_2`),
      getPeriod(`${W}_2020_3`),
      getPeriod(`${W}_2020_4`),
      getPeriod(`${W}_2020_5`)
    ]);

    expect(getPeriods(notation, range)).toEqual([
      getPeriod(`${ W }_2020_1`),
      getPeriod(`${ W }_2020_2`),
      getPeriod(`${ W }_2020_3`),
      getPeriod(`${ W }_2020_4`),
      getPeriod(`${ W }_2020_5`)
    ]);
  });

  test.only(`${ W } - negative range`, () => {
    const notation = `${ W }_2020_1`;
    const range = -100;

    console.log(getPeriods(notation, range));
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