(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "J7CO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hTlr");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JRPe");
/* harmony import */ var _data_messages_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vbMc");
/* harmony import */ var _data_messages_en__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_messages_en__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("PTt1");
/* harmony import */ var react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var intl_locale_data_jsonp_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("x+wt");
/* harmony import */ var intl_locale_data_jsonp_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intl_locale_data_jsonp_en__WEBPACK_IMPORTED_MODULE_5__);
Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[/* addLocaleData */ "c"])(react_intl_locale_data_en__WEBPACK_IMPORTED_MODULE_4___default.a);/* harmony default export */ __webpack_exports__["a"] = (function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],Object.assign({},props,{i18nMessages:_data_messages_en__WEBPACK_IMPORTED_MODULE_3___default.a}));});

/***/ }),

/***/ "PTt1":
/***/ (function(module, exports, __webpack_require__) {

!function (e, a) {
   true ? module.exports = a() : undefined;
}(this, function () {
  "use strict";

  return [{
    locale: "en",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      var t = String(e).split("."),
          o = !t[1],
          n = Number(t[0]) == e,
          r = n && t[0].slice(-1),
          i = n && t[0].slice(-2);
      return a ? 1 == r && 11 != i ? "one" : 2 == r && 12 != i ? "two" : 3 == r && 13 != i ? "few" : "other" : 1 == e && o ? "one" : "other";
    },
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yr."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yr. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hr."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hr. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} min."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} min. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} sec."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} sec. ago"
          }
        }
      }
    }
  }, {
    locale: "en-001",
    parentLocale: "en",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo",
            other: "in {0} mo"
          },
          past: {
            one: "{0} mo ago",
            other: "{0} mo ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-150",
    parentLocale: "en-001"
  }, {
    locale: "en-AG",
    parentLocale: "en-001"
  }, {
    locale: "en-AI",
    parentLocale: "en-001"
  }, {
    locale: "en-AS",
    parentLocale: "en"
  }, {
    locale: "en-AT",
    parentLocale: "en-150"
  }, {
    locale: "en-AU",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yrs"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yrs ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mo."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mo. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "h",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hrs"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hrs ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins"
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs"
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs ago"
          }
        }
      }
    }
  }, {
    locale: "en-BB",
    parentLocale: "en-001"
  }, {
    locale: "en-BE",
    parentLocale: "en-001"
  }, {
    locale: "en-BI",
    parentLocale: "en"
  }, {
    locale: "en-BM",
    parentLocale: "en-001"
  }, {
    locale: "en-BS",
    parentLocale: "en-001"
  }, {
    locale: "en-BW",
    parentLocale: "en-001"
  }, {
    locale: "en-BZ",
    parentLocale: "en-001"
  }, {
    locale: "en-CA",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr.",
        relative: {
          0: "this yr.",
          1: "next yr.",
          "-1": "last yr."
        },
        relativeTime: {
          future: {
            one: "in {0} yr.",
            other: "in {0} yrs."
          },
          past: {
            one: "{0} yr. ago",
            other: "{0} yrs. ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mo.",
        relative: {
          0: "this mo.",
          1: "next mo.",
          "-1": "last mo."
        },
        relativeTime: {
          future: {
            one: "in {0} mo.",
            other: "in {0} mos."
          },
          past: {
            one: "{0} mo. ago",
            other: "{0} mos. ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr.",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr.",
            other: "in {0} hrs."
          },
          past: {
            one: "{0} hr. ago",
            other: "{0} hrs. ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min.",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min.",
            other: "in {0} mins."
          },
          past: {
            one: "{0} min. ago",
            other: "{0} mins. ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec.",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec.",
            other: "in {0} secs."
          },
          past: {
            one: "{0} sec. ago",
            other: "{0} secs. ago"
          }
        }
      }
    }
  }, {
    locale: "en-CC",
    parentLocale: "en-001"
  }, {
    locale: "en-CH",
    parentLocale: "en-150"
  }, {
    locale: "en-CK",
    parentLocale: "en-001"
  }, {
    locale: "en-CM",
    parentLocale: "en-001"
  }, {
    locale: "en-CX",
    parentLocale: "en-001"
  }, {
    locale: "en-CY",
    parentLocale: "en-001"
  }, {
    locale: "en-DE",
    parentLocale: "en-150"
  }, {
    locale: "en-DG",
    parentLocale: "en-001"
  }, {
    locale: "en-DK",
    parentLocale: "en-150"
  }, {
    locale: "en-DM",
    parentLocale: "en-001"
  }, {
    locale: "en-Dsrt",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-ER",
    parentLocale: "en-001"
  }, {
    locale: "en-FI",
    parentLocale: "en-150"
  }, {
    locale: "en-FJ",
    parentLocale: "en-001"
  }, {
    locale: "en-FK",
    parentLocale: "en-001"
  }, {
    locale: "en-FM",
    parentLocale: "en-001"
  }, {
    locale: "en-GB",
    parentLocale: "en-001"
  }, {
    locale: "en-GD",
    parentLocale: "en-001"
  }, {
    locale: "en-GG",
    parentLocale: "en-001"
  }, {
    locale: "en-GH",
    parentLocale: "en-001"
  }, {
    locale: "en-GI",
    parentLocale: "en-001"
  }, {
    locale: "en-GM",
    parentLocale: "en-001"
  }, {
    locale: "en-GU",
    parentLocale: "en"
  }, {
    locale: "en-GY",
    parentLocale: "en-001"
  }, {
    locale: "en-HK",
    parentLocale: "en-001"
  }, {
    locale: "en-IE",
    parentLocale: "en-001"
  }, {
    locale: "en-IL",
    parentLocale: "en-001"
  }, {
    locale: "en-IM",
    parentLocale: "en-001"
  }, {
    locale: "en-IN",
    parentLocale: "en-001"
  }, {
    locale: "en-IO",
    parentLocale: "en-001"
  }, {
    locale: "en-JE",
    parentLocale: "en-001"
  }, {
    locale: "en-JM",
    parentLocale: "en-001"
  }, {
    locale: "en-KE",
    parentLocale: "en-001"
  }, {
    locale: "en-KI",
    parentLocale: "en-001"
  }, {
    locale: "en-KN",
    parentLocale: "en-001"
  }, {
    locale: "en-KY",
    parentLocale: "en-001"
  }, {
    locale: "en-LC",
    parentLocale: "en-001"
  }, {
    locale: "en-LR",
    parentLocale: "en-001"
  }, {
    locale: "en-LS",
    parentLocale: "en-001"
  }, {
    locale: "en-MG",
    parentLocale: "en-001"
  }, {
    locale: "en-MH",
    parentLocale: "en"
  }, {
    locale: "en-MO",
    parentLocale: "en-001"
  }, {
    locale: "en-MP",
    parentLocale: "en"
  }, {
    locale: "en-MS",
    parentLocale: "en-001"
  }, {
    locale: "en-MT",
    parentLocale: "en-001"
  }, {
    locale: "en-MU",
    parentLocale: "en-001"
  }, {
    locale: "en-MW",
    parentLocale: "en-001"
  }, {
    locale: "en-MY",
    parentLocale: "en-001"
  }, {
    locale: "en-NA",
    parentLocale: "en-001"
  }, {
    locale: "en-NF",
    parentLocale: "en-001"
  }, {
    locale: "en-NG",
    parentLocale: "en-001"
  }, {
    locale: "en-NL",
    parentLocale: "en-150"
  }, {
    locale: "en-NR",
    parentLocale: "en-001"
  }, {
    locale: "en-NU",
    parentLocale: "en-001"
  }, {
    locale: "en-NZ",
    parentLocale: "en-001"
  }, {
    locale: "en-PG",
    parentLocale: "en-001"
  }, {
    locale: "en-PH",
    parentLocale: "en-001"
  }, {
    locale: "en-PK",
    parentLocale: "en-001"
  }, {
    locale: "en-PN",
    parentLocale: "en-001"
  }, {
    locale: "en-PR",
    parentLocale: "en"
  }, {
    locale: "en-PW",
    parentLocale: "en-001"
  }, {
    locale: "en-RW",
    parentLocale: "en-001"
  }, {
    locale: "en-SB",
    parentLocale: "en-001"
  }, {
    locale: "en-SC",
    parentLocale: "en-001"
  }, {
    locale: "en-SD",
    parentLocale: "en-001"
  }, {
    locale: "en-SE",
    parentLocale: "en-150"
  }, {
    locale: "en-SG",
    parentLocale: "en-001",
    fields: {
      year: {
        displayName: "year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            one: "in {0} year",
            other: "in {0} years"
          },
          past: {
            one: "{0} year ago",
            other: "{0} years ago"
          }
        }
      },
      "year-short": {
        displayName: "yr",
        relative: {
          0: "this yr",
          1: "next yr",
          "-1": "last yr"
        },
        relativeTime: {
          future: {
            one: "in {0} yr",
            other: "in {0} yr"
          },
          past: {
            one: "{0} yr ago",
            other: "{0} yr ago"
          }
        }
      },
      month: {
        displayName: "month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            one: "in {0} month",
            other: "in {0} months"
          },
          past: {
            one: "{0} month ago",
            other: "{0} months ago"
          }
        }
      },
      "month-short": {
        displayName: "mth",
        relative: {
          0: "this mth",
          1: "next mth",
          "-1": "last mth"
        },
        relativeTime: {
          future: {
            one: "in {0} mth",
            other: "in {0} mth"
          },
          past: {
            one: "{0} mth ago",
            other: "{0} mth ago"
          }
        }
      },
      day: {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      "day-short": {
        displayName: "day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            one: "in {0} day",
            other: "in {0} days"
          },
          past: {
            one: "{0} day ago",
            other: "{0} days ago"
          }
        }
      },
      hour: {
        displayName: "hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hour",
            other: "in {0} hours"
          },
          past: {
            one: "{0} hour ago",
            other: "{0} hours ago"
          }
        }
      },
      "hour-short": {
        displayName: "hr",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            one: "in {0} hr",
            other: "in {0} hr"
          },
          past: {
            one: "{0} hr ago",
            other: "{0} hr ago"
          }
        }
      },
      minute: {
        displayName: "minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} minute",
            other: "in {0} minutes"
          },
          past: {
            one: "{0} minute ago",
            other: "{0} minutes ago"
          }
        }
      },
      "minute-short": {
        displayName: "min",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            one: "in {0} min",
            other: "in {0} min"
          },
          past: {
            one: "{0} min ago",
            other: "{0} min ago"
          }
        }
      },
      second: {
        displayName: "second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} second",
            other: "in {0} seconds"
          },
          past: {
            one: "{0} second ago",
            other: "{0} seconds ago"
          }
        }
      },
      "second-short": {
        displayName: "sec",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            one: "in {0} sec",
            other: "in {0} sec"
          },
          past: {
            one: "{0} sec ago",
            other: "{0} sec ago"
          }
        }
      }
    }
  }, {
    locale: "en-SH",
    parentLocale: "en-001"
  }, {
    locale: "en-SI",
    parentLocale: "en-150"
  }, {
    locale: "en-SL",
    parentLocale: "en-001"
  }, {
    locale: "en-SS",
    parentLocale: "en-001"
  }, {
    locale: "en-SX",
    parentLocale: "en-001"
  }, {
    locale: "en-SZ",
    parentLocale: "en-001"
  }, {
    locale: "en-Shaw",
    pluralRuleFunction: function pluralRuleFunction(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      "year-short": {
        displayName: "Year",
        relative: {
          0: "this year",
          1: "next year",
          "-1": "last year"
        },
        relativeTime: {
          future: {
            other: "+{0} y"
          },
          past: {
            other: "-{0} y"
          }
        }
      },
      month: {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      "month-short": {
        displayName: "Month",
        relative: {
          0: "this month",
          1: "next month",
          "-1": "last month"
        },
        relativeTime: {
          future: {
            other: "+{0} m"
          },
          past: {
            other: "-{0} m"
          }
        }
      },
      day: {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      "day-short": {
        displayName: "Day",
        relative: {
          0: "today",
          1: "tomorrow",
          "-1": "yesterday"
        },
        relativeTime: {
          future: {
            other: "+{0} d"
          },
          past: {
            other: "-{0} d"
          }
        }
      },
      hour: {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      "hour-short": {
        displayName: "Hour",
        relative: {
          0: "this hour"
        },
        relativeTime: {
          future: {
            other: "+{0} h"
          },
          past: {
            other: "-{0} h"
          }
        }
      },
      minute: {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      "minute-short": {
        displayName: "Minute",
        relative: {
          0: "this minute"
        },
        relativeTime: {
          future: {
            other: "+{0} min"
          },
          past: {
            other: "-{0} min"
          }
        }
      },
      second: {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      },
      "second-short": {
        displayName: "Second",
        relative: {
          0: "now"
        },
        relativeTime: {
          future: {
            other: "+{0} s"
          },
          past: {
            other: "-{0} s"
          }
        }
      }
    }
  }, {
    locale: "en-TC",
    parentLocale: "en-001"
  }, {
    locale: "en-TK",
    parentLocale: "en-001"
  }, {
    locale: "en-TO",
    parentLocale: "en-001"
  }, {
    locale: "en-TT",
    parentLocale: "en-001"
  }, {
    locale: "en-TV",
    parentLocale: "en-001"
  }, {
    locale: "en-TZ",
    parentLocale: "en-001"
  }, {
    locale: "en-UG",
    parentLocale: "en-001"
  }, {
    locale: "en-UM",
    parentLocale: "en"
  }, {
    locale: "en-US",
    parentLocale: "en"
  }, {
    locale: "en-VC",
    parentLocale: "en-001"
  }, {
    locale: "en-VG",
    parentLocale: "en-001"
  }, {
    locale: "en-VI",
    parentLocale: "en"
  }, {
    locale: "en-VU",
    parentLocale: "en-001"
  }, {
    locale: "en-WS",
    parentLocale: "en-001"
  }, {
    locale: "en-ZA",
    parentLocale: "en-001"
  }, {
    locale: "en-ZM",
    parentLocale: "en-001"
  }, {
    locale: "en-ZW",
    parentLocale: "en-001"
  }];
});

/***/ }),

/***/ "vbMc":
/***/ (function(module, exports) {

module.exports={'selectLanguage':'Select your language'};

/***/ }),

/***/ "x+wt":
/***/ (function(module, exports) {

IntlPolyfill.__addLocaleData({
  locale: "en",
  date: {
    ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
    hourNo0: true,
    hour12: true,
    formats: {
      short: "{1}, {0}",
      medium: "{1}, {0}",
      full: "{1} 'at' {0}",
      long: "{1} 'at' {0}",
      availableFormats: {
        "d": "d",
        "E": "ccc",
        Ed: "d E",
        Ehm: "E h:mm a",
        EHm: "E HH:mm",
        Ehms: "E h:mm:ss a",
        EHms: "E HH:mm:ss",
        Gy: "y G",
        GyMMM: "MMM y G",
        GyMMMd: "MMM d, y G",
        GyMMMEd: "E, MMM d, y G",
        "h": "h a",
        "H": "HH",
        hm: "h:mm a",
        Hm: "HH:mm",
        hms: "h:mm:ss a",
        Hms: "HH:mm:ss",
        hmsv: "h:mm:ss a v",
        Hmsv: "HH:mm:ss v",
        hmv: "h:mm a v",
        Hmv: "HH:mm v",
        "M": "L",
        Md: "M/d",
        MEd: "E, M/d",
        MMM: "LLL",
        MMMd: "MMM d",
        MMMEd: "E, MMM d",
        MMMMd: "MMMM d",
        ms: "mm:ss",
        "y": "y",
        yM: "M/y",
        yMd: "M/d/y",
        yMEd: "E, M/d/y",
        yMMM: "MMM y",
        yMMMd: "MMM d, y",
        yMMMEd: "E, MMM d, y",
        yMMMM: "MMMM y",
        yQQQ: "QQQ y",
        yQQQQ: "QQQQ y"
      },
      dateFormats: {
        yMMMMEEEEd: "EEEE, MMMM d, y",
        yMMMMd: "MMMM d, y",
        yMMMd: "MMM d, y",
        yMd: "M/d/yy"
      },
      timeFormats: {
        hmmsszzzz: "h:mm:ss a zzzz",
        hmsz: "h:mm:ss a z",
        hms: "h:mm:ss a",
        hm: "h:mm a"
      }
    },
    calendars: {
      buddhist: {
        months: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["BE"],
          short: ["BE"],
          long: ["BE"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      chinese: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
          long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      coptic: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
          short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
          long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["ERA0", "ERA1"],
          short: ["ERA0", "ERA1"],
          long: ["ERA0", "ERA1"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      dangi: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
          long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      ethiopic: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
          short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
          long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["ERA0", "ERA1"],
          short: ["ERA0", "ERA1"],
          long: ["ERA0", "ERA1"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      ethioaa: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
          short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
          long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["ERA0"],
          short: ["ERA0"],
          long: ["ERA0"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      generic: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
          long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["ERA0", "ERA1"],
          short: ["ERA0", "ERA1"],
          long: ["ERA0", "ERA1"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      gregory: {
        months: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["B", "A", "BCE", "CE"],
          short: ["BC", "AD", "BCE", "CE"],
          long: ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      hebrew: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
          short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
          long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["AM"],
          short: ["AM"],
          long: ["AM"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      indian: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
          long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["Saka"],
          short: ["Saka"],
          long: ["Saka"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      islamic: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
          long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["AH"],
          short: ["AH"],
          long: ["AH"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      islamicc: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
          long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["AH"],
          short: ["AH"],
          long: ["AH"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      japanese: {
        months: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
          short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
          long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      persian: {
        months: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
          long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["AP"],
          short: ["AP"],
          long: ["AP"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      },
      roc: {
        months: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        days: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        eras: {
          narrow: ["Before R.O.C.", "Minguo"],
          short: ["Before R.O.C.", "Minguo"],
          long: ["Before R.O.C.", "Minguo"]
        },
        dayPeriods: {
          am: "AM",
          pm: "PM"
        }
      }
    }
  },
  number: {
    nu: ["latn"],
    patterns: {
      decimal: {
        positivePattern: "{number}",
        negativePattern: "{minusSign}{number}"
      },
      currency: {
        positivePattern: "{currency}{number}",
        negativePattern: "{minusSign}{currency}{number}"
      },
      percent: {
        positivePattern: "{number}{percentSign}",
        negativePattern: "{minusSign}{number}{percentSign}"
      }
    },
    symbols: {
      latn: {
        decimal: ".",
        group: ",",
        nan: "NaN",
        plusSign: "+",
        minusSign: "-",
        percentSign: "%",
        infinity: "∞"
      }
    },
    currencies: {
      AUD: "A$",
      BRL: "R$",
      CAD: "CA$",
      CNY: "CN¥",
      EUR: "€",
      GBP: "£",
      HKD: "HK$",
      ILS: "₪",
      INR: "₹",
      JPY: "¥",
      KRW: "₩",
      MXN: "MX$",
      NZD: "NZ$",
      TWD: "NT$",
      USD: "$",
      VND: "₫",
      XAF: "FCFA",
      XCD: "EC$",
      XOF: "CFA",
      XPF: "CFPF"
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=158b1d7446b486520f3bdf2275f65a3c1c903e02-3c6d025f93cdbc6dd633.js.map