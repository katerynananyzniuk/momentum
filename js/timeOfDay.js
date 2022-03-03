let stampNum;
const date = new Date();
const hours = date.getHours();

function getTimeOfDay() {
    const dayStamp = ['morning', 'afternoon', 'evening', 'night']
    if (hours/6 < 1) {
        stampNum = 3;
        return  dayStamp[stampNum];
    }
    if (hours/6 < 2) {
        stampNum = 0;
        return dayStamp[stampNum];
    }
    if (hours/6 < 3) {
        stampNum = 1;
        return dayStamp[stampNum];
    }
    if (hours/6 < 4) {
        stampNum = 2;
        return dayStamp[stampNum];
    }
}

export {getTimeOfDay, stampNum};