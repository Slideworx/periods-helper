"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriod = getPeriod;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

function addLeadingZero(number) {
  return number < 10 ? "0".concat(number) : number;
}

function getISOWeeks(y) {
  var d = new Date(y, 0, 1);
  var isLeap = new Date(y, 1, 29).getMonth() === 1;
  return d.getDay() === 4 || isLeap && d.getDay() === 3 ? 53 : 52;
}

function getPeriod(notation) {
  var _notation$split = notation.split('_'),
      _notation$split2 = (0, _slicedToArray2.default)(_notation$split, 3),
      type = _notation$split2[0],
      year = _notation$split2[1],
      number = _notation$split2[2];

  year = Number(year);
  number = Number(number);
  var result = {
    type: type,
    date: {}
  };
  var newMonthFrom;

  switch (type) {
    case Y:
      {
        result.date.from = new Date(year, 0, 1);
        result.date.to = new Date(year + 1, 0, 1);
        result.date.to.setSeconds(result.date.to.getSeconds() - 1);
        result.value = "".concat(year);
        break;
      }

    case H:
    case HRY:
    case HYTD:
      {
        newMonthFrom = number > 0 ? 6 * (number - 1) : 6 * number;
        result.date.from = new Date(year, newMonthFrom, 1);
        result.date.to = new Date(year, newMonthFrom + 6, 1);
        result.date.to.setSeconds(result.date.to.getSeconds() - 1);
        result.value = "".concat(result.date.from.getFullYear(), " ").concat(H).concat(Math.floor((result.date.from.getMonth() + 1) / 6) + 1);
        break;
      }

    case Q:
    case QRY:
    case QYTD:
      {
        newMonthFrom = number > 0 ? 3 * (number - 1) : 3 * number;
        result.date.from = new Date(year, newMonthFrom, 1);
        result.date.to = new Date(year, newMonthFrom + 3, 1);
        result.date.to.setSeconds(result.date.to.getSeconds() - 1);
        result.value = "".concat(result.date.from.getFullYear(), " ").concat(Q).concat(Math.floor((result.date.from.getMonth() + 1) / 3) + 1);
        break;
      }

    case BM:
    case BMRY:
    case BMYTD:
      {
        newMonthFrom = number > 0 ? 2 * (number - 1) : 2 * number;
        result.date.from = new Date(year, newMonthFrom, 1);
        result.date.to = new Date(year, newMonthFrom + 2, 1);
        result.date.to.setSeconds(result.date.to.getSeconds() - 1);
        result.value = "".concat(result.date.from.getFullYear(), ".").concat(addLeadingZero(result.date.from.getMonth() + 1), "/").concat(addLeadingZero(result.date.to.getMonth() + 1));
        break;
      }

    case M:
    case MRY:
    case MYTD:
      {
        newMonthFrom = number > 0 ? number - 1 : number;
        result.date.from = new Date(year, newMonthFrom, 1);
        result.date.to = new Date(year, newMonthFrom + 1, 1);
        result.date.to.setSeconds(result.date.to.getSeconds() - 1);
        result.value = "".concat(result.date.from.getFullYear(), ".").concat(addLeadingZero(result.date.from.getMonth() + 1));
        break;
      }

    case W:
    case WYTD:
      {
        if (number < 0) {
          var nYear = year;
          var nNumber = number;
          var currentNYearWeeks;

          while (true) {
            nYear--;
            currentNYearWeeks = getISOWeeks(nYear);

            if (Math.abs(nNumber) > currentNYearWeeks) {
              nNumber += currentNYearWeeks;
            } else {
              nNumber = currentNYearWeeks + nNumber + 1;
              break;
            }
          }

          var tempResult = getPeriod("".concat(W, "_").concat(nYear, "_").concat(nNumber));
          result.date = tempResult.date;
          result.value = tempResult.value;
        } else {
          var simple = new Date(year, 0, 1 + (number - 1) * 7);
          var dow = simple.getDay();
          var ISOweekStart = simple;

          if (dow <= 4) {
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
          } else {
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
          }

          var ISOweekEnd = new Date(ISOweekStart.getTime());
          ISOweekEnd.setDate(ISOweekStart.getDate() + 7);
          ISOweekEnd.setSeconds(ISOweekEnd.getSeconds() - 1);
          result.date.from = ISOweekStart;
          result.date.to = ISOweekEnd;
          result.value = "".concat(year, " ").concat(W).concat(addLeadingZero(number));
        }

        break;
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }

  if (type.includes(RY)) {
    result.date.from = new Date(result.date.to.getFullYear(), result.date.to.getMonth() + 1 - 12, 1);
    result.value = "".concat(result.value, " ").concat(RY);
  } else if (type.includes(YTD)) {
    result.date.from = new Date(result.date.from.getFullYear(), 0, 1);
    result.value = "".concat(result.value, " ").concat(YTD);

    if (type.includes(WYTD)) {
      result.date.from = getPeriod("W_".concat(year, "_1")).date.from;
    }
  }

  return result;
}