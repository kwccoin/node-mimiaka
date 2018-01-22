/* global exports */

function parseValue(str) {
    const VALUE = /\[((?:\\\]|[^\]])*)\]\s*/g;
    let value, result;
    while ((value = VALUE.exec(str))) {
        switch (typeof result) {
            case 'undefined':
                result = value[1];
                break;
            case 'string':
                result = [result, value[1]];
                break;
            default:
                result.push(value[1]);
        }
    }
    return result;
}

function sgfGetValueOf1stRoot(sgf, propIdent) {
    const match = sgf.match(RegExp("^\\s*\\(\\s*;\\s*(?:(?:[A-Z]+\\s*(?:\\[(?:\\\\\\]|[^\\]])*\\]\\s*)+)*)(?:" + propIdent + "\\s*((?:\\[(?:\\\\\\]|[^\\]])*\\]\\s*)+))"));
    if (match != null) {
        return parseValue(match[1]);
    } else {
        return null;
    }
}

function isLive(sgfOrRoot) {
    const re = typeof sgfOrRoot === 'string' ?
        sgfGetValueOf1stRoot(sgfOrRoot, 'RE') :
        sgfOrRoot.RE;
    return !(re && !['未知', '不明'].includes(re)); // '' is false
}

exports.parseValue = parseValue;
exports.sgfGetValueOf1stRoot = sgfGetValueOf1stRoot;
exports.isLive = isLive;
