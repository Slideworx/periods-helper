"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dictionary = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

var _dictionary;

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
var dictionary = (_dictionary = {}, (0, _defineProperty2.default)(_dictionary, Y, {
  description: 'Years',
  label: 'Year'
}), (0, _defineProperty2.default)(_dictionary, H, {
  description: 'Half-years',
  label: 'Half-year'
}), (0, _defineProperty2.default)(_dictionary, HRY, {
  description: "2 half-years ending at the given ".concat(H),
  label: 'Rolling year (from half-years)'
}), (0, _defineProperty2.default)(_dictionary, HYTD, {
  description: 'Cumulative half-years from beginning of the year',
  label: 'Year-to-date (from half-years)'
}), (0, _defineProperty2.default)(_dictionary, Q, {
  description: 'Quarters',
  label: 'Quarter'
}), (0, _defineProperty2.default)(_dictionary, QRY, {
  description: "4 quarters ending at the given ".concat(Q),
  label: 'Rolling year (from quarters)'
}), (0, _defineProperty2.default)(_dictionary, QYTD, {
  description: 'Cumulative quarters from beginning of the year',
  label: 'Year-to-date (from quarters)'
}), (0, _defineProperty2.default)(_dictionary, BM, {
  description: 'Bi-months',
  label: 'Bi-month'
}), (0, _defineProperty2.default)(_dictionary, BMRY, {
  description: "6 bi-months ending at the given ".concat(BM),
  label: 'Rolling year (from bi-months)'
}), (0, _defineProperty2.default)(_dictionary, BMYTD, {
  description: 'Cumulative bi-months from beginning of the year',
  label: 'Year-to-date (from bi-months)'
}), (0, _defineProperty2.default)(_dictionary, M, {
  description: 'Months',
  label: 'Month'
}), (0, _defineProperty2.default)(_dictionary, MRY, {
  description: "12 months ending at the given ".concat(M),
  label: 'Rolling year (from months)'
}), (0, _defineProperty2.default)(_dictionary, MYTD, {
  description: 'Cumulative months from beginning of the year',
  label: 'Year-to-date (from months)'
}), (0, _defineProperty2.default)(_dictionary, W, {
  description: 'Weeks',
  label: 'Week'
}), (0, _defineProperty2.default)(_dictionary, WYTD, {
  description: 'Cumulative weeks from beginning of the year',
  label: 'Year-to-date (from weeks)'
}), _dictionary);
exports.dictionary = dictionary;