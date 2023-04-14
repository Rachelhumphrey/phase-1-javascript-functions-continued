function saturdayFun(activity = `roller-skate`) {
    return (`This Saturday, I want to ${activity}!`)
}
function mondayWork(activity = `go to the office`) {
    return (`This Monday, I will ${activity}.`)
}
function wrapAdjective(adjective = '*') {
    return function(value = "special") {
        return `You are ${adjective}${value}${adjective}!`
    }
}
wrapAdjective('||')('a dedicated programmer')