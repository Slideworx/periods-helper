"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotation = getNotation;
exports.getPeriod = getPeriod;
exports.getPeriods = getPeriods;
exports.dictionary = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dictionary;

var Y = 'Y';
var H = 'H';
var H_RY = 'HRY';
var H_YTD = 'HYTD';
var Q = 'Q';
var Q_RY = 'QRY';
var Q_YTD = 'QYTD';
var BM = 'BM';
var BM_RY = 'BMRY';
var BM_YTD = 'BMYTD';
var M = 'M';
var M_RY = 'MRY';
var M_YTD = 'MYTD';
var W = 'W';
var W_YTD = 'WYTD';
var RY = 'RY';
var YTD = 'YTD';

function addLeadingZero(number) {
  return number < 10 ? "0".concat(number) : number;
}

var dictionary = (_dictionary = {}, (0, _defineProperty2.default)(_dictionary, Y, {
  description: 'Years',
  label: 'Year'
}), (0, _defineProperty2.default)(_dictionary, H, {
  description: 'Half-years',
  label: 'Half-year'
}), (0, _defineProperty2.default)(_dictionary, H_RY, {
  description: "2 half-years ending at the given ".concat(H),
  label: 'Rolling year (from half-years)'
}), (0, _defineProperty2.default)(_dictionary, H_YTD, {
  description: 'Cumulative half-years from beginning of the year',
  label: 'Year-to-date (from half-years)'
}), (0, _defineProperty2.default)(_dictionary, Q, {
  description: 'Quarters',
  label: 'Quarter'
}), (0, _defineProperty2.default)(_dictionary, Q_RY, {
  description: "4 quarters ending at the given ".concat(Q),
  label: 'Rolling year (from quarters)'
}), (0, _defineProperty2.default)(_dictionary, Q_YTD, {
  description: 'Cumulative quarters from beginning of the year',
  label: 'Year-to-date (from quarters)'
}), (0, _defineProperty2.default)(_dictionary, BM, {
  description: 'Bi-months',
  label: 'Bi-month'
}), (0, _defineProperty2.default)(_dictionary, BM_RY, {
  description: "6 bi-months ending at the given ".concat(BM),
  label: 'Rolling year (from bi-months)'
}), (0, _defineProperty2.default)(_dictionary, BM_YTD, {
  description: 'Cumulative bi-months from beginning of the year',
  label: 'Year-to-date (from bi-months)'
}), (0, _defineProperty2.default)(_dictionary, M, {
  description: 'Months',
  label: 'Month'
}), (0, _defineProperty2.default)(_dictionary, M_RY, {
  description: "12 months ending at the given ".concat(M),
  label: 'Rolling year (from months)'
}), (0, _defineProperty2.default)(_dictionary, M_YTD, {
  description: 'Cumulative months from beginning of the year',
  label: 'Year-to-date (from months)'
}), (0, _defineProperty2.default)(_dictionary, W, {
  description: 'Weeks',
  label: 'Week'
}), (0, _defineProperty2.default)(_dictionary, W_YTD, {
  description: 'Cumulative weeks from beginning of the year',
  label: 'Year-to-date (from weeks)'
}), _dictionary);
exports.dictionary = dictionary;

function getNotation(date, type) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;

  switch (type) {
    case Y:
      {
        return "".concat(type, "_").concat(year);
      }

    case H:
    case H_RY:
    case H_YTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 6));
      }

    case Q:
    case Q_RY:
    case Q_YTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 3));
      }

    case BM:
    case BM_RY:
    case BM_YTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(Math.ceil(month / 2));
      }

    case M:
    case M_RY:
    case M_YTD:
      {
        return "".concat(type, "_").concat(year, "_").concat(month);
      }

    case W:
    case W_YTD:
      {
        throw new Error('Weeks are not yet supported');
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }
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
    if (number > quantity) {
      year = year + Math.ceil((number - quantity) / quantity);
      number = number % quantity || quantity;
    }
  }

  var result = {
    date: {},
    type: dictionary[type]
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
    case H_RY:
    case H_YTD:
      {
        handleOverflow(2);
        result.date.from = new Date(year, 6 * (number - 1), 1);
        result.date.to = new Date(year, 6 * number, 0);
        result.value = "".concat(year, " ").concat(H).concat(number);
        break;
      }

    case Q:
    case Q_RY:
    case Q_YTD:
      {
        handleOverflow(4);
        result.date.from = new Date(year, 3 * (number - 1), 1);
        result.date.to = new Date(year, 3 * number, 0);
        result.value = "".concat(year, " ").concat(Q).concat(number);
        break;
      }

    case BM:
    case BM_RY:
    case BM_YTD:
      {
        handleOverflow(6);
        result.date.from = new Date(year, 2 * (number - 1), 1);
        result.date.to = new Date(year, 2 * number, 0);
        result.value = "".concat(year, ".").concat(addLeadingZero(2 * number - 1), "/").concat(addLeadingZero(2 * number));
        break;
      }

    case M:
    case M_RY:
    case M_YTD:
      {
        handleOverflow(12);
        result.date.from = new Date(year, number - 1, 1);
        result.date.to = new Date(year, number, 0);
        result.value = "".concat(year, ".").concat(addLeadingZero(number));
        break;
      }

    case W:
    case W_YTD:
      {
        throw new Error('Weeks are not yet supported');
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

function getPeriods(notation, range) {
  var _notation$split3 = notation.split('_'),
      _notation$split4 = (0, _slicedToArray2.default)(_notation$split3, 3),
      type = _notation$split4[0],
      year = _notation$split4[1],
      number = _notation$split4[2];

  year = Number(year);
  number = Number(number);
  var descending = range < 0;
  var quantity = Math.abs(range);
  var result = [];

  switch (type) {
    case Y:
      {
        for (var i = 0; i < quantity; i++) {
          result.push("".concat(type, "_").concat(descending ? year - i : year + i));
        }

        break;
      }

    case H:
    case H_RY:
    case H_YTD:
    case Q:
    case Q_RY:
    case Q_YTD:
    case BM:
    case BM_RY:
    case BM_YTD:
    case M:
    case M_RY:
    case M_YTD:
    case W:
    case W_YTD:
      {
        for (var _i = 0; _i < quantity; _i++) {
          result.push("".concat(type, "_").concat(year, "_").concat(descending ? number - _i : number + _i));
        }

        break;
      }

    default:
      {
        throw new Error('Invalid type');
      }
  }

  switch (true) {
    case descending:
      {
        result.reverse();
        break;
      }
  }

  return result.map(getPeriod);
}
