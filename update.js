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

function updateTable() {
    const tableBody = document.getElementById('train-table-body');
    tableBody.innerHTML = '';

    const currentTimeString = getCurrentTimeString();
    const currentTime = parseTimeString(currentTimeString);

    // 计算剩余时间并排序
    const sortedArrivalTimes = arrivalTimes.map(train => ({
        ...train,
        timeRemaining: calculateTimeRemaining(parseTimeString(train.time), currentTime)
    })).sort((a, b) => a.timeRemaining.hours * 3600 + a.timeRemaining.minutes * 60 + a.timeRemaining.seconds - 
                      (b.timeRemaining.hours * 3600 + b.timeRemaining.minutes * 60 + b.timeRemaining.seconds));

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
        timeRemainingCell.textContent = train.timeRemaining.totalSeconds > 0 ? train.timeRemaining.timeString : "已到站";
        row.appendChild(timeRemainingCell);

        const jiaoluCell = document.createElement('td');
        jiaoluCell.textContent = train.jiaolu;
        row.appendChild(jiaoluCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = '正常';
        row.appendChild(statusCell);

        var alreadyLeft = false;

        if (train.timeRemaining.totalSeconds > 0) {
            if (train.timeRemaining.totalSeconds <= 60) {
                statusCell.textContent = '即将进站';
                row.classList.add('arriving-soon');
            }
        } else if (train.timeRemaining.totalSeconds >= -10) {
            statusCell.textContent = '即将离开';
            row.classList.add('leaving-soon');
        } else {
            alreadyLeft = true;
        }

        if (!alreadyLeft) {
            tableBody.appendChild(row);
        }
    });
}

function run() {
    updateTable();
    setInterval(updateTable, 1000);
}