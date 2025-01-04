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
        timeRemainingSeconds += 24 * 3600; // 处理跨天情况
    }

    const hours = Math.floor(timeRemainingSeconds / 3600);
    timeRemainingSeconds %= 3600;
    const minutes = Math.floor(timeRemainingSeconds / 60);
    const seconds = Math.floor(timeRemainingSeconds % 60);

    return { 
        hours, 
        minutes, 
        seconds, 
        totalSeconds: arrivalTotalSeconds - currentTotalSeconds, // 这里添加 totalSeconds 属性
        timeString: `${padTime(hours)}小时 ${padTime(minutes)}分钟 ${padTime(seconds)}秒` 
    };
}

function updateTable() {
    const tableBody = document.getElementById('train-table-body');
    tableBody.innerHTML = ''; // 清空表格内容

    const currentTimeString = getCurrentTimeString();
    const currentTime = parseTimeString(currentTimeString);

    // 过滤掉已经过站的列车
    const filteredArrivalTimes = arrivalTimes.filter(train => {
        const arrivalTime = parseTimeString(train.time);
        return currentTime.hours < arrivalTime.hours || 
               (currentTime.hours === arrivalTime.hours && currentTime.minutes < arrivalTime.minutes) ||
               (currentTime.hours === arrivalTime.hours && currentTime.minutes === arrivalTime.minutes && currentTime.seconds < arrivalTime.seconds);
    });

    // 计算剩余时间并排序
    const sortedArrivalTimes = filteredArrivalTimes.map(train => ({
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
        timeRemainingCell.textContent = train.timeRemaining.timeString;
        row.appendChild(timeRemainingCell);

        const jiaoluCell = document.createElement('td');
        jiaoluCell.textContent = train.jiaolu;
        row.appendChild(jiaoluCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = '正常';
        row.appendChild(statusCell);

        let statusUpdated = false;

        function updateStatus() {
            if (train.timeRemaining.totalSeconds > 0) {
                if (train.timeRemaining.totalSeconds <= 60) {
                    statusCell.textContent = '即将进站';
                    if (train.timeRemaining.totalSeconds <= 60) {
                        row.classList.add('arriving-soon');
                    } else {
                        row.classList.remove('arriving-soon');
                    }
                } else {
                    statusCell.textContent = '正常';
                    row.classList.remove('arriving-soon');
                }
            } else {
                if (train.timeRemaining.totalSeconds === 0) {
                    statusUpdated = true;
                    setTimeout(() => {
                        statusCell.textContent = '正在离开';
                    }, 10000); // 10秒后显示“正在离开”
                    setTimeout(() => {
                        row.style.display = 'none';
                    }, 15000); // 再等待5秒钟后隐藏行
                }
            }
        }

        // 每秒更新状态列
        const intervalId = setInterval(() => {
            if (!statusUpdated) {
                train.timeRemaining.totalSeconds--;
                updateStatus();
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        // 如果列车在1分钟内到达，将该行的背景色更改为深绿色
        if (train.timeRemaining.totalSeconds <= 60 && train.timeRemaining.totalSeconds > 0) {
            row.classList.add('arriving-soon');
        }

        updateStatus(); // 初始更新

        tableBody.appendChild(row);
    });
}

function run() {
    updateTable();
    setInterval(updateTable, 1000);
}