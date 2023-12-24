/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = '';
    const separator = options?.separator || "+";
    const additionStr = getAdditionalStr(options);

    if (options?.repeatTimes) {
        for (let i = 0; i < options?.repeatTimes; i++) {
            if (i !== options.repeatTimes - 1) {
                result += `${str}${additionStr}${separator}`;
            } else {
                result += `${str}${additionStr}`
            }
        }
    } else {
        result = `${str}${additionStr}`;
    }

    return result;
}

function getAdditionalStr(options) {
    let additionalStr = '';
    const addition = (typeof options?.addition === 'boolean' || `${options?.addition}` === 'null')
        ? `${options?.addition}`
        : (`${options?.addition}` === 'undefined')
            ? ''
            : options?.addition;

    const separator = !options?.additionRepeatTimes
        ? ''
        : options?.additionSeparator
            ? options?.additionSeparator
            : '|';


    if (addition) {
        if (options?.additionRepeatTimes) {
            for (let i=0; i<options.additionRepeatTimes; i++) {
                if (i !== options.additionRepeatTimes - 1) {
                    additionalStr += `${options.addition}${separator}`;
                } else {
                    additionalStr += `${options.addition}`;
                }
            }
        } else {
            additionalStr = `${options.addition}`;
        }
    }

    return additionalStr
}

module.exports = {
    repeater
};
