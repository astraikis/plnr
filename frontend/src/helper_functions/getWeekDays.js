function getWeekDays(month, day) {
    var monthDays = {
        '1': 31,
        '2': 28,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }
    const days = []
    const maxDay = monthDays[String(month)]

    for (let i = 0; i < 7; i++) {
        if (i + day > maxDay) {
            if (month + 1 > 12) {
                days.push('1/' + String((day + i) - maxDay))
            } else {
                days.push(String(month + 1) + '/' + String((day + i) - maxDay))
            }
        } else {
            days.push(String(month) + '/' + String(day + i))
        }
    }
    
    return days
}

export default getWeekDays