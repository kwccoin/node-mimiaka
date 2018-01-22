/* global exports */
function twoDigits(n) {
    return `0${n}`.slice(-2);
}

function dateString(date) {
    /* returns YYYY-MM-DD */
    return date.getFullYear().toString() +
    '-' + twoDigits(date.getMonth() + 1) +
    '-' + twoDigits(date.getDate());
}

exports.twoDigits = twoDigits;
exports.dateString = dateString;
