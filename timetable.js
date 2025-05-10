// 获取当前日期的星期几
function getWeekDay() {
    const now = new Date();
    return now.getDay();
}

// 根据星期几选择相应的数据（4号线）
function getArrivalTimesForToday(arrivalTimes) {
    const weekDay = getWeekDay();
    console.log(`Today is day: ${weekDay}`);

    const arrivalTimesForToday = {
        0: arrivalTimes.sunday,
        1: arrivalTimes.monday,
        2: arrivalTimes.tuesday,
        3: arrivalTimes.wednesday,
        4: arrivalTimes.thursday,
        5: arrivalTimes.friday,
        6: arrivalTimes.saturday,
    }[weekDay] || [];

    console.log("Arrival times for today:", arrivalTimesForToday);
    return Array.isArray(arrivalTimesForToday)? arrivalTimesForToday : [];
}

function padTime(number) {
    return String(number).padStart(2, '0');
}

function getCurrentTimeString() {
    const now = new Date();
    return `${padTime(now.getHours())}:${padTime(now.getMinutes())}:${padTime(now.getSeconds())}`;
}

function parseTimeString(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return { hours, minutes, seconds };
}

function calculateTimeRemaining(arrivalTime, currentTime) {
    const { hours: arrivalHours, minutes: arrivalMinutes, seconds: arrivalSeconds } = arrivalTime;
    const { hours: currentHours, minutes: currentMinutes, seconds: currentSeconds } = currentTime;

    const arrivalTotalSeconds = arrivalHours * 3600 + arrivalMinutes * 60 + arrivalSeconds;
    const currentTotalSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;

    let timeRemainingSeconds = arrivalTotalSeconds - currentTotalSeconds;
    if (timeRemainingSeconds < 0) {
        timeRemainingSeconds += 24 * 3600;
    }

    const hours = Math.floor(timeRemainingSeconds / 3600);
    timeRemainingSeconds %= 3600;
    const minutes = Math.floor(timeRemainingSeconds / 60);
    const seconds = Math.floor(timeRemainingSeconds % 60);

    return {
        hours,
        minutes,
        seconds,
        totalSeconds: arrivalTotalSeconds - currentTotalSeconds,
        timeString: `${padTime(hours)}小时 ${padTime(minutes)}分钟 ${padTime(seconds)}秒`
    };
}

function updateTable(tableId, arrivalTimesForToday) {
    console.log(tableId);
    console.log(arrivalTimesForToday);
    const tableBody = document.getElementById(tableId);
    tableBody.innerHTML = '';

    const currentTimeString = getCurrentTimeString();
    console.log(`Current time: ${currentTimeString}`);
    const currentTime = parseTimeString(currentTimeString);

    if (arrivalTimesForToday.length === 0) {
        console.log("No arrival times available for today.");
        return;
    }

    // 过滤掉已经过站的列车和到站时间超过30分钟的列车
    const filteredArrivalTimes = arrivalTimesForToday.filter(train => {
        const arrivalTime = parseTimeString(train.time);
        const timeRemaining = calculateTimeRemaining(arrivalTime, currentTime);
        const arrivalTotalSeconds = arrivalTime.hours * 3600 + arrivalTime.minutes * 60 + arrivalTime.seconds;
        const currentTotalSeconds = currentTime.hours * 3600 + currentTime.minutes * 60 + currentTime.seconds;

        return arrivalTotalSeconds > currentTotalSeconds && timeRemaining.totalSeconds <= 1800;
    });

    console.log(`Filtered arrival times:`, filteredArrivalTimes);

    // 计算剩余时间并排序
    const sortedArrivalTimes = filteredArrivalTimes.map(train => ({
        ...train,
        timeRemaining: calculateTimeRemaining(parseTimeString(train.time), currentTime)
    })).sort((a, b) => a.timeRemaining.hours * 3600 + a.timeRemaining.minutes * 60 + a.timeRemaining.seconds -
        (b.timeRemaining.hours * 3600 + b.timeRemaining.minutes * 60 + b.timeRemaining.seconds));

    console.log(`Sorted arrival times:`, sortedArrivalTimes);

    sortedArrivalTimes.forEach(train => {
        const row = document.createElement('tr');

        const destinationCell = document.createElement('td');
        destinationCell.textContent = train.destination;
        row.appendChild(destinationCell);

        const arrivalTimeCell = document.createElement('td');
        arrivalTimeCell.textContent = train.time;
        row.appendChild(arrivalTimeCell);

        const timeRemainingCell = document.createElement('td');
        timeRemainingCell.className = 'time-remaining';
        timeRemainingCell.textContent = train.timeRemaining.timeString;
        row.appendChild(timeRemainingCell);

        const jiaoluCell = document.createElement('td');
        jiaoluCell.textContent = train.jiaolu;
        row.appendChild(jiaoluCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = '正常';
        row.appendChild(statusCell);

        row.classList.remove('arriving-soon');

        if (train.timeRemaining.totalSeconds <= 60 && train.timeRemaining.totalSeconds > 0) {
            row.classList.add('arriving-soon');
            statusCell.textContent = '即将进站';
        }

        let statusUpdated = false;

        function updateStatus() {
            if (train.timeRemaining.totalSeconds > 0) {
                if (train.timeRemaining.totalSeconds <= 60) {
                    statusCell.textContent = '即将进站';
                    row.classList.add('arriving-soon');
                } else {
                    statusCell.textContent = '正常';
                    row.classList.remove('arriving-soon');
                }
            } 
            else {
                if (train.timeRemaining.totalSeconds === 0) {
                    statusUpdated = true;
                    statusCell.textContent = '列车到站';

                    // 先设置“列车到站”，然后 20秒后更改为“正在离开”
                    setTimeout(() => {
                        statusCell.textContent = '正在离开';

                        // 10秒后再隐藏行
                        setTimeout(() => {
                            row.style.display = 'none';
                        }, 10000); // 10秒后隐藏
                    }, 20000); // 20秒后更改为“正在离开”
                }
            }
        }

        // 每秒更新状态列
        const intervalId = setInterval(() => {
            if (!statusUpdated) {
                train.timeRemaining.totalSeconds--;
                timeRemainingCell.textContent = `${padTime(Math.floor(train.timeRemaining.totalSeconds / 3600))}小时 ${padTime(Math.floor((train.timeRemaining.totalSeconds % 3600) / 60))}分钟 ${padTime(train.timeRemaining.totalSeconds % 60)}秒`;
                updateStatus();
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        updateStatus();
        tableBody.appendChild(row);
    });
}