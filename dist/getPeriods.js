"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriods = getPeriods;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _getPeriod = require("./getPeriod");

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
    WYTD = _types.types.WYTD;

function getPeriods(notation, range) {
  var _notation$split = notation.split('_'),
      _notation$split2 = (0, _slicedToArray2.default)(_notation$split, 3),
      type = _notation$split2[0],
      year = _notation$split2[1],
      number = _notation$split2[2];

  year = Number(year);
  number = Number(number);
  var ascending = range > 0;
  var quantity = Math.abs(range);
  var result = [];

  switch (type) {
    case Y:
      {
        for (var i = 0; i < quantity; i++) {
          result[ascending ? 'push' : 'unshift']("".concat(type, "_").concat(ascending ? year + i : year - i));
        }

        break;
      }

    case H:
    case HRY:
    case HYTD:
    case Q:
    case QRY:
    case QYTD:
    case BM:
    case BMRY:
    case BMYTD:
    case M:
    case MRY:
    case MYTD:
    case W:
    case WYTD:
      {
        for (var _i = 0; _i < quantity; _i++) {
          result[ascending ? 'push' : 'unshift']("".concat(type, "_").concat(year, "_").concat(ascending ? number + _i : number - _i || number - _i - 1));
        }

        break;
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }

  return result.map(_getPeriod.getPeriod);
}