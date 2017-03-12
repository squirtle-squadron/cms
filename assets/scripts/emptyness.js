"use strict";

const isBlank = function (str) {
    return (!str || /^\s*$/.test(str));
};

module.exports = {
  isBlank
};
