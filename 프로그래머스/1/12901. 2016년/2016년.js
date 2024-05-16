function solution(a, b) {
    let days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    let currentDay = 0;
    
    for (let i = 0; i < a - 1; i++) {
        currentDay += months[i];
    }
    currentDay += b;
    let currentDayValue = currentDay % 7 - 1;
    return days[currentDayValue >= 0 ? currentDayValue : days.length - 1];
}