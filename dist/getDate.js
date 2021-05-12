"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = getDate;

var _types = require("./types");

var _getPeriod = require("./getPeriod");

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

function bindRegexFuncs(regexPattern, propertyNames, toNotation) {
  var dataValidation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var regex = new RegExp(regexPattern, 'i');
  var functions = {
    validate: function validate(text) {
      return !!text.match(regex);
    },
    getValues: function getValues(text) {
      var match = regex.exec(text);
      var result = {};

      for (var i = 1; i < match.length; i++) {
        result[propertyNames[i - 1]] = match[i];
      }

      return result;
    },
    getNotation: function getNotation(text) {
      var values = functions.getValues(text);

      if (!dataValidation(values)) {
        return null;
      }

      return toNotation(values);
    }
  };
  return functions;
}

var hValidationFunc = function hValidationFunc(_ref) {
  var halfYear = _ref.halfYear;
  var halfYearNumber = Number(halfYear);

  if (halfYearNumber > 2 || halfYearNumber === 0) {
    return false;
  }

  return true;
};

var qValidationFunc = function qValidationFunc(_ref2) {
  var quarterYear = _ref2.quarterYear;
  var quarterYearNumber = Number(quarterYear);

  if (quarterYearNumber > 4 || quarterYearNumber === 0) {
    return false;
  }

  return true;
};

var bmValidationFunc = function bmValidationFunc(_ref3) {
  var firstMonth = _ref3.firstMonth,
      secondMonth = _ref3.secondMonth;

  if (Number(secondMonth) - Number(firstMonth) !== 1) {
    return false;
  }

  if (Number(firstMonth) % 2 === 0) {
    return false;
  }

  if (Number(firstMonth) > 12 || Number(secondMonth) > 12) {
    return false;
  }

  return true;
};

var mValidationFunc = function mValidationFunc(_ref4) {
  var month = _ref4.month;

  if (Number(month) > 12) {
    return false;
  }

  return true;
};

function getDate(text, type) {
  var regexFuncs = null;
  text = text.toUpperCase().replace(/\s\s+/g, ' ').trim();

  if (type === Y) {
    regexFuncs = bindRegexFuncs(/^(\d{4})$/i, ['year'], function (_ref5) {
      var year = _ref5.year;
      return "".concat(Y, "_").concat(year);
    });
  } else if (type === H) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(H, "(\\d{1})$"), ['year', 'halfYear'], function (_ref6) {
      var year = _ref6.year,
          halfYear = _ref6.halfYear;
      return "".concat(H, "_").concat(year, "_").concat(halfYear);
    }, hValidationFunc);
  } else if (type === HRY) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(H, "(\\d{1}) RY$"), ['year', 'halfYear'], function (_ref7) {
      var year = _ref7.year,
          halfYear = _ref7.halfYear;
      return "".concat(HRY, "_").concat(year, "_").concat(halfYear);
    }, hValidationFunc);
  } else if (type === HYTD) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(H, "(\\d{1}) YTD$"), ['year', 'halfYear'], function (_ref8) {
      var year = _ref8.year,
          halfYear = _ref8.halfYear;
      return "".concat(HYTD, "_").concat(year, "_").concat(halfYear);
    }, hValidationFunc);
  } else if (type === Q) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(Q, "(\\d{1})$"), ['year', 'quarterYear'], function (_ref9) {
      var year = _ref9.year,
          quarterYear = _ref9.quarterYear;
      return "".concat(Q, "_").concat(year, "_").concat(quarterYear);
    }, qValidationFunc);
  } else if (type === QRY) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(Q, "(\\d{1}) RY$"), ['year', 'quarterYear'], function (_ref10) {
      var year = _ref10.year,
          quarterYear = _ref10.quarterYear;
      return "".concat(QRY, "_").concat(year, "_").concat(quarterYear);
    }, qValidationFunc);
  } else if (type === QYTD) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(Q, "(\\d{1}) YTD$"), ['year', 'quarterYear'], function (_ref11) {
      var year = _ref11.year,
          quarterYear = _ref11.quarterYear;
      return "".concat(QYTD, "_").concat(year, "_").concat(quarterYear);
    }, qValidationFunc);
  } else if (type === BM) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2})\/(\d{2})$/i, ['year', 'firstMonth', 'secondMonth'], function (_ref12) {
      var year = _ref12.year,
          firstMonth = _ref12.firstMonth;
      return "".concat(BM, "_").concat(year, "_").concat(Math.floor(Number(firstMonth) / 2) + 1);
    }, bmValidationFunc);
  } else if (type === BMRY) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2})\/(\d{2}) RY$/i, ['year', 'firstMonth', 'secondMonth'], function (_ref13) {
      var year = _ref13.year,
          firstMonth = _ref13.firstMonth;
      return "".concat(BMRY, "_").concat(year, "_").concat(Math.floor(Number(firstMonth) / 2) + 1);
    }, bmValidationFunc);
  } else if (type === BMYTD) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2})\/(\d{2}) YTD$/i, ['year', 'firstMonth', 'secondMonth'], function (_ref14) {
      var year = _ref14.year,
          firstMonth = _ref14.firstMonth;
      return "".concat(BMYTD, "_").concat(year, "_").concat(Math.floor(Number(firstMonth) / 2) + 1);
    }, bmValidationFunc);
  } else if (type === M) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2})$/i, ['year', 'month'], function (_ref15) {
      var year = _ref15.year,
          month = _ref15.month;
      return "".concat(M, "_").concat(year, "_").concat(month);
    }, mValidationFunc);
  } else if (type === MRY) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2}) RY$/i, ['year', 'month'], function (_ref16) {
      var year = _ref16.year,
          month = _ref16.month;
      return "".concat(MRY, "_").concat(year, "_").concat(month);
    }, mValidationFunc);
  } else if (type === MYTD) {
    regexFuncs = bindRegexFuncs(/^(\d{4})\.(\d{2}) YTD$/i, ['year', 'month'], function (_ref17) {
      var year = _ref17.year,
          month = _ref17.month;
      return "".concat(MYTD, "_").concat(year, "_").concat(month);
    }, mValidationFunc);
  } else if (type === W) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(W, "(\\d{2})$"), ['year', 'week'], function (_ref18) {
      var year = _ref18.year,
          week = _ref18.week;
      return "".concat(W, "_").concat(year, "_").concat(week);
    });
  } else if (type === WYTD) {
    regexFuncs = bindRegexFuncs("^(\\d{4}) ".concat(W, "(\\d{2}) YTD$"), ['year', 'week'], function (_ref19) {
      var year = _ref19.year,
          week = _ref19.week;
      return "".concat(WYTD, "_").concat(year, "_").concat(week);
    });
  } else {
    return null;
  }

  if (!regexFuncs.validate(text)) {
    return null;
  }

  var period;

  try {
    period = (0, _getPeriod.getPeriod)(regexFuncs.getNotation(text), type);
  } catch (e) {
    period = null;
  }

  return period;
}