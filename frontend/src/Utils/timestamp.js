function getFomatLastTime(time) {
    if (typeof time === 'string') {
        time = Date.parse(time);
    }
    const currentTime = Date.now();
    const lastTime = currentTime - time;
    let result, num;

    if (lastTime < 1000) {
        result = 'Just now';
    } else if (lastTime < 60000) {
        num = Math.floor(lastTime / 1000);
        num = String(num).padStart(2, '0');
        result = `${num} s`;
    } else if (lastTime < 3600000) {
        num = Math.floor(lastTime / 60000);
        num = String(num).padStart(2, '0');
        result = `${num} m`;
    } else if (lastTime < 86400000) {
        num = Math.floor(lastTime / 3600000);
        num = String(num).padStart(2, '0');
        result = `${num} h`;
    } else if (lastTime < 604800000) {
        num = Math.floor(lastTime / 86400000);
        num = String(num).padStart(2, '0');
        result = `${num} d`;
    } else if (lastTime < 172800000) {
        result = `Yesterday`;
    } else if (lastTime < 2419200000) {
        num = Math.floor(lastTime / 604800000);
        num = String(num).padStart(2, '0');
        result = `${num} w`;
    } else if (lastTime >= 2419200000) {
        let tempTime = new Date(time);
        result = `${String(tempTime.getDate()).padStart(2, '0')}, ${String(
            tempTime.getMonth() + 1
        ).padStart(2, '0')}, ${tempTime.getFullYear()}`;
    } else {
        throw new Error('Something went wrong with time format');
    }

    return result;
}

function getMessageTime(time) {
    const currentTime = Date.now();
    const currentYear = new Date().getFullYear();
    const lastTime = currentTime - time;
    time = new Date(time);
    let hours = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let date = String(time.getDate()).padStart(2, '0');
    let month = String(time.getMonth() + 1).padStart(2, '0');
    let year = String(time.getFullYear()).padStart(2, '0');
    let result, num;

    if (currentYear !== time.getFullYear()) {
        result = `${date}/${month}/${year}`;
    } else if (lastTime < 60000) {
        num = Math.floor(lastTime / 1000);
        num = String(num).padStart(2, '0');
        result = `${num} s`;
    } else if (lastTime < 3600000) {
        num = Math.floor(lastTime / 60000);
        num = String(num).padStart(2, '0');
        result = `${num} m`;
    } else if (lastTime < 86400000) {
        result = `${hours}:${minutes}`;
    } else if (lastTime < 172800000) {
        result = `Yesterday`;
    } else if (lastTime >= 172800000) {
        result = `${date}/${month}`;
    } else {
        throw new Error('Something went wrong with time format');
    }
    return result;
}

export {getFomatLastTime, getMessageTime};
