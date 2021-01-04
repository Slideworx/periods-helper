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

    Object
      .values(dictionary[type])
      .forEach((value) => {
        expect(typeof value).toBe('string');
      });
  });
});



describe(dictionary[H].label, () => {
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
});



describe(dictionary[Q].label, () => {
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
});



describe(dictionary[BM].label, () => {
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
});



describe(dictionary[M].label, () => {
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
});



describe(dictionary[W].label, () => {
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