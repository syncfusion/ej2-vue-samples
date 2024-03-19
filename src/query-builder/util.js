function getCELQuery(rules, celQuery) {
    celQuery = convertQuery(rules, celQuery, null, 'CEL');
    return celQuery;
}
exports.getCELQuery = getCELQuery;
function getSpELQuery(rules, spELQuery) {
    spELQuery = convertQuery(rules, spELQuery);
    return spELQuery;
}
exports.getSpELQuery = getSpELQuery;
var convertQuery = function (rules, celQuery, spELQuery, type) {
    var isRoot = false;
    var celOperators = {
        equal: '==', notequal: '!=', greaterthan: '>', greaterthanorequal: '>=', lessthan: '<', in: 'in', notin: 'in',
        lessthanorequal: '<=', startswith: 'startsWith', endswith: 'endsWith', contains: 'contains', isnull: '== null', isnotnull: '!= null',
        isempty: '== ""', isnotempty: '!= ""'
    };
    var spELOperators = {
        equal: '==', notequal: '!=', greaterthan: '>', greaterthanorequal: '>=', lessthan: '<', in: 'in', notin: 'in',
        lessthanorequal: '<=', startswith: 'matches', endswith: 'matches', contains: 'matches', isnull: '== null', isnotnull: '!= null',
        isempty: '== ""', isnotempty: '!= ""'
    };
    if (type === 'CEL') {
        if (!celQuery && celQuery !== '') {
            celQuery = '';
            isRoot = true;
        }
        else {
            celQuery += '(';
        }
    }
    else {
        if (!spELQuery && spELQuery !== '') {
            spELQuery = '';
            isRoot = true;
        }
        else {
            spELQuery += '(';
        }
    }
    var condition = rules.condition;
    if (rules.rules) {
        for (var j = 0, jLen = rules.rules.length; j < jLen; j++) {
            if (rules.rules[j].rules) {
                if (type === 'CEL') {
                    celQuery = convertQuery(rules.rules[j], celQuery, null, 'CEL');
                }
                else {
                    spELQuery = convertQuery(rules.rules[j], null, spELQuery, 'SpEL');
                }
            }
            else {
                var rule = rules.rules[j];
                var valueStr = '';
                var ruleOpertor = (type === 'CEL') ? celOperators[rule.operator] : spELOperators[rule.operator];
                var operator = rule.operator.toString();
                if (rule.value instanceof Array) {
                    if (operator === 'between') {
                        var ruleCondition = ' ' + '&&' + ' ';
                        if (rule.type === 'date') {
                            valueStr += '(' + rule.field + ' >= "' + rule.value[0] + '"' + ruleCondition + rule.field + ' <= "' + rule.value[1] + '")';
                        }
                        else {
                            valueStr += '(' + rule.field + ' >= ' + rule.value[0] + ruleCondition + rule.field + ' <= ' + rule.value[1] + ')';
                        }
                    }
                    else if (operator === 'notbetween') {
                        var ruleCondition = ' ' + '||' + ' ';
                        if (rule.type === 'date') {
                            valueStr += '(' + rule.field + ' < "' + rule.value[0] + '"' + ruleCondition + rule.field + ' > "' + rule.value[1] + '")';
                        }
                        else {
                            valueStr += '(' + rule.field + ' < ' + rule.value[0] + ruleCondition + rule.field + ' > ' + rule.value[1] + ')';
                        }
                    }
                    else {
                        if (type === 'CEL') {
                            if (rule.value !== null) {
                                var value = rule.value[0] ? rule.value[0] : "";
                                valueStr += '["' + value + '"';
                                for (var k = 1, kLen = rule.value.length; k < kLen; k++) {
                                    valueStr += ', "' + rule.value[k] + '"';
                                }
                                valueStr += ']';
                            }
                        }
                        else {
                            if (rule.value !== null) {
                                var value = rule.value[0] ? rule.value[0] : "";
                                valueStr += '(' + rule.field + ' == "' + value + '"';
                                for (var k = 1, kLen = rule.value.length; k < kLen; k++) {
                                    valueStr += ' or ' + rule.field + ' == "' + rule.value[k] + '"';
                                }
                                valueStr += ')';
                            }
                        }
                    }
                }
                else {
                    if (type === 'CEL') {
                        if (rule.type === 'number' || typeof rule.value === 'boolean' || rule.value === null) {
                            valueStr += rule.value;
                        }
                        else {
                            valueStr += '"' + rule.value + '"';
                        }
                    }
                    else {
                        if (operator.indexOf('startswith') > -1) {
                            valueStr += rule.value ? '"^' + rule.value + '"' : '(' + rule.value + ')';
                        }
                        else if (operator.indexOf('endswith') > -1) {
                            valueStr += rule.value ? '"' + rule.value + '$"' : '(' + rule.value + ')';
                        }
                        else if (operator.indexOf('contains') > -1) {
                            valueStr += rule.value ? '"' + rule.value + '"' : '(' + rule.value + ')';
                        }
                        else if (operator.indexOf('isempty') > -1) {
                            valueStr += '';
                        }
                        else {
                            if (rule.type === 'number' || typeof rule.value === 'boolean' || rule.value === null) {
                                valueStr += rule.value;
                            }
                            else {
                                valueStr += '"' + rule.value + '"';
                            }
                        }
                    }
                }
                if (operator.indexOf('null') > -1 || (operator.indexOf('empty') > -1)) {
                    if (rule.field.indexOf(' ') > -1) {
                        rule.field = '"' + rule.field + '"';
                    }
                    if (type === 'CEL') {
                        celQuery += rule.field + ' ' + ruleOpertor;
                    }
                    else {
                        spELQuery += rule.field + ' ' + ruleOpertor;
                    }
                }
                else {
                    if (rule.field.indexOf(' ') > -1) {
                        rule.field = '"' + rule.field + '"';
                    }
                    if (type === 'CEL') {
                        if (operator.indexOf('startswith') > -1 || (operator.indexOf('endswith') > -1) || (operator.indexOf('contains') > -1)) {
                            celQuery += rule.field + '.' + ruleOpertor + '(' + valueStr + ')';
                        }
                        else if (operator.indexOf('between') > -1) {
                            celQuery += valueStr;
                        }
                        else if (operator.indexOf('notin') > -1) {
                            celQuery += '!(' + rule.field + ' ' + ruleOpertor + ' ' + valueStr + ')';
                        }
                        else {
                            celQuery += rule.field + ' ' + ruleOpertor + ' ' + valueStr;
                        }
                    }
                    else {
                        if (operator.indexOf('between') > -1 || operator === 'in') {
                            spELQuery += valueStr;
                        }
                        else if (operator.indexOf('notin') > -1) {
                            spELQuery += '!' + valueStr;
                        }
                        else {
                            spELQuery += rule.field + ' ' + ruleOpertor + ' ' + valueStr;
                        }
                    }
                }
                if (rule.condition && rule.condition !== '') {
                    condition = rule.condition;
                }
            }
            if (j !== jLen - 1) {
                var rule = rules.rules[j];
                if (condition === '' || (rule && rule.condition !== '' && rule.custom && (rule.custom).isCustom)) {
                    condition = rule.condition;
                }
                if (type === 'CEL') {
                    condition = condition.toUpperCase();
                    if (condition === 'AND') {
                        celQuery += ' && ';
                    }
                    else {
                        celQuery += ' || ';
                    }
                }
                else {
                    condition = condition.toLowerCase();
                    spELQuery += ' ' + condition + ' ';
                }
            }
        }
    }
    if (!isRoot) {
        if (type === 'CEL') {
            celQuery += ')';
        }
        else {
            spELQuery += ')';
        }
    }
    if (type === 'CEL') {
        return celQuery;
    }
    return spELQuery;
};