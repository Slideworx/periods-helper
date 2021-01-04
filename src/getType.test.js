import {dictionary, getType, types} from '.';



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
    const value = '2020';

    expect(getType(value)).toBe(Y);
  });
});



describe(dictionary[H].label, () => {
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
});



describe(dictionary[Q].label, () => {
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
});



describe(dictionary[BM].label, () => {
  test(BM, () => {
    const value = '2020.01/02';

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
});



describe(dictionary[M].label, () => {
  test(M, () => {
    const value = '2020.01';

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
});



describe(dictionary[W].label, () => {
  test(W, () => {
    const value = `2020 ${ W }01`;

    expect(getType(value)).toBe(W);
  });

  test(WYTD, () => {
    const value = `2020 ${ W }01 ${ YTD }`;

    expect(getType(value)).toBe(WYTD);
  });
});