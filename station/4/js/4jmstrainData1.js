const generateScheduleByTimeRange = (segments) => {
    const schedule = [];
    segments.forEach(({ destinations, jiaolu, startTime, endTime, interval }) => {
        let currentTime = new Date(`1970-01-01T${startTime}`);
        const end = new Date(`1970-01-01T${endTime}`);
        while (currentTime <= end) {
            schedule.push({
                destination: destinations[schedule.length % destinations.length],
                time: currentTime.toTimeString().slice(0, 8),
                jiaolu: jiaolu[schedule.length % jiaolu.length],
            });
            currentTime.setMinutes(currentTime.getMinutes() + interval);
        }
    });
    return schedule;
};

const arrivalTimes = {
    saturday: generateScheduleByTimeRange([
        {
            destinations: ['仙林湖', '东流'],
            jiaolu: ['大交路', '小交路'],
            startTime: '06:10:00',
            endTime: '07:51:00',
            interval: 5, // 早高峰间隔 5 分钟
        },
        {
            destinations: ['仙林湖', '东流'],
            jiaolu: ['大交路', '小交路'],
            startTime: '08:11:00',
            endTime: '10:10:00',
            interval: 10, // 非高峰间隔 10 分钟
        },
        {
            destinations: ['仙林湖', '东流'],
            jiaolu: ['大交路', '小交路'],
            startTime: '10:11:00',
            endTime: '12:10:00',
            interval: 8, // 普通时段间隔 8 分钟
        },
    ]),

    monday: [
        { destination: '终点站E', time: '11:00:00', jiaolu: '模式A' },
        { destination: '终点站F', time: '11:30:00', jiaolu: '模式B' },
    ],
    // 其他日期省略
};

export default arrivalTimes;
