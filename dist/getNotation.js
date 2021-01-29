"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotation = getNotation;

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

function getMonday(year) {
  var day = new Date(year, 0, 1).getDay() || 7;
  return new Date(year, 0, day < 5 ? 2 - day : 9 - day).getTime();
}

function getNotation(date, type) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;

  switch (type) {
    case Y:
      {
        return "".concat(type, "_").concat(year);
      }

    case H:
    case HRY:
    case HYTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 6));
      }

    case Q:
    case QRY:
    case QYTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 3));
      }

    case BM:
    case BMRY:
    case BMYTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 2));
      }

    case M:
    case MRY:
    case MYTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(month);
      }

    case W:
    case WYTD:
      {
        var monday = getMonday(year);

        if (date < monday) {
          year = year - 1;
          monday = getMonday(year);
        }

        return "".concat(type, "_").concat(year, "_").concat(Math.ceil((date - monday) / 604800000));
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }
}