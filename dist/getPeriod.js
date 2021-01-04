"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriod = getPeriod;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _dictionary = require("./dictionary");

var _getNotation = require("./getNotation");

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

function getMonday(year) {
  var day = new Date(year, 0, 1).getDay() || 7;
  return new Date(year, 0, day < 5 ? 2 - day : 9 - day).getTime();
}

function getPeriod(notation) {
  var _notation$split = notation.split('_'),
      _notation$split2 = (0, _slicedToArray2.default)(_notation$split, 3),
      type = _notation$split2[0],
      year = _notation$split2[1],
      number = _notation$split2[2];

  year = Number(year);
  number = Number(number);

  function handleOverflow(quantity) {
    if (number < 1 || number > quantity) {
      year = year + Math.ceil((number - quantity) / quantity);
      number = Math.abs(number + quantity) % quantity || quantity;
    }
  }

  var result = {
    date: {},
    type: _dictionary.dictionary[type]
  };

  switch (type) {
    case Y:
      {
        result.date.from = new Date(year, 0, 1);
        result.date.to = new Date(year + 1, 0, 0);
        result.value = "".concat(year);
        break;
      }

    case H:
    case HRY:
    case HYTD:
      {
        handleOverflow(2);
        result.date.from = new Date(year, 6 * (number - 1), 1);
        result.date.to = new Date(year, 6 * number, 0);
        result.value = "".concat(year, " ").concat(H).concat(number);
        break;
      }

    case Q:
    case QRY:
    case QYTD:
      {
        handleOverflow(4);
        result.date.from = new Date(year, 3 * (number - 1), 1);
        result.date.to = new Date(year, 3 * number, 0);
        result.value = "".concat(year, " ").concat(Q).concat(number);
        break;
      }

    case BM:
    case BMRY:
    case BMYTD:
      {
        handleOverflow(6);
        result.date.from = new Date(year, 2 * (number - 1), 1);
        result.date.to = new Date(year, 2 * number, 0);
        result.value = "".concat(year, ".").concat(addLeadingZero(2 * number - 1), "/").concat(addLeadingZero(2 * number));
        break;
      }

    case M:
    case MRY:
    case MYTD:
      {
        handleOverflow(12);
        result.date.from = new Date(year, number - 1, 1);
        result.date.to = new Date(year, number, 0);
        result.value = "".concat(year, ".").concat(addLeadingZero(number));
        break;
      }

    case W:
    case WYTD:
      {
        var monday = getMonday(year);
        result.date.from = new Date(monday + 7 * (number - 1) * 86400000);
        result.date.to = new Date(monday + (7 * number - 1) * 86400000);

        var _getNotation$split = (0, _getNotation.getNotation)(result.date.to, type).split('_');

        var _getNotation$split2 = (0, _slicedToArray2.default)(_getNotation$split, 3);

        type = _getNotation$split2[0];
        year = _getNotation$split2[1];
        number = _getNotation$split2[2];
        year = Number(year);
        number = Number(number);
        result.value = "".concat(year, " ").concat(W).concat(addLeadingZero(number));
        break;
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }

  switch (true) {
    case type.includes(RY):
      {
        result.date.from = new Date(year - 1, result.date.to.getMonth() + 1, 1);
        result.value = "".concat(result.value, " ").concat(RY);
        break;
      }

    case type.includes(YTD):
      {
        result.date.from = new Date(year, 0, 1);
        result.value = "".concat(result.value, " ").concat(YTD);
        break;
      }
  }

  return result;
}