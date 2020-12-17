import {types} from './types';



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



/**
 * @function getType
 * @access public
 *
 * @param {string} value
 *
 * @returns {string}
 */
export function getType(value) {
  function match(string) {
    return new RegExp(string).test(value);
  }

  switch (true) {
    case match('^[0-9]{4}$'): {
      return Y;
    }

    case match(`^[0-9]{4} ${ H }[0-9]`): {
      switch (true) {
        case match(YTD): {
          return HYTD;
        }

        case match(RY): {
          return HRY;
        }

        default: {
          return H;
        }
      }
    }

    case match(`^[0-9]{4} ${ Q }[0-9]`): {
      switch (true) {
        case match(YTD): {
          return QYTD;
        }

        case match(RY): {
          return QRY;
        }

        default: {
          return Q;
        }
      }
    }

    case match('^[0-9]{4}.[0-9]{2}.[0-9]{2}'): {
      switch (true) {
        case match(YTD): {
          return BMYTD;
        }

        case match(RY): {
          return BMRY;
        }

        default: {
          return BM;
        }
      }
    }

    case match('^[0-9]{4}.[0-9]{2}'): {
      switch (true) {
        case match(YTD): {
          return MYTD;
        }

        case match(RY): {
          return MRY;
        }

        default: {
          return M;
        }
      }
    }

    case match(`^[0-9]{4} ${ W }[0-9]{2}`): {
      switch (true) {
        case match(YTD): {
          return WYTD;
        }

        default: {
          return W;
        }
      }
    }

    default: {
      return null;
    }
  }
}