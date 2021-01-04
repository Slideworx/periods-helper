import {dictionary, getNotation, types} from '.';



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
    const date = new Date(2021, 0, 0);
    const type = Y;

    expect(getNotation(date, type)).toBe(`${ Y }_2020`);
  });
});



describe(dictionary[H].label, () => {
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
});



describe(dictionary[Q].label, () => {
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
});



describe(dictionary[BM].label, () => {
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
});



describe(dictionary[M].label, () => {
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
});



describe(dictionary[W].label, () => {
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