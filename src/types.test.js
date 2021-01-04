import {dictionary, types} from '.';



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
    const type = Y;

    expect(typeof types[type]).toBe('string');
  });
});



describe(dictionary[H].label, () => {
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
});



describe(dictionary[Q].label, () => {
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
});



describe(dictionary[BM].label, () => {
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
});



describe(dictionary[M].label, () => {
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
});



describe(dictionary[W].label, () => {
  test(W, () => {
    const type = W;

    expect(typeof types[type]).toBe('string');
  });

  test(WYTD, () => {
    const type = WYTD;

    expect(typeof types[type]).toBe('string');
  });
});