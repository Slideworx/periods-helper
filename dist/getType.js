"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = getType;

var _types = require("./types");

var Y = _types.types.Y,
    H = _types.types.H,
    HRY = _types.types.HRY,
    HYTD = _types.types.HYTD,
    Q = _types.types.Q,
    QRY = _types.types.QRY,
    QYTD = _types.types.QYTD,
    BM = _types.types.BM,
    BMRY = _types.types.BMRY,
    BMYTD = _types.types.BMYTD,
    M = _types.types.M,
    MRY = _types.types.MRY,
    MYTD = _types.types.MYTD,
    W = _types.types.W,
    WYTD = _types.types.WYTD,
    _types$RY = _types.types.RY,
    RY = _types$RY === void 0 ? 'RY' : _types$RY,
    _types$YTD = _types.types.YTD,
    YTD = _types$YTD === void 0 ? 'YTD' : _types$YTD;

function getType(value) {
  function match(string) {
    return new RegExp(string).test(value);
  }

  switch (true) {
    case match('^[0-9]{4}$'):
      {
        return Y;
      }

    case match("^[0-9]{4} ".concat(H, "[0-9]")):
      {
        switch (true) {
          case match(YTD):
            {
              return HYTD;
            }

          case match(RY):
            {
              return HRY;
            }

          default:
            {
              return H;
            }
        }
      }

    case match("^[0-9]{4} ".concat(Q, "[0-9]")):
      {
        switch (true) {
          case match(YTD):
            {
              return QYTD;
            }

          case match(RY):
            {
              return QRY;
            }

          default:
            {
              return Q;
            }
        }
      }

    case match('^[0-9]{4}.[0-9]{2}.[0-9]{2}'):
      {
        switch (true) {
          case match(YTD):
            {
              return BMYTD;
            }

          case match(RY):
            {
              return BMRY;
            }

          default:
            {
              return BM;
            }
        }
      }

    case match('^[0-9]{4}.[0-9]{2}'):
      {
        switch (true) {
          case match(YTD):
            {
              return MYTD;
            }

          case match(RY):
            {
              return MRY;
            }

          default:
            {
              return M;
            }
        }
      }

    case match("^[0-9]{4} ".concat(W, "[0-9]{2}")):
      {
        switch (true) {
          case match(YTD):
            {
              return WYTD;
            }

          default:
            {
              return W;
            }
        }
      }

    default:
      {
        return null;
      }
  }
}